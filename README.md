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
