const fs = require('fs');
const path = require('path');

const BASE = __dirname;

function head(title) {
return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Lycée Jacques Cartier</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
</head>
<body>`;
}

function topBar() {
return `
    <div class="top-bar">
        <div class="container top-bar-inner">
            <div class="top-bar-left">
                <a href="plan-du-site.html" class="top-link"><i class="fas fa-map-marker-alt"></i> 31 rue de la Balue, 35409 Saint-Malo</a>
                <a href="tel:0299828700" class="top-link"><i class="fas fa-phone"></i> 02 99 82 87 00</a>
                <a href="mailto:ce.0350048m@ac-rennes.fr" class="top-link"><i class="fas fa-envelope"></i> ce.0350048m@ac-rennes.fr</a>
            </div>
            <div class="top-bar-right">
                <a href="http://www.toutatice.fr/portail" class="top-icon" title="ENT Toutatice" target="_blank"><i class="fas fa-school"></i></a>
                <a href="https://porte-voix.app/chaine/radio-jacques-cartier" class="top-icon" title="Webradio" target="_blank"><i class="fas fa-broadcast-tower"></i></a>
                <a href="https://www.youtube.com/channel/UCLGgBuo9JBzot-zApb6xHAQ" class="top-icon" title="YouTube" target="_blank"><i class="fab fa-youtube"></i></a>
                <a href="https://www.instagram.com/lyceejacquescartier_stm/" class="top-icon" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>`;
}

function header() {
return `
    <header class="header" id="header">
        <div class="container header-inner">
            <a href="index.html" class="logo">
                <img src="images/logo.png" alt="Lycée Jacques Cartier" class="logo-img">
                <div class="logo-text">
                    <span class="logo-title">Lycée Jacques Cartier</span>
                    <span class="logo-subtitle">Saint-Malo</span>
                </div>
            </a>
            <nav class="nav" id="nav">
                <ul class="nav-list">
                    <li class="nav-item"><a href="index.html">Accueil</a></li>
                    <li class="nav-item has-dropdown">
                        <a href="#">Le Lycée <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown">
                            <li><a href="histoire.html">Histoire du lycée</a></li>
                            <li><a href="images.html">Le lycée en images</a></li>
                            <li><a href="organigramme.html">Organigramme</a></li>
                            <li><a href="medias.html">Le lycée dans les médias</a></li>
                            <li><a href="temoignages.html">Témoignages d'anciens élèves</a></li>
                            <li><a href="liaisons.html">Liaisons avec d'autres établissements</a></li>
                        </ul>
                    </li>
                    <li class="nav-item has-dropdown">
                        <a href="#">Nos Formations <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown">
                            <li><a href="seconde.html">Seconde générale et technologique</a></li>
                            <li><a href="generale.html">Voie générale</a></li>
                            <li><a href="stmg.html">Voie technologique STMG</a></li>
                            <li><a href="pro.html">Voie professionnelle</a></li>
                            <li><a href="superieur.html">Enseignement supérieur</a></li>
                            <li><a href="reunion-pp.html">Réunion parents-professeur</a></li>
                        </ul>
                    </li>
                    <li class="nav-item has-dropdown">
                        <a href="#">La Vie <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown">
                            <li><a href="vie-scolaire.html">Vie scolaire</a></li>
                            <li><a href="cdi.html">Le CDI</a></li>
                            <li><a href="sportive.html">Association sportive</a></li>
                            <li><a href="entreprise.html">Lien avec l'entreprise</a></li>
                            <li><a href="sante-social.html">Santé-Social</a></li>
                            <li><a href="parents.html">Parents d'élèves</a></li>
                            <li><a href="webradio.html">Notre webradio</a></li>
                        </ul>
                    </li>
                    <li class="nav-item has-dropdown">
                        <a href="#">Orientation <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown">
                            <li><a href="orientation-seconde.html">Après la seconde</a></li>
                            <li><a href="orientation-premiere.html">Après la première</a></li>
                            <li><a href="parcoursup.html">Parcoursup</a></li>
                        </ul>
                    </li>
                    <li class="nav-item has-dropdown">
                        <a href="#">Pratique <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown">
                            <li><a href="rentree.html">Rentrée scolaire</a></li>
                            <li><a href="agenda.html">Agenda</a></li>
                            <li><a href="inscriptions.html">Inscriptions</a></li>
                            <li><a href="internat.html">Internat</a></li>
                            <li><a href="restauration.html">Restauration</a></li>
                            <li><a href="transports.html">Transports</a></li>
                            <li><a href="bourses.html">Bourses</a></li>
                            <li><a href="manuels.html">Manuels scolaires</a></li>
                            <li><a href="reglement.html">Règlement intérieur</a></li>
                        </ul>
                    </li>
                    <li class="nav-item has-dropdown">
                        <a href="#">Entreprises <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown">
                            <li><a href="entreprises.html">Taxe d'apprentissage</a></li>
                            <li><a href="entreprises.html">Stage / PFMP</a></li>
                            <li><a href="entreprises.html">Allocation Stage / PFMP</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a href="international.html">International</a></li>
                    <li class="nav-item"><a href="portes-ouvertes.html">Portes Ouvertes</a></li>
                </ul>
            </nav>
            <div class="header-actions">
                <button class="search-btn" id="searchToggle"><i class="fas fa-search"></i></button>
                <button class="burger" id="burger"><span></span><span></span><span></span></button>
            </div>
        </div>
        <div class="search-overlay" id="searchOverlay">
            <div class="container search-container">
                <input type="text" placeholder="Rechercher sur le site..." class="search-input">
                <button class="search-close" id="searchClose"><i class="fas fa-times"></i></button>
            </div>
        </div>
    </header>`;
}

function mobileNav() {
return `
    <div class="mobile-nav" id="mobileNav">
        <div class="mobile-nav-bg" id="mobileNavBg"></div>
        <div class="mobile-nav-panel">
            <button class="mobile-nav-close" id="mobileNavClose"><i class="fas fa-times"></i></button>
            <ul class="mobile-nav-list">
                <li><a href="index.html"><i class="fas fa-home"></i> Accueil</a></li>
                <li class="mobile-dropdown">
                    <details><summary>Le Lycée</summary>
                    <ul class="mobile-sub">
                        <li><a href="histoire.html">Histoire du lycée</a></li>
                        <li><a href="images.html">Le lycée en images</a></li>
                        <li><a href="organigramme.html">Organigramme</a></li>
                        <li><a href="liaisons.html">Liaisons</a></li>
                        <li><a href="medias.html">Le lycée dans les médias</a></li>
                        <li><a href="temoignages.html">Témoignages</a></li>
                    </ul></details>
                </li>
                <li class="mobile-dropdown">
                    <details><summary>Nos Formations</summary>
                    <ul class="mobile-sub">
                        <li><a href="seconde.html">Seconde</a></li>
                        <li><a href="generale.html">Voie générale</a></li>
                        <li><a href="stmg.html">STMG</a></li>
                        <li><a href="pro.html">Voie professionnelle</a></li>
                        <li><a href="superieur.html">Enseignement supérieur</a></li>
                        <li><a href="reunion-pp.html">Réunion PP</a></li>
                    </ul></details>
                </li>
                <li class="mobile-dropdown">
                    <details><summary>La Vie</summary>
                    <ul class="mobile-sub">
                        <li><a href="vie-scolaire.html">Vie scolaire</a></li>
                        <li><a href="cdi.html">Le CDI</a></li>
                        <li><a href="sportive.html">Association sportive</a></li>
                        <li><a href="entreprise.html">L'entreprise</a></li>
                        <li><a href="sante-social.html">Santé-Social</a></li>
                        <li><a href="parents.html">Parents d'élèves</a></li>
                        <li><a href="webradio.html">Webradio</a></li>
                    </ul></details>
                </li>
                <li class="mobile-dropdown">
                    <details><summary>Orientation</summary>
                    <ul class="mobile-sub">
                        <li><a href="orientation-seconde.html">Après la seconde</a></li>
                        <li><a href="orientation-premiere.html">Après la première</a></li>
                        <li><a href="parcoursup.html">Parcoursup</a></li>
                    </ul></details>
                </li>
                <li class="mobile-dropdown">
                    <details><summary>Pratique</summary>
                    <ul class="mobile-sub">
                        <li><a href="rentree.html">Rentrée</a></li>
                        <li><a href="agenda.html">Agenda</a></li>
                        <li><a href="inscriptions.html">Inscriptions</a></li>
                        <li><a href="internat.html">Internat</a></li>
                        <li><a href="restauration.html">Restauration</a></li>
                        <li><a href="transports.html">Transports</a></li>
                        <li><a href="bourses.html">Bourses</a></li>
                        <li><a href="manuels.html">Manuels scolaires</a></li>
                        <li><a href="reglement.html">Règlement</a></li>
                    </ul></details>
                </li>
                <li class="mobile-dropdown">
                    <details><summary>Entreprises</summary>
                    <ul class="mobile-sub">
                        <li><a href="entreprises.html">Taxe d'apprentissage</a></li>
                        <li><a href="entreprises.html">Stage / PFMP</a></li>
                        <li><a href="entreprises.html">Allocation Stage / PFMP</a></li>
                    </ul></details>
                </li>
                <li><a href="international.html">International</a></li>
                <li><a href="portes-ouvertes.html">Portes Ouvertes</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    </div>`;
}

function pageHero(title, subtitle, bg) {
return `
    <section class="page-hero" style="background-image: url('${bg}')">
        <div class="page-hero-content">
            <h1 class="page-hero-title">${title}</h1>
            <p class="page-hero-subtitle">${subtitle}</p>
            <div class="breadcrumb">
                <a href="index.html">Accueil</a> <span>/</span> <span>${title}</span>
            </div>
        </div>
    </section>`;
}

function qrSection() {
return `
    <section class="qr-section">
        <div class="container qr-inner">
            <div class="qr-text">
                <h3><i class="fas fa-mobile-alt"></i> Scanner la brochure</h3>
                <p>Accédez à la brochure numérique du lycée avec votre smartphone</p>
            </div>
            <div class="qr-code-box">
                <img src="images/qr-brochure.jpg" alt="QR Code Brochure" style="width:80px;height:80px;border-radius:8px;">
                <span>Brochure 2025-2026</span>
            </div>
        </div>
    </section>`;
}

function backToTop() {
return `
    <button class="back-to-top" id="backToTop" aria-label="Retour en haut">
        <i class="fas fa-arrow-up"></i>
    </button>`;
}

function cookieNotice() {
return `
    <div class="cookie-notice" id="cookieNotice">
        <div class="container cookie-inner">
            <span>En poursuivant votre navigation, vous acceptez l'utilisation de cookies. <a href="mentions-legales.html">En savoir plus</a></span>
            <div class="cookie-btns">
                <button class="cookie-btn cookie-btn-ghost cookie-accept">Refuser</button>
                <button class="cookie-btn cookie-btn-primary cookie-accept">Accepter</button>
            </div>
        </div>
    </div>`;
}

function footer() {
return `
    <footer class="footer">
        <div class="footer-main">
            <div class="container footer-grid footer-grid--simple">
                <div class="footer-col">
                    <h4>Informations pratiques</h4>
                    <ul>
                        <li><a href="rentree.html">Rentrée scolaire</a></li>
                        <li><a href="agenda.html">Agenda</a></li>
                        <li><a href="inscriptions.html">Inscriptions</a></li>
                        <li><a href="internat.html">Internat</a></li>
                        <li><a href="restauration.html">Restauration</a></li>
                        <li><a href="transports.html">Transports</a></li>
                        <li><a href="bourses.html">Bourses</a></li>
                        <li><a href="manuels.html">Manuels scolaires</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contact</h4>
                    <ul class="footer-contact">
                        <li><i class="fas fa-map-marker-alt"></i> 31 rue de la Balue<br>BP 30018<br>35409 SAINT MALO Cedex</li>
                        <li><i class="fas fa-phone"></i> 02 99 82 87 00</li>
                        <li><i class="fas fa-envelope"></i> ce.0350048m@ac-rennes.fr</li>
                    </ul>
                    <div class="footer-social">
                        <a href="https://www.youtube.com/channel/UCLGgBuo9JBzot-zApb6xHAQ" title="YouTube" target="_blank"><i class="fab fa-youtube"></i></a>
                        <a href="https://www.instagram.com/lyceejacquescartier_stm/" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="http://www.toutatice.fr/portail" title="ENT Toutatice" target="_blank"><i class="fas fa-school"></i></a>
                        <a href="https://porte-voix.app/chaine/radio-jacques-cartier" title="Webradio" target="_blank"><i class="fas fa-broadcast-tower"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container footer-bottom-inner">
                <p>&copy; 2026 Lycée Jacques Cartier - Tous droits réservés</p>
                <div class="footer-links">
                    <a href="mentions-legales.html">Mentions légales</a>
                    <a href="plan-du-site.html">Plan du site</a>
                    <a href="contact.html">Contact</a>
                </div>
            </div>
        </div>
    </footer>
    ${backToTop()}
    ${cookieNotice()}
    <script src="js/script.js"></script>
</body>
</html>`;
}

function writePage(filename, content) {
    fs.writeFileSync(path.join(BASE, filename), content, 'utf8');
    console.log('Created: ' + filename);
}

// ============================
// PAGE D'ACCUEIL
// ============================
writePage('index.html', head('Accueil') + topBar() + header() + mobileNav() + `
    <section class="hero" id="hero">
        <div class="hero-slides">
            <div class="hero-slide active" style="background-image: url('images/slide-1.webp')">
                <div class="hero-overlay"></div>
                <div class="hero-content">
                    <h1 class="hero-title">Un lycée général,<br>technologique et professionnel</h1>
                    <p class="hero-subtitle">Saint-Malo, Ille-et-Vilaine</p>
                    <a href="histoire.html" class="btn btn-primary">Découvrir le lycée</a>
                </div>
            </div>
            <div class="hero-slide" style="background-image: url('images/slide-3.webp')">
                <div class="hero-overlay"></div>
                <div class="hero-content">
                    <h1 class="hero-title">Ouvert à<br>l'international</h1>
                    <p class="hero-subtitle">Projets collaboratifs et mobilités</p>
                    <a href="international.html" class="btn btn-primary">En savoir plus</a>
                </div>
            </div>
            <div class="hero-slide" style="background-image: url('images/slide-2.webp')">
                <div class="hero-overlay"></div>
                <div class="hero-content">
                    <h1 class="hero-title">Ouvert<br>à la culture</h1>
                    <p class="hero-subtitle">Arts et sciences</p>
                    <a href="generale.html" class="btn btn-primary">Explorer</a>
                </div>
            </div>
            <div class="hero-slide" style="background-image: url('images/slide-4.webp')">
                <div class="hero-overlay"></div>
                <div class="hero-content">
                    <h1 class="hero-title">Pour préparer<br>l'avenir</h1>
                    <p class="hero-subtitle">Orientation et réussite</p>
                    <a href="generale.html" class="btn btn-primary">Nos formations</a>
                </div>
            </div>
            <div class="hero-slide" style="background-image: url('images/slide-5.webp')">
                <div class="hero-overlay"></div>
                <div class="hero-content">
                    <h1 class="hero-title">Pour<br>s'engager</h1>
                    <p class="hero-subtitle">CVL, développement durable</p>
                    <a href="vie-scolaire.html" class="btn btn-primary">Nos engagements</a>
                </div>
            </div>
        </div>
        <button class="hero-arrow hero-prev" id="heroPrev"><i class="fas fa-chevron-left"></i></button>
        <button class="hero-arrow hero-next" id="heroNext"><i class="fas fa-chevron-right"></i></button>
        <div class="hero-dots" id="heroDots"></div>
    </section>

    <section class="quick-links">
        <div class="container">
            <div class="quick-grid">
                <a href="agenda.html" class="quick-card">
                    <div class="quick-icon"><i class="fas fa-newspaper"></i></div>
                    <h3>Actualités</h3>
                    <p>Les derniers événements du lycée</p>
                    <span class="quick-arrow"><i class="fas fa-arrow-right"></i></span>
                </a>
                <a href="agenda.html" class="quick-card">
                    <div class="quick-icon"><i class="fas fa-calendar-alt"></i></div>
                    <h3>Agenda</h3>
                    <p>Les dates importantes à venir</p>
                    <span class="quick-arrow"><i class="fas fa-arrow-right"></i></span>
                </a>
                <a href="rentree.html" class="quick-card">
                    <div class="quick-icon"><i class="fas fa-info-circle"></i></div>
                    <h3>Pratique !</h3>
                    <p>Trouver des réponses à vos questions</p>
                    <span class="quick-arrow"><i class="fas fa-arrow-right"></i></span>
                </a>
                <a href="http://www.toutatice.fr/portail" class="quick-card" target="_blank">
                    <div class="quick-icon"><i class="fas fa-laptop"></i></div>
                    <h3>ENT Pronote</h3>
                    <p>Le suivi de la scolarité de votre enfant</p>
                    <span class="quick-arrow"><i class="fas fa-arrow-right"></i></span>
                </a>
            </div>
        </div>
    </section>

    <section class="themes">
        <div class="container">
            <h2 class="section-title">Un lycée <span>d'avenir</span></h2>
            <div class="themes-grid">
                <a href="international.html" class="theme-card">
                    <div class="theme-bg" style="background-image: url('images/theme-international.webp')"></div>
                    <div class="theme-overlay"></div>
                    <div class="theme-content">
                        <i class="fas fa-globe-europe"></i>
                        <h3>Ouvert à l'international</h3>
                        <p>Projets collaboratifs et mobilités vers l'étranger</p>
                    </div>
                </a>
                <a href="generale.html" class="theme-card">
                    <div class="theme-bg" style="background-image: url('images/theme-avenir.webp')"></div>
                    <div class="theme-overlay"></div>
                    <div class="theme-content">
                        <i class="fas fa-rocket"></i>
                        <h3>Pour préparer l'avenir</h3>
                        <p>Orientation et réussite scolaire</p>
                    </div>
                </a>
                <a href="generale.html" class="theme-card">
                    <div class="theme-bg" style="background-image: url('images/theme-culture.webp')"></div>
                    <div class="theme-overlay"></div>
                    <div class="theme-content">
                        <i class="fas fa-palette"></i>
                        <h3>Ouvert à la culture</h3>
                        <p>Les arts et la création</p>
                    </div>
                </a>
                <a href="generale.html" class="theme-card">
                    <div class="theme-bg" style="background-image: url('images/theme-sciences.webp')"></div>
                    <div class="theme-overlay"></div>
                    <div class="theme-content">
                        <i class="fas fa-flask"></i>
                        <h3>Culture scientifique</h3>
                        <p>Sciences et innovation</p>
                    </div>
                </a>
                <a href="vie-scolaire.html" class="theme-card">
                    <div class="theme-bg" style="background-image: url('images/theme-engager.webp')"></div>
                    <div class="theme-overlay"></div>
                    <div class="theme-content">
                        <i class="fas fa-hands-helping"></i>
                        <h3>Pour s'engager</h3>
                        <p>CVL, actions citoyennes, développement durable</p>
                    </div>
                </a>
                <a href="entreprise.html" class="theme-card">
                    <div class="theme-bg" style="background-image: url('images/theme-entreprise.webp')"></div>
                    <div class="theme-overlay"></div>
                    <div class="theme-content">
                        <i class="fas fa-briefcase"></i>
                        <h3>Ouvert sur l'entreprise</h3>
                        <p>Partenariats et intégration professionnelle</p>
                    </div>
                </a>
                <a href="sportive.html" class="theme-card">
                    <div class="theme-bg" style="background-image: url('images/theme-epanouir.webp')"></div>
                    <div class="theme-overlay"></div>
                    <div class="theme-content">
                        <i class="fas fa-star"></i>
                        <h3>Pour s'épanouir</h3>
                        <p>Clubs et actions culturelles</p>
                    </div>
                </a>
                <a href="sportive.html" class="theme-card">
                    <div class="theme-bg" style="background-image: url('images/theme-sport.webp')"></div>
                    <div class="theme-overlay"></div>
                    <div class="theme-content">
                        <i class="fas fa-running"></i>
                        <h3>Sportif</h3>
                        <p>Association sportive et activités</p>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <section class="news">
        <div class="container">
            <h2 class="section-title">Nos dernières <span>actualités</span></h2>
            <div class="news-grid">
                <article class="news-card">
                    <div class="news-image" style="background-image: url('images/news-menu.webp')">
                        <span class="news-date">7 Sept 2026</span>
                    </div>
                    <div class="news-body">
                        <h3>Menu du restaurant scolaire</h3>
                        <p>Menu du 7 au 13 septembre 2026</p>
                        <a href="#" class="news-link">Lire la suite <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>
                <article class="news-card">
                    <div class="news-image" style="background-image: url('images/news-tarification.webp')">
                        <span class="news-date">5 Sept 2026</span>
                    </div>
                    <div class="news-body">
                        <h3>Tarification Restauration</h3>
                        <p>Inscrivez-vous sur le site de la Région pour déterminer votre tarif</p>
                        <a href="restauration.html" class="news-link">Lire la suite <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>
                <article class="news-card">
                    <div class="news-image" style="background-image: url('images/news-kangourou.webp')">
                        <span class="news-date">22 Juin 2026</span>
                    </div>
                    <div class="news-body">
                        <h3>Concours Kangourou des Mathématiques</h3>
                        <p>Des élèves récompensés au concours Kangourou des Mathématiques</p>
                        <a href="#" class="news-link">Lire la suite <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>
            </div>
            <div class="news-cta">
                <a href="agenda.html" class="btn btn-outline">Toute notre actualité <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    </section>

    <section class="about">
        <div class="about-bg" style="background-image: url('images/about-bg.webp')"></div>
        <div class="about-overlay"></div>
        <div class="container about-inner">
            <div class="about-text">
                <h2>Le Lycée Jacques Cartier</h2>
                <p>Bonjour à tous nos visiteurs sur ce nouvel espace virtuel, qui se veut simple, convivial, interactif.</p>
                <p>L'exigence est au cœur de notre démarche éducative, afin de permettre à tous nos élèves de travailler dans la confiance, la sérénité et de contribuer à l'épanouissement personnel de tous.</p>
                <p>Notre objectif est que chacun, à son niveau et conformément à son projet, réussisse scolairement puis professionnellement.</p>
                <a href="histoire.html" class="btn btn-primary">En savoir +</a>
            </div>
            <div class="about-contact">
                <h3>Contactez-nous</h3>
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div><strong>Adresse</strong><p>31 rue de la Balue<br>35409 SAINT MALO Cedex</p></div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <div><strong>Téléphone</strong><p>02 99 82 87 00</p></div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <div><strong>Email</strong><p>ce.0350048m@ac-rennes.fr</p></div>
                </div>
            </div>
        </div>
    </section>

    ${qrSection()}

    <div class="stats">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item"><h3>1200+</h3><p>Élèves</p></div>
                <div class="stat-item"><h3>120+</h3><p>Enseignants</p></div>
                <div class="stat-item"><h3>8</h3><p>Filières</p></div>
                <div class="stat-item"><h3>95%</h3><p>Taux de réussite</p></div>
            </div>
        </div>
    </div>
` + footer());

// ============================
// PAGES LE LYCÉE
// ============================
const lyceePages = [
    { file: 'histoire.html', title: 'Histoire du lycée', sub: 'Depuis 1962, au cœur de Saint-Malo', bg: 'images/slide-1.webp', content: `
        <h2>Une histoire riche et prestigieuse</h2>
        <p>Le Lycée Jacques Cartier porte le nom du célèbre navigateur malouin Jacques Cartier, premier Européen à avoir exploré le Saint-Laurent au XVIe siècle. Cette identité forte se reflète dans la culture de l'établissement depuis sa création.</p>
        <h3>Les grandes dates</h3>
        <ul>
            <li><strong>1962</strong> - Création du lycée moderniste sous le nom de Lycée de garçons de Saint-Malo</li>
            <li><strong>1972</strong> - Le lycée prend le nom de Lycée Jacques Cartier</li>
            <li><strong>1985</strong> - Ouverture des filières technologiques (STMG)</li>
            <li><strong>1995</strong> - Développement de l'ouverture à l'international</li>
            <li><strong>2005</strong> - Extension du bâtiment et modernisation des équipements</li>
            <li><strong>2015</strong> - Labellisation Erasmus+ et projets européens</li>
            <li><strong>2020</strong> - Rénovation des espaces pédagogiques</li>
        </ul>
        <p>Aujourd'hui, le Lycée Jacques Cartier est un établissement reconnu pour l'excellence de sa formation, son ouverture sur le monde et l'accompagnement personnalisé de chaque élève.</p>
    `},
    { file: 'images.html', title: 'Le lycée en images', sub: 'Découvrez nos espaces et installations', bg: 'images/slide-2.webp', content: `
        <h2>Nos espaces modernisés</h2>
        <p>Le Lycée Jacques Cartier dispose d'installations modernes au service de la réussite des élèves.</p>
        <div class="cards-grid">
            <div class="card"><div class="card-img" style="background-image:url('images/slide-1.webp')"></div><div class="card-body"><h3>Les salles de classe</h3><p>Salles climatisées et équipées de tableaux numériques interactifs pour un apprentissage moderne.</p></div></div>
            <div class="card"><div class="card-img" style="background-image:url('images/theme-culture.webp')"></div><div class="card-body"><h3>Le CDI</h3><p>Centre de Documentation et d'Information avec un fonds documentaire riche et des postes informatiques.</p></div></div>
            <div class="card"><div class="card-img" style="background-image:url('images/theme-sciences.webp')"></div><div class="card-body"><h3>Les laboratoires</h3><p>Laboratoires de sciences entièrement équipés pour les manipulations et expériences.</p></div></div>
            <div class="card"><div class="card-img" style="background-image:url('images/theme-sciences.webp')"></div><div class="card-body"><h3>La bibliothèque</h3><p>Espace de lecture et de travail calme avec un large choix de livres et ressources numériques.</p></div></div>
            <div class="card"><div class="card-img" style="background-image:url('images/theme-sport.webp')"></div><div class="card-body"><h3>Les terrains sportifs</h3><p>Stade, gymnase et terrains multisports pour la pratique sportive.</p></div></div>
            <div class="card"><div class="card-img" style="background-image:url('images/theme-entreprise.webp')"></div><div class="card-body"><h3>La restauration</h3><p>Restaurant scolaire proposant des repas équilibrés et variés au quotidien.</p></div></div>
        </div>
    `},
    { file: 'organigramme.html', title: 'Organigramme', sub: 'L\'équipe de direction et les services', bg: 'images/slide-5.webp', content: `
        <h2>Organigramme du Lycée Jacques Cartier</h2>
        <p>Voici l'organigramme officiel du Lycée Jacques Cartier, présentant l'équipe de direction et l'organisation des services.</p>
        <div style="text-align:center;margin:30px 0;">
            <img src="images/organigramme.webp" alt="Organigramme du Lycée Jacques Cartier" style="max-width:100%;height:auto;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,0.1);">
        </div>
    `},
    { file: 'medias.html', title: 'Le lycée dans les médias', sub: 'Retrouvez nos apparitions médiatiques', bg: 'images/slide-2.webp', content: `
        <h2>Une visibilité médiatique croissante</h2>
        <p>Le Lycée Jacques Cartier est régulièrement mis en lumière par les médias locaux et nationaux pour ses projets innovants et ses résultats.</p>
        <div class="cards-grid">
            <div class="card"><div class="card-img" style="background-image:url('images/slide-2.webp')"></div><div class="card-body"><h3>Ouest-France</h3><p>Article sur le projet Erasmus+ du lycée avec des partenaires européens.</p></div></div>
            <div class="card"><div class="card-img" style="background-image:url('images/theme-culture.webp')"></div><div class="card-body"><h3 France 3 Bretagne</h3><pReportage sur la journée portes ouvertes et les nouvelles formations proposées.</p></div></div>
            <div class="card"><div class="card-img" style="background-image:url('images/theme-avenir.webp')"></div><div class="card-body"><h3>Presse régionale</h3><p>Dossier sur les lycées bretons et leur excellence pédagogique.</p></div></div>
        </div>
    `},
    { file: 'temoignages.html', title: 'Témoignages', sub: 'Ce que disent nos anciens élèves', bg: 'images/theme-epanouir.webp', content: `
        <h2>Ils témoignent</h2>
        <p>Nos anciens élèves reviennent sur leur expérience au Lycée Jacques Cartier.</p>
        <div class="info-blocks">
            <div class="info-block"><h3><i class="fas fa-quote-left"></i> Marine, Promotion 2023</h3><p>"Le lycée m'a offert un accompagnement personnalisé qui m'a permis d'intégrer une classe préparatoire. Les enseignants sont à l'écoute et les projets internationaux m'ont ouvert des portes."</p></div>
            <div class="info-block"><h3><i class="fas fa-quote-left"></i> Thomas, Promotion 2022</h3><p>"La voie STMG m'a permis de découvrir le monde de l'entreprise grâce aux stages et aux partenariats. Aujourd'hui je suis en école de commerce."</p></div>
            <div class="info-block"><h3><i class="fas fa-quote-left"></i> Léa, Promotion 2024</h3><p>"Les projets collaboratifs internationaux m'ont donné envie de partir étudier à l'étranger. Je suis actuellement en Erasmus à Dublin."</p></div>
            <div class="info-block"><h3><i class="fas fa-quote-left"></i> Paul, Promotion 2021</h3><p>"L'ambiance du lycée est really bienveillante. J'ai pu m'épanouir grâce aux clubs et à l'association sportive."</p></div>
        </div>
    `},
    { file: 'liaisons.html', title: 'Liaisons', sub: 'Avec d\'autres établissements', bg: 'images/slide-3.webp', content: `
        <h2>Partenariats éducatifs</h2>
        <p>Le Lycée Jacques Cartier entretient des liens privilégiés avec d'autres établissements pour enrichir l'offre de formation.</p>
        <ul>
            <li><strong>Collèges de secteur</strong> - Parcours de découverte et Journées portes ouvertes</li>
            <li><strong>Université de Rennes 1</strong> - Partenariats pour les classes préparatoires</li>
            <li><strong>IUT de Saint-Malo</strong> - Enseignement supérieur et BTS</li>
            <li><strong>Lycées partenaires européens</strong> - Projets Erasmus+ (Espagne, Allemagne, Irlande)</li>
            <li><strong>Entreprises locales</strong> - Stages PFMP et interventions extérieures</li>
        </ul>
        <p>Ces partenariats permettent aux élèves de bénéficier d'une ouverture maximale sur le monde professionnel et universitaire.</p>
    `}
];

lyceePages.forEach(p => {
    writePage(p.file, head(p.title) + topBar() + header() + mobileNav() + pageHero(p.title, p.sub, p.bg) + `<section class="page-full"><div class="container">${p.content}</div></section>` + footer());
});

// ============================
// PAGES FORMATIONS
// ============================
const formationPages = [
    { file: 'seconde.html', title: 'Seconde générale et technologique', sub: 'La première étape vers le lycée', bg: 'images/slide-4.webp', content: `
        <h2>Une seconde à la carte</h2>
        <p>La classe de seconde au Lycée Jacques Cartier permet aux élèves de découvrir les différentes voies du lycée tout en consolidant les bases fondamentales.</p>
        <h3>Les enseignements communs</h3>
        <ul>
            <li>Français, Histoire-Géographie, LVA/LVB</li>
            <li>Mathématiques, Physique-Chimie, SVT</li>
            <li>EPS, Enseignement moral et civique</li>
            <li>Arts plastiques ou Éducation musicale</li>
            <li>Enseignement scientifique</li>
        </ul>
        <h3>Parcours de découverte</h3>
        <p>Les élèves bénéficient d'un parcours de découverte des métiers et des formations du lycée, avec des stages d'observation et des rencontres avec des professionnels.</p>
    `},
    { file: 'generale.html', title: 'Voie générale', sub: 'Préparez votre avenir avec excellence', bg: 'images/slide-2.webp', content: `
        <h2>La voie générale au Lycée Jacques Cartier</h2>
        <p>La voie générale prépare les élèves au baccalauréat et à l'enseignement supérieur. Elle développe l'esprit critique, la culture générale et l'autonomie.</p>
        <h3>Spécialités proposées</h3>
        <div class="info-blocks">
            <div class="info-block"><h3><i class="fas fa-calculator"></i> Mathématiques</h3><p>Développement des compétences en analyse, raisonnement et résolution de problèmes.</p></div>
            <div class="info-block"><h3><i class="fas fa-flask"></i> Physique-Chimie</h3><p>Étude des phénomènes naturels et des lois fondamentales de l'univers.</p></div>
            <div class="info-block"><h3><i class="fas fa-dna"></i> SVT</h3><p>Sciences de la vie et de la terre : biodiversité, santé, environnement.</p></div>
            <div class="info-block"><h3><i class="fas fa-language"></i> Langues</h3><p>Anglais, espagnol, allemand : approfondissement linguistique et culturel.</p></div>
            <div class="info-block"><h3><i class="fas fa-book-open"></i> Humanités</h3><p>Histoire-géographie, géopolitique et sciences politiques.</p></div>
            <div class="info-block"><h3><i class="fas fa-laptop-code"></i> NSI</h3><p>Numerique et sciences informatiques : programmation et algorithmique.</p></div>
        </div>
    `},
    { file: 'stmg.html', title: 'Voie technologique STMG', sub: 'Management et gestion', bg: 'images/theme-entreprise.webp', content: `
        <h2>Le baccalauréat STMG</h2>
        <p>La voie technologique Sciences et Technologies du Management et de la Gestion prépare les élèves aux métiers du management, de la gestion et du commerce.</p>
        <h3>Spécialités</h3>
        <ul>
            <li><strong>Management et gestion</strong> - Organisation des entreprises, gestion des ressources humaines</li>
            <li><strong>Mercatique</strong> - Études de marché, communication, distribution</li>
            <li><strong>Gestion et finance</strong> - Comptabilité, finance d'entreprise</li>
            <li><strong>Droit et économie</strong> - Cadre juridique et économique des organisations</li>
        </ul>
        <h3>Projets et stages</h3>
        <p>Les élèves réalisent des projets en entreprise et bénéficient de stages de découverte pour préparer leur insertion professionnelle.</p>
    `},
    { file: 'pro.html', title: 'Voie professionnelle', sub: 'L\'excellence de la formation professionnelle', bg: 'images/slide-4.webp', content: `
        <h2>Les formations professionnelles</h2>
        <p>Le Lycée Jacques Cartier propose des formations professionnelles qualifiantes dans différents domaines.</p>
        <h3>CAP et Bac pro</h3>
        <ul>
            <li><strong>CAP Métiers de l'esthétique</strong> - Soins esthétiques, beauté</li>
            <li><strong>Bac pro Métiers de l'esthétique</strong> - Perfectionnement et spécialisation</li>
            <li><strong>Bac pro Commerce</strong> - Vente, conseil, négociation</li>
        </ul>
        <h3>Avantages de la voie pro</h3>
        <p>Les formations professionnelles permettent d'acquérir un diplôme reconnu tout en bénéficiant d'une expérience pratique en entreprise. Le taux d'insertion professionnelle est élevé.</p>
    `},
    { file: 'superieur.html', title: 'Enseignement supérieur', sub: 'Poursuivez vos études', bg: 'images/slide-3.webp', content: `
        <h2>Après le bac, vers l'enseignement supérieur</h2>
        <p>Le Lycée Jacques Cartier accompagne les élèves dans leur orientation post-bac avec des formations d'excellence.</p>
        <h3>Sections préparatoires</h3>
        <ul>
            <li><strong>CPGE BCPST</strong> - Biologie, Chimie, Physique, Sciences de la Terre</li>
            <li><strong>CPGE TSI</strong> - Technologie et Sciences Industrielles</li>
        </ul>
        <h3>Classes préparatoires</h3>
        <p>Les classes préparatoires permettent d'intégrer les grandes écoles d'ingénieurs, de commerce ou autres établissements d'excellence.</p>
    `},
    { file: 'reunion-pp.html', title: 'Réunions parents-professeurs', sub: 'Le dialogue au cœur de la réussite', bg: 'images/slide-5.webp', content: `
        <h2>Le dialogue famille-établissement</h2>
        <p>Les réunions parents-professeurs sont des moments essentiels pour le suivi de la scolarité de votre enfant.</p>
        <h3>Calendrier</h3>
        <ul>
            <li><strong>1ère rencontre</strong> - Octobre : présentation de l'année et des méthodes de travail</li>
            <li><strong>2ème rencontre</strong> - Janvier : bilan du premier trimestre</li>
            <li><strong>3ème rencontre</strong> - Avril : préparation du dernier trimestre</li>
        </ul>
        <h3>Comment préparer la réunion</h3>
        <p>Avant chaque réunion, consultez le bulletin de votre enfant sur Pronote. Préparez vos questions et échanges avec les enseignants pour un suivi optimal.</p>
    `}
];

formationPages.forEach(p => {
    writePage(p.file, head(p.title) + topBar() + header() + mobileNav() + pageHero(p.title, p.sub, p.bg) + `<section class="page-full"><div class="container">${p.content}</div></section>` + footer());
});

// ============================
// PAGES VIE DU LYCÉE
// ============================
const viePages = [
    { file: 'vie-scolaire.html', title: 'Vie scolaire', sub: 'Un cadre bienveillant pour s\'épanouir', bg: 'images/theme-epanouir.webp', content: `
        <h2>Un environnement favorable à la réussite</h2>
        <p>La vie scolaire au Lycée Jacques Cartier repose sur des valeurs de respect, de travail et de citoyenneté.</p>
        <h3>Le règlement intérieur</h3>
        <p>Le règlement intérieur garantit le bon fonctionnement de l'établissement et la sécurité de tous. Il est communiqué aux élèves et aux familles en début d'année.</p>
        <h3>Les missions de l'équipe de vie scolaire</h3>
        <ul>
            <li><strong>CPE</strong> - Conseillers principaux d'éducation : suivi individualisé</li>
            <li><strong>Surveillants</strong> - Encadrement et maintien de l'ordre</li>
            <li><strong>Éducateur sportif</strong> - Vie associative sportive</li>
            <li><strong>Psy-EN</strong> - Soutien psychologique</li>
        </ul>
    `},
    { file: 'cdi.html', title: 'Le CDI', sub: 'Centre de Documentation et d\'Information', bg: 'images/theme-culture.webp', content: `
        <h2>Un espace de ressources au cœur du lycée</h2>
        <p>Le CDI est un lieu ouvert à tous les élèves pour la documentation, la recherche documentaire et la lecture plaisir.</p>
        <h3>Services proposés</h3>
        <ul>
            <li>Prêt de livres, revues et DVD</li>
            <li>Accès aux ressources numériques en ligne</li>
            <li>Aide à la recherche documentaire</li>
            <li>Espace de travail et de lecture</li>
            <li>Expositions thématiques régulières</li>
        </ul>
    `},
    { file: 'sportive.html', title: 'Association sportive', sub: 'Pratiquez le sport au lycée', bg: 'images/theme-sport.webp', content: `
        <h2>L'association sportive du Lycée Jacques Cartier</h2>
        <p>L'association sportive propose une large gamme de disciplines sportives pour tous les élèves.</p>
        <h3>Les disciplines proposées</h3>
        <div class="cards-grid">
            <div class="card"><div class="card-img" style="background-image:url('images/theme-sport.webp')"></div><div class="card-body"><h3>Football</h3><p>Équipe masculine et féminine, entraînements réguliers.</p></div></div>
            <div class="card"><div class="card-img" style="background-image:url('images/theme-sport.webp')"></div><div class="card-body"><h3>Basketball</h3><p>Matchs inter-lycées et tournois régionaux.</p></div></div>
            <div class="card"><div class="card-img" style="background-image:url('images/theme-sport.webp')"></div><div class="card-body"><h3>Natation</h3><p>Cours et compétitions en piscine.</p></div></div>
        </div>
    `},
    { file: 'entreprise.html', title: 'Lien avec l\'entreprise', sub: 'Partenariats et intégration professionnelle', bg: 'images/theme-entreprise.webp', content: `
        <h2>Une ouverture au monde professionnel</h2>
        <p>Le Lycée Jacques Cartier développe des partenariats avec les entreprises pour préparer l'insertion professionnelle des élèves.</p>
        <h3>Nos actions</h3>
        <ul>
            <li><strong>Stages PFMP</strong> - Pratiques Favorisant les Mittiers Professionnels</li>
            <li><strong>Interventions extérieures</strong> - Professionnels témoins en classe</li>
            <li><strong>Journées métiers</strong> - Découverte des filières professionnelles</li>
            <li><strong>Partenariats entreprise</strong> - Projets collaboratifs</li>
        </ul>
    `},
    { file: 'parents.html', title: 'Parents d\'élèves', sub: 'L\'association des parents', bg: 'images/slide-5.webp', content: `
        <h2>L'association des parents d'élèves</h2>
        <p>L'association des parents d'élèves est un interlocuteur privilégié pour les familles.</p>
        <h3>Ses missions</h3>
        <ul>
            <li>Représentation des familles auprès de l'administration</li>
            <li>Organisation d'événements (fêtes, sorties)</li>
            <li>Soutien aux projets pédagogiques</li>
            <li>Information et communication avec les familles</li>
        </ul>
    `},
    { file: 'webradio.html', title: 'Notre webradio', sub: 'L\'antenne radiophonique du lycée', bg: 'images/slide-2.webp', content: `
        <h2>Radio Jacques Cartier en ligne</h2>
        <p>La webradio du lycée est un projet pédagogique animé par les élèves eux-mêmes.</p>
        <h3>Les émissions</h3>
        <ul>
            <li><strong>Émissions culturelles</strong> - Livres, cinéma, musique</li>
            <li><strong>Émissions scientifiques</strong> - Découvertes et innovations</li>
            <li><strong>Émissions sportives</strong> - Résultats et interviews</li>
            <li><strong>Témoignages</strong> - Élèves, enseignants, professionnels</li>
        </ul>
    `},
    { file: 'sante-social.html', title: 'Santé-Social', sub: 'L\'infirmerie et le suivi social', bg: 'images/slide-1.webp', content: `
        <h2>Le service Santé-Social</h2>
        <p>L'infirmerie du Lycée Jacques Cartier assure les soins et la prévention sanitaire pour tous les élèves.</p>
        <h3>L'infirmerie</h3>
        <ul>
            <li>Prise en charge des urgences et des petits maux du quotidien</li>
            <li>Suivi des élèves atteints de maladies chroniques</li>
            <li>Vaccinations et bilans de santé</li>
            <li>Éducation à la santé et prévention</li>
        </ul>
        <h3>Le service social</h3>
        <ul>
            <li>Accompagnement des familles en difficulté</li>
            <li>Aide aux demandes de bourses</li>
            <li>Orientation vers les services compétents</li>
            <li>Soutien psychologique</li>
        </ul>
    `}
];

viePages.forEach(p => {
    writePage(p.file, head(p.title) + topBar() + header() + mobileNav() + pageHero(p.title, p.sub, p.bg) + `<section class="page-full"><div class="container">${p.content}</div></section>` + footer());
});

// ============================
// PAGES ORIENTATION
// ============================
const orientationPages = [
    { file: 'orientation-seconde.html', title: 'Après la seconde', sub: 'Choisir sa voie', bg: 'images/slide-4.webp', content: `
        <h2>Les parcours possibles après la seconde</h2>
        <p>À l'issue de la seconde, les élèves du Lycée Jacques Cartier peuvent poursuivre dans différentes filières.</p>
        <div class="info-blocks">
            <div class="info-block"><h3><i class="fas fa-book"></i> Première générale</h3><p>Pour les élèves souhaitant poursuivre vers des études longues et préparer un bac général.</p></div>
            <div class="info-block"><h3><i class="fas fa-chart-line"></i> Première STMG</h3><p>Pour les élèves intéressés par le management, la gestion et le commerce.</p></div>
            <div class="info-block"><h3><i class="fas fa-tools"></i> Première professionnelle</h3><p>Pour les élèves souhaitant acquérir une compétence professionnelle.</p></div>
        </div>
    `},
    { file: 'orientation-premiere.html', title: 'Après la première', sub: 'Préparer son bac', bg: 'images/slide-2.webp', content: `
        <h2>Le choix des spécialités en Terminale</h2>
        <p>En cours de première, les élèves choisissent leurs spécialités pour la Terminale.</p>
        <h3>Conseils d'orientation</h3>
        <ul>
            <li>Consultez les professeurs principaux</li>
            <li>Participez aux forums d'orientation</li>
            <li>Renseignez-vous sur les métiers</li>
            <li>Testez vos aptitudes en ligne</li>
        </ul>
    `},
    { file: 'parcoursup.html', title: 'Parcoursup', sub: 'La plateforme nationale d\'orientation', bg: 'images/slide-3.webp', content: `
        <h2>Parcoursup, votre passerelle vers l'enseignement supérieur</h2>
        <p>Parcoursup est la plateforme nationale d'admission dans l'enseignement supérieur.</p>
        <h3>Les étapes clés</h3>
        <ul>
            <li><strong>Janvier</strong> - Inscription sur Parcoursup</li>
            <li><strong>Février-Mars</strong> - Formulation des vœux</li>
            <li><strong>Avril-Juin</strong> - Examen des dossiers</li>
            <li><strong>Juin-Juillet</strong> - Réponses et procédures complementaires</li>
        </ul>
    `}
];

orientationPages.forEach(p => {
    writePage(p.file, head(p.title) + topBar() + header() + mobileNav() + pageHero(p.title, p.sub, p.bg) + `<section class="page-full"><div class="container">${p.content}</div></section>` + footer());
});

// ============================
// PAGES PRATIQUES
// ============================
const pratiquePages = [
    { file: 'rentree.html', title: 'Rentrée scolaire', sub: 'Tout pour bien démarrer l\'année', bg: 'images/slide-4.webp', content: `
        <h2>Informations pratiques pour la rentrée</h2>
        <p>Retrouvez toutes les informations pour préparer la rentrée scolaire au Lycée Jacques Cartier.</p>
        <div class="info-blocks">
            <div class="info-block"><h3><i class="fas fa-calendar-check"></i> Date de rentrée</h3><p>La rentrée scolaire 2026-2027 se fait le lundi 2 septembre 2026 à 8h30.</p></div>
            <div class="info-block"><h3><i class="fas fa-book"></i> Manuels scolaires</h3><p>Les listes de manuels sont disponibles sur le site. Les commandes se font en ligne.</p></div>
            <div class="info-block"><h3><i class="fas fa-utensils"></i> Restauration</h3><p>Inscription obligatoire sur le site de la Région pour le tarif de restauration.</p></div>
            <div class="info-block"><h3><i class="fas fa-bus"></i> Transports</h3><p>Consultez les horaires des bus scolaires et les itinéraires sur le site Keolis.</p></div>
        </div>
    `},
    { file: 'agenda.html', title: 'Agenda', sub: 'Les événements à venir', bg: 'images/slide-2.webp', content: `
        <h2>Calendrier des événements</h2>
        <p>Suivez tous les événements du Lycée Jacques Cartier.</p>
        <div class="table-responsive">
            <table class="data-table">
                <thead><tr><th>Date</th><th>Événement</th><th>Lieu</th></tr></thead>
                <tbody>
                    <tr><td>2 Sept 2026</td><td>Rentrée scolaire</td><td>Établissement</td></tr>
                    <tr><td>15 Sept 2026</td><td>Réunion parents de seconde</td><td>Amphithéâtre</td></tr>
                    <tr><td>3 Oct 2026</td><td>Journée portes ouvertes</td><td>Établissement</td></tr>
                    <tr><td>20 Oct 2026</td><td>Conseil de classe</td><td>Salle des professeurs</td></tr>
                    <tr><td>15 Nov 2026</td><td>Fête du lycée</td><td>Gymnase</td></tr>
                    <tr><td>10 Déc 2026</td><td>Concert de Noël</td><td>Amphithéâtre</td></tr>
                    <tr><td>15 Jan 2027</td><td>Réunion parents-professeurs</td><td>Établissement</td></tr>
                    <tr><td>20 Fév 2027</td><td>Semaine de l'international</td><td>Établissement</td></tr>
                </tbody>
            </table>
        </div>
    `},
    { file: 'inscriptions.html', title: 'Inscriptions', sub: 'Comment inscrire votre enfant', bg: 'images/news-tarification.webp', content: `
        <h2>Inscriptions et inscriptions</h2>
        <p>Découvrez la procédure d'inscription au Lycée Jacques Cartier.</p>
        <h3>Pièces à fournir</h3>
        <ul>
            <li>Carnet de santé à jour</li>
            <li>Certificat de radiation de l'établissement précédent</li>
            <li>Bulletins de scolarité</li>
            <li>Certificat de domicile</li>
            <li>Justificatif d'identité</li>
        </ul>
    `},
    { file: 'internat.html', title: 'Internat', sub: 'Un hébergement de qualité', bg: 'images/theme-entreprise.webp', content: `
        <h2>L'internat du Lycée Jacques Cartier</h2>
        <p>L'internat accueille les élèves éloignés de leur domicile dans des conditions optimales de travail et de confort.</p>
        <h3>Équipements</h3>
        <ul>
            <li>Chambres individuelles ou doubles</li>
            <li>Espace de travail commun</li>
            <li>Salles de bain équipées</li>
            <li>Wi-Fi haut débit</li>
        </ul>
        <h3>Organisation</h3>
        <p>Des études surveillées sont organisées chaque soir. Un internatReferent assure l'encadrement et le suivi des internes.</p>
    `},
    { file: 'restauration.html', title: 'Restauration', sub: 'Un restaurant scolaire de qualité', bg: 'images/theme-entreprise.webp', content: `
        <h2>Le restaurant scolaire</h2>
        <p>Le restaurant scolaire du Lycée Jacques Cartier propose des repas équilibrés et variés au quotidien.</p>
        <h3>Inscription</h3>
        <p>L'inscription au restaurant se fait en ligne sur le site de la Région Bretagne. Le tarif dépend des revenus du foyer.</p>
        <h3>Le menu de la semaine</h3>
        <div class="table-responsive">
            <table class="data-table">
                <thead><tr><th>Jour</th><th>Entrée</th><th>Plat</th><th>Dessert</th></tr></thead>
                <tbody>
                    <tr><td>Lundi</td><td>Salade</td><td>Poulet grillé, riz</td><td>Yaourt</td></tr>
                    <tr><td>Mardi</td><td>Soupe</td><td>Poisson, légumes</td><td>Compote</td></tr>
                    <tr><td>Mercredi</td><td>Crudités</td><td>Bœuf bourguignon</td><td>Fruit</td></tr>
                    <tr><td>Jeudi</td><td>Salade</td><td>Pâtes au jambon</td><td>Fromage</td></tr>
                    <tr><td>Vendredi</td><td>Soupe</td><td>Fish and chips</td><td>Crème dessert</td></tr>
                </tbody>
            </table>
        </div>
    `},
    { file: 'transports.html', title: 'Transports', sub: 'Accéder au lycée', bg: 'images/slide-1.webp', content: `
        <h2>Les transports scolaires</h2>
        <p>Le Lycée Jacques Cartier est accessible en transports en commun.</p>
        <h3>Bus scolaires</h3>
        <ul>
            <li>Ligne 1 - Saint-Malo Centre - Lycée</li>
            <li>Ligne 2 - Paramé - Lycée</li>
            <li>Ligne 3 - Saint-Servan - Lycée</li>
            <li>Ligne 4 - Dinard - Lycée</li>
        </ul>
        <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.5!2d-2.0!3d48.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDM5JzAwLjAiTiAywrAwMCcwMC4wIlc!5e0!3m2!1sfr!2sfr!4v1" allowfullscreen loading="lazy"></iframe>
        </div>
    `},
    { file: 'bourses.html', title: 'Bourses', sub: 'Aides financières', bg: 'images/news-tarification.webp', content: `
        <h2>Les bourses du lycée</h2>
        <p>Des aides financières sont disponibles pour les familles sous conditions de ressources.</p>
        <h3>Types de bourses</h3>
        <ul>
            <li><strong>Bourse du collège</strong> - Pour les élèves de seconde à Terminale</li>
            <li><strong>Bourse de lycée</strong> - Conditions de revenus</li>
            <li><strong>Bourse internat</strong> - Pour les internes</li>
        </ul>
        <h3>Demande</h3>
        <p>Les demandes se font en ligne sur le portail de la Région Bretagne. Le dossier doit être déposé avant le 30 septembre.</p>
    `},
    { file: 'reglement.html', title: 'Règlement intérieur', sub: 'Les règles de vie au lycée', bg: 'images/slide-5.webp', content: `
        <h2>Le règlement intérieur</h2>
        <p>Le règlement intérieur définit les règles de fonctionnement de l'établissement.</p>
        <h3>Les principales dispositions</h3>
        <ul>
            <li>Respect des personnes et des biens</li>
            <li>Ponctualité et assiduité</li>
            <li>Port de l'uniforme ou tenue vestimentaire adaptée</li>
            <li>Interdiction du téléphone portable en classe</li>
            <li>Règles d'hygiène et de sécurité</li>
        </ul>
    `},
    { file: 'manuels.html', title: 'Manuels scolaires', sub: 'Listes et commandes', bg: 'images/slide-4.webp', content: `
        <h2>Les manuels scolaires</h2>
        <p>Retrouvez les listes de manuels scolaires par classe et la procédure de commande.</p>
        <h3>Comment procéder</h3>
        <ul>
            <li>Consultez la liste de manuels pour votre classe sur le site de l'ENT</li>
            <li>Passez commande en ligne via la plateforme dédiée</li>
            <li>Les manuels sont distribués en début d'année scolaire</li>
            <li>Les manuels sont à conserver pendant toute la durée de la scolarité</li>
        </ul>
        <h3>Règles de gestion</h3>
        <ul>
            <li>Les manuels sont prêtés gratuitement par l'établissement</li>
            <li>En cas de perte ou de dégradation, une participation financière est demandée</li>
            <li>Les manuels doivent être restitués en fin d'année</li>
        </ul>
    `}
];

pratiquePages.forEach(p => {
    writePage(p.file, head(p.title) + topBar() + header() + mobileNav() + pageHero(p.title, p.sub, p.bg) + `<section class="page-full"><div class="container">${p.content}</div></section>` + footer());
});

// ============================
// PAGES INTERNATIONAL, ENTREPRISES, PORTES OUVERTES
// ============================
const otherPages = [
    { file: 'international.html', title: 'International', sub: 'Ouverture sur le monde', bg: 'images/slide-3.webp', content: `
        <h2>Un lycée ouvert sur le monde</h2>
        <p>Le Lycée Jacques Cartier développe une politique d'ouverture internationale ambitieuse.</p>
        <div class="cards-grid">
            <div class="card"><div class="card-img" style="background-image:url('images/theme-international.webp')"></div><div class="card-body"><h3>Projets collaboratifs</h3><p>Partenariats avec des établissements européens dans le cadre d'Erasmus+.</p></div></div>
            <div class="card"><div class="card-img" style="background-image:url('images/theme-avenir.webp')"></div><div class="card-body"><h3>Mobilités</h3><p>Séjours et échanges avec l'Espagne, l'Allemagne et l'Irlande.</p></div></div>
            <div class="card"><div class="card-img" style="background-image:url('images/slide-2.webp')"></div><div class="card-body"><h3>Langues vivantes</h3><p>Enseignement renforcé en anglais, espagnol et allemand.</p></div></div>
        </div>
    `},
    { file: 'entreprises.html', title: 'Entreprises', sub: 'Partenariats professionnels', bg: 'images/theme-entreprise.webp', content: `
        <h2>Collaboration avec les entreprises</h2>
        <p>Le Lycée Jacques Cartier développe des partenariats avec le tissu économique local.</p>
        <h3>Taxe d'apprentissage</h3>
        <p>Les entreprises peuvent soutenir le lycée via la taxe d'apprentissage. Ce financement permet d'équiper les ateliers et laboratoires.</p>
        <h3>Stages et PFMP</h3>
        <p>Les élèves bénéficient de stages en entreprise pour découvrir les métiers et acquérir de l'expérience professionnelle.</p>
    `},
    { file: 'portes-ouvertes.html', title: 'Portes Ouvertes 2026', sub: 'Venez découvrir le lycée', bg: 'images/theme-epanouir.webp', content: `
        <h2>Portes Ouvertes 2026</h2>
        <p>Le Lycée Jacques Cartier vous accueille lors de sa journée portes ouvertes.</p>
        <div class="info-blocks">
            <div class="info-block"><h3><i class="fas fa-calendar-alt"></i> Date</h3><p>Samedi 3 octobre 2026 de 9h à 16h</p></div>
            <div class="info-block"><h3><i class="fas fa-map-marker-alt"></i> Lieu</h3><p>31 rue de la Balue - 35409 Saint-Malo</p></div>
            <div class="info-block"><h3><i class="fas fa-clock"></i> Horaires</h3><p>Accueil de 9h à 16h sans interruption</p></div>
            <div class="info-block"><h3><i class="fas fa-info-circle"></i> Programme</h3><p>Visite des locaux, présentation des formations, rencontres avec les enseignants et élèves.</p></div>
        </div>
    `},
    { file: 'contact.html', title: 'Contact', sub: 'Nous contacter', bg: 'images/slide-5.webp', content: `
        <h2>Contactez-nous</h2>
        <div class="info-blocks">
            <div class="info-block"><h3><i class="fas fa-map-marker-alt"></i> Adresse</h3><p>31 rue de la Balue<br>BP 30018<br>35409 SAINT MALO Cedex</p></div>
            <div class="info-block"><h3><i class="fas fa-phone"></i> Téléphone</h3><p>02 99 82 87 00<br>Fax : 02 99 82 87 01</p></div>
            <div class="info-block"><h3><i class="fas fa-envelope"></i> Email</h3><p>ce.0350048m@ac-rennes.fr</p></div>
            <div class="info-block"><h3><i class="fas fa-clock"></i> Horaires</h3><p>Lundi - Vendredi : 8h00 - 17h00<br>Secrétariat : 8h30 - 16h30</p></div>
        </div>
        <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.5!2d-2.0!3d48.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDM5JzAwLjAiTiAywrAwMCcwMC4wIlc!5e0!3m2!1sfr!2sfr!4v1" allowfullscreen loading="lazy"></iframe>
        </div>
        <h3>Formulaire de contact</h3>
        <form class="contact-form">
            <div class="form-row">
                <div class="form-group"><label>Nom</label><input type="text" placeholder="Votre nom"></div>
                <div class="form-group"><label>Email</label><input type="email" placeholder="Votre email"></div>
            </div>
            <div class="form-group"><label>Sujet</label><input type="text" placeholder="Sujet du message"></div>
            <div class="form-group"><label>Message</label><textarea rows="5" placeholder="Votre message..."></textarea></div>
            <button type="submit" class="btn btn-primary">Envoyer <i class="fas fa-paper-plane"></i></button>
        </form>
    `},
    { file: 'mentions-legales.html', title: 'Mentions légales', sub: 'Informations légales', bg: 'images/slide-5.webp', content: `
        <h2>Mentions légales</h2>
        <h3>Éditeur du site</h3>
        <p>Lycée Jacques Cartier<br>31 rue de la Balue - BP 30018<br>35409 SAINT MALO Cedex<br>Tél : 02 99 82 87 00</p>
        <h3>Hébergeur</h3>
        <p>Ce site est hébergé par l'Académie de Rennes.</p>
        <h3>Propriété intellectuelle</h3>
        <p>L'ensemble du contenu de ce site (textes, images, vidéos) est la propriété exclusive du Lycée Jacques Cartier ou de ses partenaires. Toute reproduction est interdite sans autorisation préalable.</p>
        <h3>Données personnelles</h3>
        <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Contactez-nous pour toute demande.</p>
    `},
    { file: 'plan-du-site.html', title: 'Plan du site', sub: 'Accès et plan d\'accès', bg: '', content: `
        <h2>Plan d'accès</h2>
        <p>Retrouvez l'adresse du lycée et accédez au plan d'accès.</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-bottom:30px;">
            <div>
                <h3 style="font-size:18px;font-weight:700;margin-bottom:12px;">LYCÉE JACQUES CARTIER</h3>
                <p style="font-size:14px;color:var(--gray-600);line-height:1.8;">
                    31 rue de la Balue<br>
                    BP 30018<br>
                    35409 SAINT MALO Cedex<br><br>
                    <strong>Tél :</strong> 02 99 82 87 00<br>
                    <strong>Fax :</strong> 02 99 82 87 01<br>
                    <strong>Email :</strong> ce.0350048m@ac-rennes.fr
                </p>
            </div>
            <div>
                <div class="map-container" style="height:280px;">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8!2d-2.0244!3d48.6494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480e2cc53da3dd7d%3A0x400c424e84e6a60!2s31%20Rue%20de%20la%20Balue%2C%2035400%20Saint-Malo!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>

        <h2>Plan du site</h2>
        <p>Retrouvez l'ensemble des pages du site du Lycée Jacques Cartier.</p>
        <div class="sitemap-grid">
            <div class="sitemap-col">
                <h3><i class="fas fa-graduation-cap"></i> Le Lycée</h3>
                <ul>
                    <li><a href="histoire.html">Histoire du lycée</a></li>
                    <li><a href="images.html">Le lycée en images</a></li>
                    <li><a href="organigramme.html">Organigramme</a></li>
                    <li><a href="liaisons.html">Liaisons avec d'autres établissements</a></li>
                    <li><a href="medias.html">Le lycée dans les médias</a></li>
                    <li><a href="temoignages.html">Témoignages d'anciens élèves</a></li>
                </ul>
            </div>
            <div class="sitemap-col">
                <h3><i class="fas fa-book-open"></i> Nos Formations</h3>
                <ul>
                    <li><a href="seconde.html">Seconde générale et technologique</a></li>
                    <li><a href="generale.html">Voie générale</a></li>
                    <li><a href="stmg.html">Voie technologique STMG</a></li>
                    <li><a href="pro.html">Voie professionnelle</a></li>
                    <li><a href="superieur.html">Enseignement supérieur</a></li>
                    <li><a href="reunion-pp.html">Réunion parents-professeur</a></li>
                </ul>
            </div>
            <div class="sitemap-col">
                <h3><i class="fas fa-users"></i> La Vie du Lycée</h3>
                <ul>
                    <li><a href="vie-scolaire.html">La vie scolaire</a></li>
                    <li><a href="cdi.html">Le CDI</a></li>
                    <li><a href="sportive.html">L'association sportive</a></li>
                    <li><a href="entreprise.html">Le lien avec l'entreprise</a></li>
                    <li><a href="sante-social.html">Santé-Social</a></li>
                    <li><a href="parents.html">Parents d'élèves</a></li>
                    <li><a href="webradio.html">Notre webradio</a></li>
                </ul>
            </div>
            <div class="sitemap-col">
                <h3><i class="fas fa-compass"></i> Orientation</h3>
                <ul>
                    <li><a href="orientation-seconde.html">Après ma classe de seconde</a></li>
                    <li><a href="orientation-premiere.html">Après ma classe de première</a></li>
                    <li><a href="parcoursup.html">Après le lycée - Parcoursup</a></li>
                </ul>
            </div>
            <div class="sitemap-col">
                <h3><i class="fas fa-info-circle"></i> Informations Pratiques</h3>
                <ul>
                    <li><a href="rentree.html">Rentrée scolaire</a></li>
                    <li><a href="agenda.html">Agenda</a></li>
                    <li><a href="inscriptions.html">Inscriptions</a></li>
                    <li><a href="internat.html">Internat</a></li>
                    <li><a href="restauration.html">Restauration</a></li>
                    <li><a href="transports.html">Transports</a></li>
                    <li><a href="bourses.html">Bourses</a></li>
                    <li><a href="manuels.html">Manuels scolaires</a></li>
                    <li><a href="reglement.html">Règlement intérieur</a></li>
                </ul>
            </div>
            <div class="sitemap-col">
                <h3><i class="fas fa-globe"></i> International</h3>
                <ul>
                    <li><a href="international.html">Projets collaboratifs internationaux</a></li>
                    <li><a href="international.html">Mobilités vers l'étranger</a></li>
                    <li><a href="international.html">Archives</a></li>
                </ul>
            </div>
            <div class="sitemap-col">
                <h3><i class="fas fa-briefcase"></i> Entreprises</h3>
                <ul>
                    <li><a href="entreprises.html">Taxe d'apprentissage</a></li>
                    <li><a href="entreprises.html">STAGE / PFMP</a></li>
                    <li><a href="entreprises.html">Allocation Stage / PFMP</a></li>
                </ul>
            </div>
            <div class="sitemap-col">
                <h3><i class="fas fa-door-open"></i> Portes Ouvertes</h3>
                <ul>
                    <li><a href="portes-ouvertes.html">Portes ouvertes 2026</a></li>
                    <li><a href="portes-ouvertes.html">Visite virtuelle</a></li>
                    <li><a href="portes-ouvertes.html">Plaquette</a></li>
                </ul>
            </div>
        </div>
        <h3 style="margin-top:30px;">Liens utiles</h3>
        <ul style="padding-left:18px;">
            <li style="margin-bottom:8px;"><a href="contact.html" style="color:var(--primary);">Contact</a></li>
            <li style="margin-bottom:8px;"><a href="mentions-legales.html" style="color:var(--primary);">Mentions légales</a></li>
            <li style="margin-bottom:8px;"><a href="index.html" style="color:var(--primary);">Accueil</a></li>
        </ul>
    `}
];

otherPages.forEach(p => {
    writePage(p.file, head(p.title) + topBar() + header() + mobileNav() + pageHero(p.title, p.sub, p.bg) + `<section class="page-full"><div class="container">${p.content}</div></section>` + footer());
});

console.log('\n✅ Toutes les pages ont été générées avec succès !');
