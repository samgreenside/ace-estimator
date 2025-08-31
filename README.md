
# ACE Quickstart JS (v1.2)
Plain JavaScript Next.js build to avoid TypeScript issues.

## Local
```bash
npm i
npm run dev -w apps/web
# Visit http://localhost:3000
```

## Deploy on Render
- Go to Settings → set Language: **Node**
- Build Command:
  npm i && npm run build -w apps/web
- Start Command:
  npm run start -w apps/web
- Then click Manual Deploy → Deploy latest commit
- Check health: /api/health
