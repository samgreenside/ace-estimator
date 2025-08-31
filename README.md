
# ACE Quickstart (v1.0)
Minimal, deployable shell so you can click a link fast.

## Local
```bash
npm i
npm run dev -w apps/web
# http://localhost:3000
```

## Deploy on Render
- Go to https://render.com/deploy → New Web Service → Build from Git repo.
- Build: `npm i && npm run build`
- Start: `npm run start`
- Done. Health: `/api/health`.
