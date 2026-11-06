# Matt Yacoubian — Analytics Portfolio

A free, responsive, dark-themed portfolio site made with plain HTML, CSS, and JavaScript. No frameworks, paid hosting, or installation required.

## Preview on your computer

1. Unzip the downloaded folder.
2. Double-click `index.html` to open it in your web browser.
3. You can edit the files in VS Code or any text editor. Save and reload the browser to preview your changes.

## Publish free on GitHub Pages

1. Sign in or create an account at https://github.com/.
2. Select **New repository**. Name it `portfolio` (or any available name), set visibility to **Public**, and create it.
3. In your new repository, choose **Add file → Upload files**.
4. Upload the actual files **inside** this folder: `index.html`, `styles.css`, `script.js` (and optionally `README.md`). Do **not** upload only the ZIP or put `index.html` inside a nested folder.
5. Commit the files to the `main` branch.
6. Open repository **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**. Select `main` and `/(root)`, then click **Save**.
7. Once GitHub completes the deployment, your site should be at `https://YOUR-USERNAME.github.io/portfolio/` (substitute your GitHub username; if you chose another repository name, use that name instead).
8. To change the website, edit or re-upload the files and commit. GitHub Pages deploys the updated version.

You can also name the repository `YOUR-USERNAME.github.io` to publish at `https://YOUR-USERNAME.github.io/` instead.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Customize it

- **Name / About / Intro**: Open `index.html` and change the text directly.
- **Project cards**: Open `script.js` and edit the `projects` array near the top. The placeholders are explicitly labeled. When a project is really finished, replace its summary and steps with genuine specifics and set `placeholder: false`. Add a real URL to `link` for a writeup, GitHub repository, or Power BI showcase.
- **Contact links**: Currently deliberately NOT linked to an unknown email or account. Replace the `<span class="button secondary muted-button">Contact links coming soon</span>` in `index.html` with an `<a>` link to your real LinkedIn, GitHub, or `mailto:` address. Example: `<a class="button secondary" href="mailto:YOUR_EMAIL">Email me</a>`.
- **Resume**: Add `resume.pdf` alongside `index.html` and insert a button such as `<a href="resume.pdf" target="_blank" rel="noopener noreferrer">View resume</a>` after verifying it contains no information you don't want public.
- **Colors / appearance**: Change CSS variables at the top of `styles.css`.
- **Images**: Current illustrations are original CSS/SVG and are intentionally examples, **not screenshots of finished work**. Replace them with genuine screenshots when projects are complete.

## Privacy & honesty

Everything in a public GitHub repository and its GitHub Pages site should be treated as public. Do not upload confidential company data, passwords, API tokens, private documents, or personal contact info you don't want publicly searchable. The mock project cards are not represented as completed achievements.

## Files

- `index.html` — website structure and text
- `styles.css` — visual design / responsive layout
- `script.js` — project cards, filtering, detail popup, and mobile menu
