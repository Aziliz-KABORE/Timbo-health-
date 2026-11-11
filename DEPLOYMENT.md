Deployment instructions for TIMBO (Vite + React)

Options provided: Netlify, Vercel, GitHub Pages. The project uses pnpm in package.json; if you use npm or yarn, adapt commands accordingly.

Netlify (recommended):
- Connect your Git repo to Netlify.
- Build command: pnpm build
- Publish directory: dist
- Add `netlify.toml` was added to the repo to set build/publish settings.

Vercel (very easy):
- Import project into Vercel.
- Vercel will auto-detect a Vite static build. If not, set Build Command: pnpm build and Output Directory: dist.
- `vercel.json` is included to force static-build usage and route all requests to index.html for SPA.

GitHub Pages (simple, no server):
- Run locally: pnpm build
- Push `dist` to a branch (e.g., gh-pages) and configure GitHub Pages to serve from that branch's root.
- Alternatively use `gh-pages` package to automate.

Manus preview link:
- The link you shared is a Manus preview. Manus will serve the built static site similarly to Netlify/Vercel. You can upload or point Manus to the built `dist` folder if Manus supports that in UI.

Notes:
- Ensure environment variables (if any) are configured in the hosting UI.
- If you need CI (GitHub Actions) for automatic deploys, tell me and I can add a minimal workflow.
