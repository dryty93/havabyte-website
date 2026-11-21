# Havabyte Labs LLC — go-live and Apple Developer enrollment

## Status (November 21, 2026)
- Domain `havabytelabs.com`: verified available via Porkbun live product search ($11.81 first year, $11.81 renewal); **not purchased**.
- Website: files complete, **not deployed**.
- Email: **not configured**.
- Apple organization enrollment: **not submitted**.

## 1. Register domain
At https://porkbun.com/checkout/search?q=havabytelabs.com register **havabytelabs.com only**. Use a registrar account you control, enable 2FA, keep WHOIS privacy on, and choose auto-renew if desired. Do not buy extra hosting or email packages. Save your registrar login securely.

## 2. Create site repository
While signed in as the owner of the desired GitHub account (e.g. `dryty93`):
1. Create a **public** repository named `havabyte-website` at https://github.com/new (public required for GitHub Pages on GitHub Free).
2. Upload **the contents of `havabyte-site/`**, not the outer folder. `index.html` must be at repo root, alongside styles.css, site.js, etc. Do not upload this ZIP as a single file.
3. Repo Settings > Pages > Build and deployment > Deploy from a branch > main > /(root) > Save.
4. Confirm the temporary site `https://dryty93.github.io/havabyte-website/` works, assuming the repo is in that account.
5. In Settings > Pages > Custom domain, enter `havabytelabs.com`, Save. Follow GitHub's custom-domain verification prompts.

## 3. Free Cloudflare DNS + business email receiving
1. Create/sign into Cloudflare free account: https://dash.cloudflare.com/; add `havabytelabs.com` on free plan.
2. Cloudflare assigns **two specific nameservers**. At Porkbun Domain Management > Details > Nameservers, replace nameservers with **the exact pair Cloudflare displays**. Do not copy guessed nameservers. Wait for Cloudflare zone to show Active.
3. In Cloudflare DNS, create four **A** records (name `@`, TTL Auto, DNS only / gray-cloud), values:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. Create CNAME `www` -> `dryty93.github.io` (assuming repo is in `dryty93`), DNS only. Avoid wildcard records. Delete conflicting parking/default A/CNAME records. Leave other needed TXT records alone.
5. Once GitHub Pages verifies DNS and issues a TLS certificate, enable Enforce HTTPS under repo Settings > Pages. Test `https://havabytelabs.com` and `https://www.havabytelabs.com` in a private window.
6. Cloudflare > Compute > Email Service > Email Routing > Onboard domain. Allow it to create necessary email MX/TXT/DKIM records; don't override with guessed values.
7. Add and verify your personal destination inbox (e.g. existing email), then create route `hello@havabytelabs.com` -> verified destination. Consider `admin@havabytelabs.com` as a second alias, if needed. Test with mail from an unrelated account.
8. **Update `BUSINESS_EMAIL` in `site.js` to `hello@havabytelabs.com` after verifying delivery** and commit. Email Routing is receive/forward only; to send directly as that domain, use an outbound email provider with SPF/DKIM correctly configured.

## 4. Apple Developer organization account
1. Confirm exact legal entity name from approved Articles of Organization (expect `Havabyte Labs LLC`) and verify Maryland's entity listing: https://egov.maryland.gov/BusinessExpress/Entity/Search/Search
2. Search/request a free D-U-N-S number using Apple: https://developer.apple.com/help/account/membership/D-U-N-S/ . Use exact legal business name, real headquarters address, contact phone and mailing address. Apple advises up to five business days for assignment and another two business days to sync.
3. Use an Apple Account you control, with your **legal personal first/last name**, 2FA, and ideally company-associated work email. **Do not use the name of the LLC as the Apple Account person's first/last name**. Keep STS team's developer account separate.
4. Enroll as **Organization**, not Individual: https://developer.apple.com/programs/enroll/ . Provide your legal entity name, D-U-N-S number, headquarters address, business phone, functioning company website, domain email, and proof of authority to bind company to agreements. Apple may request ID/other records.
5. After Apple approves company verification, pay the $99 annual membership. The organization's verified legal name appears as seller.

## Updating the site
- Homepage: `index.html`
- Product descriptions: `products.html`
- Company overview: `about.html`
- Contact: `contact.html` and `site.js`
- Privacy: `privacy.html`
- Theme: `styles.css`
Open the relevant file in GitHub, click the pencil, edit, commit to `main`; GitHub Pages redeploys automatically. No package installation needed.

## Notes
- Website privacy notice must be reviewed for accuracy, and is **not** an app privacy policy.
- Apple enrollment isn't the same as Maryland business tax registrations or merchant accounts.
- Do not publish home address, Apple ID credentials, EIN, or D-U-N-S data in public repository files.
- Apple sources: https://developer.apple.com/help/account/membership/program-enrollment/ , https://developer.apple.com/help/account/membership/D-U-N-S/
- GitHub custom domain docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- Cloudflare Email Routing docs: https://developers.cloudflare.com/email-service/get-started/route-emails/
