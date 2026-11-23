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
| `app-ads.txt` | AdMob's authorised-seller line for the games (publisher pub-6074507773310432). Google crawls it from the developer website in each App Store listing: keep it at the site root, unchanged unless AdMob says so. |
| `reroute/` | ReRoute Racing: home, support, privacy, press kit, `assets/` |
| `reroute/remote-settings.json` | **Read by the live ReRoute app at launch** (map services on, slow or off; busy message). A broken file affects every player: keep it valid JSON and change it only on purpose. |
| `racksmith/` | RackSmith Fitness: home, support, privacy, press kit (`press.html`, files in `press/`) |
| `racksmith/site.js` | `LIVE` (the version on the App Store), `APP_LIVE`, `APP_URL`; items tagged `data-v`, `data-only`, `data-until` show or hide by version |
| `skyfill/` | Skyfill Squares: home, support, privacy, `assets/` (icon, screenshots and link preview made from the game's store frames in `~/dev/skyfill-squares/docs/store/`) |
| `ricoshot/` | Ricoshot: Slime Siege: home, support, privacy, `assets/` (icon from `~/dev/ricoshot`, screenshots captured from the simulator, link preview drawn to match) |
| `honeyspell/` | Honeyspell: Word Hive Puzzle: home, support, privacy, `assets/` (icon, screenshots from the raw simulator shots in `~/dev/honeyspell/build/raw`, link preview cut from `docs/store/header-and-search/`) |
| `beeplings/` | Beeplings: Robot Learning (kids' learning game, ages 2-6): home, support, privacy, `assets/` (icon and favicon from `~/dev/beeplings`; screenshots and link preview still to come). Its privacy policy is the Kids-category one: no data collected, no ads. |

Each app's pages keep their own look, inside one shared frame:

- **Top bar** (`.top` in each app's `style.css`): the studio's aurora colours over navy with the tile
  strip beneath. It opens with `.crumbs`: the studio's hourglass mark on a light tile
  (`../assets/appy-hour-mark-72.webp`, linking to the studio home), a divider, then the app's icon and
  name (linking to the app's home). The top nav is the **same on every page of an app**: the home
  page's sections (as `./#…` on other pages) and **Support**, with `aria-current="page"` on the page you're on.
- **Footer:** `© 2026 Appy Hour Studios, LLC` (linking to the studio home), then **Home · Support ·
  Privacy** (· **Press** where there's a press kit).
- **Titles:** `<App name>` on the home page, then `Support · <App>`, `Privacy Policy · <App>`, `Press kit · <App>`.
- **Support pages** open with the support address and what to include (iPhone model, and what
  happened). **Privacy pages** show `Last updated: <date>.` under the heading.
- **Studio home:** apps are grouped under **Games** and **Fitness**, each card with a status tag
  (`.status.live` "On the App Store" or `.status.soon` "Coming soon"; switch it on release day). The
  Contact list follows the same order as the cards.
- A new app copies this frame: the `.crumbs` CSS block at the end of any app's `style.css`, the header, the footer.

The studio page takes its colours from the logo art
(tokens at the top of `studio.css`: the tiles' cyan, blue, orange and coral, navy text). The logo
and name sit on a dark navy "aurora" band (`.band`, on the home and 404 pages) over a near-white page.

## Conventions

- **Addresses are lowercase** (`/reroute/support.html`); `404.html` redirects mixed-case ones.
- **Copyright:** "© 2026 Appy Hour Studios, LLC". The LLC is named as developer in the press kit and privacy policies.
- **App Store buttons:** Apple's official white "Download on the App Store" badge, loaded from
  `toolbox.marketingtools.apple.com/api/v2/badges/...`. Apple's rules: don't recolour or restyle
  it, at least 40px tall, one per layout area. If Apple moves the tool again, the badge needs repointing.
- **No analytics, trackers or third-party scripts.** The privacy policies promise none.
- **Support addresses:** `reroute.support@appyhourstudios.com`, `racksmith.support@appyhourstudios.com`, `skyfill.support@appyhourstudios.com`, `ricoshot.support@appyhourstudios.com`, `honeyspell.support@appyhourstudios.com`, `beeplings.support@appyhourstudios.com`.
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
  The press kit's downloads in `racksmith/press/` are the 1.4 store set (`store-assets/app-store-1.4-6.9in/`,
  `app-store-1.4-watch/`, `header-and-search-1.4/`, `assets/icon.png`), with `thumb-*.webp` previews made
  from them. Refresh them when a release brings new screenshots.
- App facts (features, prices, versions, what's free) come from each app's own project: check
  there, or ask, before changing claims on a page.

## Logo

The studio logo is the hourglass-in-a-phone art. `assets/appy-hour-mark*.webp` is the picture
with its backdrop made transparent; the name next to it is real text. They, the icons and
`og-image.jpg` come from a 2000×1125 export (logo about 650×820 of it) whose transparency
checkerboard was painted in, so it was cut out by colour. A real transparent PNG at 2K or more
would be sharper still.
