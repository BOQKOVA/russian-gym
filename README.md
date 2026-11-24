# Russian Gym

Interactive Russian practice pages for A1–A2 learners by Boqkova Teach: short lessons, then games. The site is plain HTML, CSS and JavaScript, with no build step and nothing to install.

## Setup

1. Install [Git](https://git-scm.com/downloads) if you don't have it.
2. Clone the repository:
   ```bash
   git clone https://github.com/MrNoseBooper/russian-gym.git
   cd russian-gym
   ```
3. Open `index.html` in a browser by double-clicking it. That's all you need.

### Optional: run a local server

Some browsers limit pages opened straight from disk: for example, Firefox may not keep saved XP. A local server avoids that. Use either of these:

- **VS Code:** install the "Live Server" extension, right-click `index.html` and choose **Open with Live Server**.
- **Python:** from the project folder, run:
  ```bash
  python -m http.server 8000
  ```
  Then open http://localhost:8000.

## Project structure

```
index.html            Home page: links to every page
static/               Styles for index.html only
core/css/gym.css      Shared styles for the Gym pages
core/js/gym.js        Shared helpers for the Gym pages
core/favi/            Favicons
templates/<page>/     One folder per page: <page>.html + static/<page>.css and <page>.js
```

## Saving your work to GitHub

Run these commands from the project folder (in VS Code: **Terminal → New Terminal**).

**1. See what changed**
```bash
git status
```

**2. Stage your changes**
```bash
git add .
```
This stages everything: new files, changed files and deleted files.

**3. Commit with a short message describing the change**
```bash
git commit -m "Add Food Gym page"
```

**4. Upload to GitHub**
```bash
git push
```
The very first push from a new copy needs `git push -u origin main`. After that, `git push` is enough.

### Shortcut: `git commit -am`

```bash
git commit -am "Fix typo on Verb Gym"
```
`-a` stages and commits files Git **already tracks** in one step. It **skips brand-new files**: if you created a file, run `git add .` first.

### Getting the latest version

```bash
git pull
```
Run this before you start working if you also edit the site from another computer.
