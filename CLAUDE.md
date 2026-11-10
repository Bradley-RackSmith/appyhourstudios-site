# appyhourstudios.com

This repo **is** the Appy Hour Studios website: the studio home page and each app's pages.
GitHub Pages serves `main` at appyhourstudios.com, so **a push to `main` is live within a
minute or two**. All website work happens here; the app projects don't keep copies.

**This repo is public, and every file in it is served on the site (this one too).** Never put
anything private here: personal email addresses, keys, tokens, unreleased plans.

## Layout

| Path | What it is |
| --- | --- |
| `index.html`, `studio.css`, `assets/` | The studio home page and its logo, icons and link-preview image |
| `favicon.ico`, `site.webmanifest`, `404.html`, `CNAME`, `.nojekyll` | Site-wide files (`CNAME` holds the domain: don't change it) |
| `reroute/` | ReRoute Racing: home, support, privacy, press kit, `assets/` |
| `reroute/remote-settings.json` | **Read by the live ReRoute app at launch** (map services on, slow or off; busy message). A broken file affects every player: keep it valid JSON and change it only on purpose. |
| `racksmith/` | RackSmith Fitness: home, support, privacy |
| `racksmith/site.js` | `LIVE` (the version on the App Store), `APP_LIVE`, `APP_URL`; items tagged `data-v`, `data-only`, `data-until` show or hide by version |

Each app's pages keep their own look. The studio page takes its colours from the logo art
(tokens at the top of `studio.css`: the tiles' cyan, blue, orange and coral, navy text).

## Conventions

- **Addresses are lowercase** (`/reroute/support.html`); `404.html` redirects mixed-case ones.
- **Copyright:** "© 2026 Appy Hour Studios, LLC". The LLC is named as developer in the press kit and privacy policies.
- **App Store buttons:** Apple's official white "Download on the App Store" badge, loaded from
  `toolbox.marketingtools.apple.com/api/v2/badges/...`. Apple's rules: don't recolour or restyle
  it, at least 40px tall, one per layout area. If Apple moves the tool again, the badge needs repointing.
- **No analytics, trackers or third-party scripts.** The privacy policies promise none.
- **Support addresses:** `reroute.support@appyhourstudios.com`, `racksmith.support@appyhourstudios.com`.
- **When a stylesheet or script changes**, bump its `?v=` in the pages that load it (RackSmith
  uses `style.css?v=…` and `site.js?v=…`), or visitors keep the old cached copy.
- **Privacy policies:** change the "Last updated" date whenever the wording changes.
- **Images:** WebP where possible, sized for how they're shown, with `width`/`height` and alt text.
- **Check every change at phone width** (375px) as well as desktop, with no sideways scrolling.

## Preview, publish, check

1. `git pull` first: the site is edited from more than one computer.
2. Preview: `python3 -m http.server 8766` here, then open http://localhost:8766 (on Windows: `python`).
3. Commit, then push to `main` **only with the owner's go-ahead**: pushing is publishing.
4. Check the deploy:
   ```bash
   gh api repos/Bradley-RackSmith/appyhourstudios-site/pages/builds/latest --jq '.status + " " + .commit[0:7]'
   ```
   Then fetch the changed page from https://appyhourstudios.com with `?x=<random>` to skip caches.

## What comes from the app projects

- **ReRoute Racing** store media: the `reroute-racing` repo's `scripts/store/web.ps1` writes
  web copies of the screenshots and videos into `reroute/assets/` here. It finds this repo next to
  it (`../appyhourstudios-site`), or wherever `SITE_REPO` points.
- **RackSmith** screenshots and icons come from the RackSmith project; copy them into `racksmith/`.
- App facts (features, prices, versions, what's free) come from each app's own project: check
  there, or ask, before changing claims on a page.

## Logo

The studio logo is the hourglass-in-a-phone art. `assets/appy-hour-mark*.webp` is the picture
with its backdrop made transparent; the name next to it is real text. They, the icons and
`og-image.jpg` come from a 2000×1125 export (logo about 650×820 of it) whose transparency
checkerboard was painted in, so it was cut out by colour. A real transparent PNG at 2K or more
would be sharper still.
