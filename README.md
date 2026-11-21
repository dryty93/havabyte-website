# Havabyte Labs LLC — corporate website

Official company website: https://havabytelabs.com/

A static, responsive website using the existing Havabyte theme and wordmark.

## Deploy from Cloudflare Pages (GitHub)

1. In Cloudflare dashboard, open **Workers & Pages → Create → Pages → Connect to Git**.
2. Select GitHub repository `dryty93/havabyte-website`, production branch `main`.
3. Framework preset: **None**; build command: leave blank; build output directory: `/` (repository root).
4. Attach the custom domain `havabytelabs.com` under the Pages project's **Custom domains**.
5. If `havabytelabs.com` is already attached to another Pages project, move the domain only after verifying this deployment; avoid conflicting DNS records. Configure `www` redirect separately if desired.
6. Verify https://havabytelabs.com/, /products/, /about/, /contact/, /privacy/.
7. Verify legacy `/products.html`, `/about.html`, `/contact.html`, `/privacy.html` redirect to their extensionless counterparts. Verify HTTPS.

Cloudflare Pages serves folders containing `index.html` as clean URLs; `_redirects` handles old links. This is a static project and needs no Node/npm build.

## Legal and brand verification

- Confirm the public legal company name matches registered LLC paperwork.
- Header logo and favicon use vector approximations of the supplied HavaByte Labs brand art. The source PNG is the authoritative logo; replace vector approximations with the exact raster asset once available in GitHub.
- Public contact email is `contact@havabytelabs.com`. Verify Cloudflare Email Routing is activated and delivery succeeds. Do not publish any additional mailbox names.
- The company website privacy page does not replace privacy disclosures required for individual apps.

## Contents

- `index.html`: home
- `products/index.html`, `about/index.html`, `contact/index.html`, `privacy/index.html`: clean paths
- `styles.css`, `site.js`, `favicon.svg`: shared assets
- `_redirects`, `_headers`, `robots.txt`, `sitemap.xml`: Cloudflare Pages support files

## Portfolio brand assets

- AudioLingo card: `assets/audiolingo-app-icon.svg` copied from the canonical AudioLingo web icon (source: `dryty93/audiolingo/web/src/app/icon.svg`).
- Ditto card: `assets/ditto-card-wordmark.svg` is an interim brand-themed **wordmark**, not the official icon. Canonical mobile icon lives in the private `dryty93/Ditto/apps/mobile/assets/icon.png`. Use that exact exported icon when binary access is available.
- UsGrade card: `assets/usgrade-card-wordmark.svg` is an interim brand-themed **wordmark**. No verified official asset was located in the currently accessible repository files.

All public website assets are checked into this repository, so site visitors do not need access to private repositories. The portfolio remains a company description and does not imply the apps are published.
