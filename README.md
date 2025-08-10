
# Does Not Compute

> What are my chances? — Does not compute.  
> Research and reflections on systems, collapse, and what comes after.

## Quick start

1. Create a new GitHub repo and upload this folder (or upload the ZIP contents).
2. Go to **Settings → Pages** and set **Build and deployment = GitHub Actions**.
3. Commit to `main`. The `Deploy to GitHub Pages` workflow will build and publish your site.
4. Your site will appear at `https://<your-username>.github.io/<your-repo>/`.
5. Edit content in `src/content/*` folders. New files = new pages.

### Content locations
- Essays: `src/content/essays/*.mdx`
- Notes: `src/content/notes/*.mdx`
- Projects: `src/content/projects/*.mdx`
- Library: `src/content/library/*.mdx`

Each file has a frontmatter block with fields like `title`, `date`, `tags`, etc.

### Development (optional)
If you want to run locally:
```bash
npm ci
npm run dev
```
Then open `http://localhost:4321`.

### Set the correct site URL
In `astro.config.mjs`, update `SITE_URL` to your actual GitHub Pages URL for correct RSS & sitemap.
