# Russian Gym: notes for Claude

Static website of Russian-language practice pages (A1–A2) by Boqkova Teach. Plain HTML, CSS and JS: no build step, no dependencies, no package.json. Pages open straight from disk (`file://`) or from any static server.

**Keep this file current.** Whenever a change adds or alters something a future page build needs to know (structure, shared code, conventions, new pages, the user's preferences), update this file in the same piece of work.

## How the user wants work done

- **Make no assumptions.** If something is ambiguous, ask. For a big task, do the parts that are safe and needed whatever the answer, then ask about the rest.
- **Keep existing behaviour unchanged** when reorganising or refactoring. Check it in a browser, not just by reading the code.
- Follow the site's existing visual style for new pages: bold borders, offset shadows, slightly rotated stickers, the shared colour palette and fonts.
- Shared code goes in `core/`. Code that only one page uses goes in that page's `static/` folder.

## Structure

```
index.html                 First navigation page: links to every page
static/index.css           Styles used only by index.html
core/css/gym.css           Base CSS shared by the 11 Gym pages
core/js/gym.js             Helpers shared by the 11 Gym pages: $, $$, shuffle, pick, esc
core/js/transition.js      Falling-letters page transition, loaded by ALL 14 pages (index, gyms, courses)
core/favi/                 Favicons (ico, svg, 16/32 png, apple-touch, 192/512 png)
templates/<name>/<name>.html
templates/<name>/static/<name>.css   page-only CSS
templates/<name>/static/<name>.js    page-only JS
```

Folder names are camelCase (`casesGym`). Each HTML file is named after its folder.

## Two page designs

1. **Gym pages (11):** alphabetGym, nounGym, pronounGym, verbGym, tenseGym, reflexiveGym, imperativeGym, describeGym, comparativeGym, countGym, connectGym.
   - **Loading:** each page links `core/css/gym.css` before its own CSS, and `core/js/gym.js` before its own script.
   - **Routing:** one page, switched by `location.hash`. A `VIEWS` object holds the views and `go()` renders the current one into `<main id="view">`. `shell()` wraps a lesson view, and `cleanup` is cleared on each view change.
   - **Games:** built with `mcRound()`, `wireChoices()`, `bar()`, `nextBtn()` and `keyChoices()`.
   - **XP:** `addXP()` and `burst()` handle points and the confetti burst.
   - **Header:** `.header__home` (`.home-btn` + `.brand` logo), `.nav` of `#hash` links, and the `★ XP` counter.
   - **Home view:** hero card, marquee, then a `.grid` of `.mode` cards.
2. **Course pages (2):** casesGym (title "Russian Cases, One by One") and russianForRealLife. They use a different design (`--display`/`--body` font variables, `.top`/`.logo` header, `.view` sections) and **do not** load `core/`, except `core/js/transition.js`.

## Shared code rules (read before touching core/)

- `core/css/gym.css` holds only rules that are **identical** on all 11 Gym pages. Each page's own CSS loads after it and overrides it.
- Some shared-looking rules are left in each page's CSS on purpose. Moving them into `core/` would put them before a page rule with equal specificity, which would then win. The three known ones:
  - `@media (prefers-reduced-motion:reduce)`: moving it breaks reduced motion, because `.marquee__track` in the page CSS would override it.
  - `.example .ru`
  - `.mini span`
- The base rules for `.brand`, `.nav__link`, `.xp`, `.marquee*`, `.lead`, `.hero__avatar` and `.hero__sticker*` differ slightly between pages, so they stay in each page's CSS. `static/index.css` has a copy of them.
- The router, `addXP`, `burst` and `results` look shared but differ slightly between pages (mostly Verb Gym), so they stay in each page's JS.
- Before moving anything into `core/`:
  - it must be byte-identical on every page that will use it;
  - for CSS, no earlier page rule with equal specificity may set the same property on the same element;
  - for JS, it must be a declaration with no side effects. Statements that run things (for example `go();`) stay in the page.

## Page conventions

- **Stress marks:** in data strings, an apostrophe after a Cyrillic vowel is a stress mark. `S()` turns it into a combining acute accent (U+0301). Hand-written Russian uses the combining accent directly (`приве́т`).
- **Fonts:** Google Fonts Bricolage Grotesque (display), Golos Text (Russian) and DM Sans (body), through the same `<link>` on every page.
- **Palette** (`:root` in gym.css):
  - pink `#fe98c0`, green `#80eb3d`, blue `#3dd0eb`, red `#eb583d`
  - yellow `#ffe14d` (course pages use `#ffd23f`), lilac `#c4a5ff`
  - ink `#0d0d0d`, background `#fffaf7`
- **Favicons:** every page has this block right after `<title>`. Template pages use `../../core/favi/...`; `index.html` uses `core/favi/...`.
  ```html
  <link rel="icon" href="../../core/favi/favicon.ico" sizes="any">
  <link rel="icon" type="image/svg+xml" href="../../core/favi/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="../../core/favi/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../../core/favi/favicon-16.png">
  <link rel="apple-touch-icon" href="../../core/favi/apple-touch-icon.png">
  ```
  `icon-192.png` and `icon-512.png` are not linked yet: they need a web app manifest.
- **Saved progress (localStorage).** Every page needs its own key prefix:

  | Page | Prefix |
  |---|---|
  | alphabetGym | `ag_` |
  | comparativeGym | `cg_` |
  | connectGym | `cn_` |
  | countGym | `ng2_` |
  | describeGym | `dg_` |
  | imperativeGym | `ig_` |
  | nounGym | `ng_` |
  | pronounGym | `pg_` |
  | reflexiveGym | `rg_` |
  | tenseGym | `tg_` |
  | verbGym | `vg_` |
  | casesGym | `rc-progress` |
  | russianForRealLife | `pb-progress` |

  casesGym and russianForRealLife share `rc-stress`, so the stress-mark setting is shared between them.

## Navigation

- `index.html` is the entry point. Gym pages are cards 01–11 under "Pick your gym", and the two course pages are cards 12–13 under "Courses".
- **A new page must get a card in `index.html`.**
- **Page transition** (`core/js/transition.js`): clicking a link to another page of the site (not a `#hash` link) plays an animation. Colourful Cyrillic letters and signs fall in, an ink curtain drops, and a sticker pops up: "домо́й!" when going to `index.html`, "пое́хали!" otherwise. The letter layout is handed to the next page through `sessionStorage` key `rg_transition`, where the letters fall away off the bottom. The script injects its own styles (classes `rg-tr*`). It must be loaded in `<head>` **without** `defer`, right after the page CSS, so the arriving page is covered before it first paints. It is skipped when the user prefers reduced motion.
- Every page has a `.home-btn` back to `index.html` (a square with an inline-SVG house icon, sized to match the height, radius, shadow and tilt of the `.brand`/`.logo` next to it. It is pink on Gym pages, but yellow on Verb Gym and on the course pages, where the logo itself is pink). On Gym pages it sits with `.brand` inside `<div class="header__home">`, and its CSS is in `core/css/gym.css`. On course pages it comes before `.logo`, and its CSS is at the end of each page's own CSS, because they don't load `core/`. `.brand`/`.logo` still go to that page's `#home` view.
- The `index.html` hero tile (`.hero__avatar`) shows the favicon "B" as an inline SVG path copied from `core/favi/favicon.svg`.

## Adding a new page

1. Create `templates/<camelName>/<camelName>.html`, with its CSS and JS in `static/<camelName>.css` and `static/<camelName>.js`.
2. For a Gym-style page:
   - link `../../core/css/gym.css` before the page CSS and `../../core/js/gym.js` before the page script;
   - don't redeclare `$`, `$$`, `shuffle`, `pick` or `esc`;
   - copy the per-page base rules listed above from an existing Gym page.
3. Add the favicon block and give the page a unique localStorage prefix.
4. Copy the header's `.home-btn` link (back to `index.html`) from an existing page, and add `<script src="../../core/js/transition.js"></script>` at the end of `<head>`.
5. Add a card to `index.html` and update the chip counts in its hero.
6. Update this file.

## Checking changes

- No test suite. Check pages in headless Chrome (`C:\Program Files\Google\Chrome\Application\chrome.exe --headless=new --screenshot=... --window-size=...`).
- Headless Chrome lays pages out wider than a 390px window, so the right edge gets cropped in phone screenshots. That isn't a bug.
- For refactors, compare the old and new page with the same fixed random seed: open each view and compare the DOM and computed styles. Block web fonts and use a fresh profile so font loading doesn't make runs differ.
