# Ebube Peter — Portfolio (Full-Stack)

A multi-page portfolio built with **React + React Router** on the frontend and **Node.js + Express + MongoDB** on the backend.

## Structure

```
/                     React + Vite frontend
  src/
    pages/            One page per route (Home, About, Projects, Skills, Contact)
    components/       Reusable UI pieces
    lib/api.js         Fetch helpers that talk to the backend
/server                Node.js + Express + MongoDB backend
  routes/              /api/contact, /api/visits, /api/projects
  models/              Mongoose schemas
  server.js            Entry point
```

## Routes

| Path | Page |
|---|---|
| `/` | Home (Hero + Tech Stack) |
| `/about` | About |
| `/projects` | Projects |
| `/skills` | Skills |
| `/contact` | Contact form |

Page transitions are handled with `framer-motion`'s `AnimatePresence`.

## Running locally

### Frontend
```bash
npm install
cp .env.example .env   # set VITE_API_URL if backend isn't on localhost:5000
npm run dev
```

### Backend
```bash
cd server
npm install
cp .env.example .env   # add your MongoDB Atlas connection string
npm run dev
```

The backend runs on `http://localhost:5000`, the frontend on `http://localhost:5173`.

## API Endpoints

- `POST /api/contact` — submit the contact form (rate-limited to 5 requests / 15 min)
- `POST /api/visits` — increments and returns the visitor count
- `GET /api/visits` — returns the current visitor count
- `GET /api/projects` — returns projects stored in MongoDB (optional; the frontend currently uses static data in `src/data.js` as a fallback)

## Deployment

- **Frontend**: Vercel (the included `vercel.json` adds the SPA rewrite rule needed for React Router)
- **Backend**: Render, Railway, or any Node host — set `MONGODB_URI` and `CLIENT_ORIGIN` env vars
