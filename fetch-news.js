// Récupère les dernières actualités du vrai site du lycée
// et les enregistre dans data/news.json (images téléchargées en local).
// Usage : node fetch-news.js
// Sortie : code 0 si OK (au moins 1 actu valide), 1 sinon (news.json inchangé).

const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const SITE = 'https://www.lyceejacquescartier.fr';
const HOMEPAGE = SITE + '/';
const OUT_JSON = path.join(BASE, 'data', 'news.json');
const IMG_DIR = path.join(BASE, 'images');
const MAX_ITEMS = 6;

const HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
    'Accept': 'text/html'
};

const NAMED_ENTITIES = {
    amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
    eacute: 'é', egrave: 'è', ecirc: 'ê', euml: 'ë',
    agrave: 'à', acirc: 'â', auml: 'ä',
    ugrave: 'ù', ucirc: 'û', uuml: 'ü',
    igrave: 'ì', icirc: 'î', iuml: 'ï',
    ograve: 'ò', ocirc: 'ô', ouml: 'ö',
    ccedil: 'ç', laquo: '«', raquo: '»',
    hellip: '…', mdash: '—', ndash: '–', rsquo: '’', lsquo: '‘'
};

function decodeEntities(s) {
    return s
        .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
        .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(parseInt(d, 10)))
        .replace(/&([a-zA-Z]+);/g, (_, n) => (NAMED_ENTITIES[n] !== undefined ? NAMED_ENTITIES[n] : '&' + n + ';'));
}

function cleanText(s) {
    if (!s) return '';
    return decodeEntities(s.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function attr(tag, name) {
    const m = tag.match(new RegExp(name + '\\s*=\\s*"([^"]*)"', 'i'));
    return m ? m[1].trim() : '';
}

function absoluteUrl(u) {
    if (!u) return '';
    if (/^https?:\/\//i.test(u)) return u;
    return SITE + (u.startsWith('/') ? u : '/' + u);
}

function parseNews(html) {
    const ul = html.match(/<ul[^>]*id="listecol434"[^>]*>([\s\S]*?)<\/ul>/i);
    if (!ul) throw new Error('Bloc actualités (ul#listecol434) introuvable dans la page');
    const items = [];
    const liRe = /<li\b[^>]*>([\s\S]*?)<\/li>/gi;
    let m;
    while ((m = liRe.exec(ul[1])) !== null && items.length < MAX_ITEMS) {
        const li = m[1];
        const a = li.match(/<a\b[^>]*href="([^"]+)"[^>]*>/i);
        const imgTag = li.match(/<img\b[^>]*>/i);
        const dateM = li.match(/<div[^>]*class="[^"]*liste_fiches_DATE[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
        const titleM = li.match(/<h1[^>]*class="[^"]*liste_fiches_TITRE[^"]*"[^>]*>([\s\S]*?)<\/h1>/i);
        const descM = li.match(/<p[^>]*class="[^"]*liste_fiches_DESC[^"]*"[^>]*>([\s\S]*?)<\/p>/i);
        const url = a ? absoluteUrl(a[1]) : '';
        const title = titleM ? cleanText(titleM[1]) : '';
        if (!url || !title) continue; // item invalide : on l'ignore
        let imgUrl = '';
        if (imgTag) {
            imgUrl = attr(imgTag[0], 'src-url') || attr(imgTag[0], 'src');
            imgUrl = absoluteUrl(imgUrl);
        }
        items.push({
            title,
            date: dateM ? cleanText(dateM[1]) : '',
            desc: descM ? cleanText(descM[1]) : '',
            url,
            imgUrl
        });
    }
    return items;
}

async function downloadImage(url, destPath) {
    if (fs.existsSync(destPath)) return false; // déjà en local
    const res = await fetch(url, { headers: HEADERS });
    if (!res.ok) throw new Error('HTTP ' + res.status + ' pour ' + url);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 1024) throw new Error('Image vide ou trop petite : ' + url);
    fs.writeFileSync(destPath, buf);
    return true;
}

async function main() {
    console.log('Récupération des actualités depuis ' + HOMEPAGE + ' ...');
    const res = await fetch(HOMEPAGE, { headers: HEADERS });
    if (!res.ok) throw new Error('HTTP ' + res.status + ' sur la page d accueil');
    const html = await res.text();
    const items = parseNews(html);
    if (items.length === 0) throw new Error('Aucune actualité valide trouvée, news.json inchangé');

    const news = [];
    for (const it of items) {
        let localImg = '';
        const fiche = it.url.match(/_fiche_(\d+)\.html/i);
        if (it.imgUrl && fiche) {
            const ext = (it.imgUrl.match(/\.(webp|jpe?g|png|gif)(\?|$)/i) || [])[1] || 'webp';
            const fileName = 'news-fiche-' + fiche[1] + '.' + ext.toLowerCase();
            const dest = path.join(IMG_DIR, fileName);
            try {
                const dl = await downloadImage(it.imgUrl, dest);
                console.log((dl ? 'Téléchargée : ' : 'Déjà en local : ') + fileName);
                localImg = 'images/' + fileName;
            } catch (e) {
                console.log('Image ignorée (' + e.message + '), lien distant conservé');
                localImg = it.imgUrl; // repli : URL distante
            }
        } else if (it.imgUrl) {
            localImg = it.imgUrl;
        }
        news.push({ title: it.title, date: it.date, desc: it.desc, url: it.url, image: localImg });
        console.log('- ' + it.date + ' | ' + it.title);
    }

    fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
    fs.writeFileSync(OUT_JSON, JSON.stringify(news, null, 2) + '\n', 'utf8');
    console.log('OK : ' + news.length + ' actualités enregistrées dans data/news.json');
}

main().catch(err => {
    console.error('ERREUR : ' + err.message);
    process.exit(1);
});
