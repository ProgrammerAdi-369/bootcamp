# btcmp

Basic Express API server with JWT login.

## Prerequisites

- Node.js + npm

## Setup

```bash
git clone <repo-url>
cd btcmp
npm install
```

Create a `.env` file in the project root (it's gitignored, so every dev needs their own):

```
JWT_SECRET=your-secret-here
```

## Run

```bash
npm run dev    # development, auto-restarts on changes (nodemon)
npm start      # plain node
```

Server runs at `http://localhost:5000`.

## Endpoints

| Method | Path | Notes |
|---|---|---|
| GET | `/` | Health check text |
| GET | `/health` | Health check JSON |
| GET | `/endpoint` | Basic sample GET |
| POST | `/endpoint` | Basic sample POST |
| GET | `/api/menu` | Menu list |
| GET | `/api/burger?cheese=extra` | Burger price |
| GET | `/api/pizza?crust=thin` | Pizza price |
| POST | `/api/order` | Place an order (`item`, `quantity`) |
| POST | `/login` | Login with `username`/`password`, returns a JWT |
