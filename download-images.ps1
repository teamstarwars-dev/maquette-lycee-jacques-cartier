$baseUrl = "https://www.lyceejacquescartier.fr"
$imgDir = "$PSScriptRoot\images"

# Create images directory
if (!(Test-Path $imgDir)) { New-Item -ItemType Directory -Path $imgDir -Force | Out-Null }

# Define images to download: @{ url; name }
$images = @(
    # Logo
    @{ url="$baseUrl/article/photo/dossier90/DOSSIERillustration/REDUIT545_photo90.png"; name="logo.png" },
    # QR / Brochure
    @{ url="$baseUrl/article/photo/dossier899/DOSSIERillustration/REDUIT185_photo899.jpg"; name="qr-brochure.jpg" },
    # Hero slider (6 slides)
    @{ url="$baseUrl/article/photo/dossier131/PETITEvignettes/Photo_1_bandeau.webp"; name="slide-1.webp" },
    @{ url="$baseUrl/article/photo/dossier131/PETITEvignettes/Photo_2_bandeau.webp"; name="slide-2.webp" },
    @{ url="$baseUrl/article/photo/dossier131/PETITEvignettes/Photo_3_bandeau.webp"; name="slide-3.webp" },
    @{ url="$baseUrl/article/photo/dossier131/PETITEvignettes/Photo_4_bandeau.webp"; name="slide-4.webp" },
    @{ url="$baseUrl/article/photo/dossier131/PETITEvignettes/Photo_5_bandeau.webp"; name="slide-5.webp" },
    @{ url="$baseUrl/article/photo/dossier131/PETITEvignettes/photo_6_bandeau.webp"; name="slide-6.webp" },
    # Theme block images (8 blocks)
    @{ url="$baseUrl/article/photo/dossier431/DOSSIERillustration/bgbloc1-625x700-jpg.webp"; name="theme-international.webp" },
    @{ url="$baseUrl/article/photo/dossier431/DOSSIERillustration/bgbloc2-625x700-jpg.webp"; name="theme-culture.webp" },
    @{ url="$baseUrl/article/photo/dossier431/DOSSIERillustration/bgbloc3-625x700-jpg.webp"; name="theme-avenir.webp" },
    @{ url="$baseUrl/article/photo/dossier431/DOSSIERillustration/bgbloc4-313x700-jpg.webp"; name="theme-engager.webp" },
    @{ url="$baseUrl/article/photo/dossier431/DOSSIERillustration/bgbloc5-313x700-jpg.webp"; name="theme-epanouir.webp" },
    @{ url="$baseUrl/article/photo/dossier431/DOSSIERillustration/bgbloc6-313x700-jpg.webp"; name="theme-entreprise.webp" },
    @{ url="$baseUrl/article/photo/dossier431/DOSSIERillustration/bgbloc7-313x700-png.webp"; name="theme-sport.webp" },
    @{ url="$baseUrl/article/photo/dossier431/DOSSIERillustration/bgbloc8-2500x700-jpg.webp"; name="theme-sciences.webp" },
    # News thumbnails
    @{ url="$baseUrl/article/produit/photo/dossier2657/DOSSIERillustration/RAP1000LARG475REDUITphoto2657.webp"; name="news-aide-financiere.webp" },
    @{ url="$baseUrl/article/produit/photo/dossier2656/DOSSIERillustration/RAP1000LARG475REDUITphoto2656.webp"; name="news-tarification.webp" },
    @{ url="$baseUrl/article/produit/photo/dossier2653/DOSSIERillustration/RAP1000LARG475REDUIT2653.webp"; name="news-menu.webp" },
    @{ url="$baseUrl/article/produit/photo/dossier2644/DOSSIERillustration/RAP1000LARG475REDUITphoto2644.webp"; name="news-kangourou.webp" },
    # Full-width section background
    @{ url="$baseUrl/article/photo/dossier433/DOSSIERillustration/fond_acc1.webp"; name="about-bg.webp" },
    # Footer image
    @{ url="$baseUrl/article/photo/dossier92/DOSSIERillustration/bgbloc1-400x220-png.webp"; name="footer-bg.webp" },
    # Favicon
    @{ url="$baseUrl/webdav/image_design/favicon512.ico"; name="favicon.ico" }
)

$success = 0
$fail = 0

foreach ($img in $images) {
    $outFile = Join-Path $imgDir $img.name
    try {
        Invoke-WebRequest -Uri $img.url -OutFile $outFile -UseBasicParsing -TimeoutSec 15 -ErrorAction Stop
        $size = (Get-Item $outFile).Length
        Write-Host "OK: $($img.name) ($size bytes)"
        $success++
    } catch {
        Write-Host "FAIL: $($img.name) - $($_.Exception.Message)"
        $fail++
    }
}

Write-Host "`nDone: $success downloaded, $fail failed"
