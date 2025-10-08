# Portfolio Frontend

Vite + React + TypeScript + Tailwind single-page portfolio with Home, About, Projects, and Contact sections.

## Prerequisites

- Node.js 18+
- npm 9+ (or another compatible package manager)

## Installation

```bash
npm install
```

## Development

Start the Vite dev server:

```bash
npm run dev
```

The site opens automatically at `http://localhost:5173/`.

## Build

Create an optimized production bundle:

```bash
npm run build
```

Preview the built output locally:

```bash
npm run preview
```

## Project Structure

```
├── index.html
├── package.json
├── public/
│   └── favicon.svg
├── src/
│   ├── index.css
│   ├── main.tsx
│   └── portfolio/
│       ├── App.tsx
│       ├── assets/
│       │   └── profile.svg
│       ├── components/
│       │   ├── Footer.tsx
│       │   ├── Hero.tsx
│       │   ├── Navbar.tsx
│       │   └── icons.tsx
│       └── pages/
│           ├── About.tsx
│           ├── Contact.tsx
│           ├── Home.tsx
│           └── Projects.tsx
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Styling

TailwindCSS powers the design system. Global directives live in `src/index.css`, and the Tailwind configuration is declared in `tailwind.config.js`. Update the `content` paths if you add new directories so Tailwind can tree-shake unused styles.

## Deployment

### Push to GitHub

1. Create a repository on GitHub (replace `YOUR_ORG/YOUR_REPO` with the real path).
2. Add it as a remote and push the current branch:
   ```bash
   git init
   git remote add origin git@github.com:YOUR_ORG/YOUR_REPO.git
   git add .
   git commit -m "chore: initial commit"
   git push -u origin main
   ```

### Clone on a Remote Server

```bash
cd /var/www
sudo git clone git@github.com:YOUR_ORG/YOUR_REPO.git my-site
cd my-site
```

Pull the latest changes when redeploying:

```bash
cd /var/www/my-site
sudo git pull origin main
```

### Build the Production Bundle

Run on the remote server from the project root:

```bash
npm install
npm run build
```

The compiled assets are written to `dist/`.

### Serve with Nginx at `/profile`

1. Copy the freshly built assets to the web root:
   ```bash
   sudo cp -r dist /var/www/my-site/
   ```
2. Copy `config/nginx.conf` from this repo to `/etc/nginx/sites-available/profile`.
3. Enable the site and reload Nginx:
   ```bash
   sudo ln -s /etc/nginx/sites-available/profile /etc/nginx/sites-enabled/profile
   sudo nginx -t
   sudo systemctl reload nginx
   ```

Requests to `https://nolank.duckdns.org/profile` will now resolve to the SPA entry point (`/var/www/my-site/dist/index.html`). Reloading after each deployment picks up the latest static bundle.
