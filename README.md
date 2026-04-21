# 🧩 Microkernel Portfolio Website

> A highly modular, plug-and-play portfolio website built with the **MERN Stack** using **Microkernel Architecture** — a small, stable core with independent, enable/disable plugins.

---

## 📐 Architecture Overview

```
Small Core (Microkernel) + Independent Plugins (Extensions)
```

The system is divided into:
- **Core (Microkernel)** — minimal, stable, handles only essential responsibilities
- **Plugins (Extensions)** — independent, plug-and-play modules loaded at runtime
- **Core Services** — shared utilities (logging, error handling, auth, UI components)
- **Plugin System** — discover → load → register → render pipeline
- **Data Layer** *(optional)* — REST API + MongoDB for dynamic content
- **Configuration** — `config/plugins.json` drives which plugins are active

---

## 📁 Folder Structure

```
portfolio-microkernel/
│
├── client/                          # React.js Frontend (Vite)
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── core/                    # 🔵 MICROKERNEL CORE
│   │   │   ├── AppShell.jsx         # Application Shell — root layout host
│   │   │   ├── RoutingManager.jsx   # React Router config & dynamic routes
│   │   │   ├── PluginLoader.js      # Loads plugins dynamically (lazy import)
│   │   │   ├── PluginRegistry.js    # Stores registered plugin manifests
│   │   │   ├── GlobalState.jsx      # React Context — shared state
│   │   │   ├── ConfigManager.js     # Reads config/plugins.json
│   │   │   ├── EventBus.js          # Pub/sub communication between plugins
│   │   │   └── ThemeManager.js      # Dark/light theme management
│   │   │
│   │   ├── core-services/           # 🟢 CORE SERVICES
│   │   │   ├── LoggingService.js    # Centralized logger
│   │   │   ├── ErrorHandler.jsx     # Global error boundary + handler
│   │   │   ├── AuthService.js       # Optional auth logic (JWT/session)
│   │   │   └── ui/                  # Shared UI components
│   │   │       ├── Button.jsx
│   │   │       ├── Card.jsx
│   │   │       ├── Navbar.jsx
│   │   │       ├── Footer.jsx
│   │   │       └── Spinner.jsx
│   │   │
│   │   ├── plugins/                 # 🟣 PLUGINS (EXTENSIONS)
│   │   │   ├── about/
│   │   │   │   ├── index.jsx        # About page — bio, education, experience
│   │   │   │   ├── manifest.json    # { name, route, enabled, version }
│   │   │   │   └── about.test.jsx
│   │   │   ├── projects/
│   │   │   │   ├── index.jsx        # Projects showcase — tech stack, links
│   │   │   │   ├── manifest.json
│   │   │   │   └── projects.test.jsx
│   │   │   ├── skills/
│   │   │   │   ├── index.jsx        # Skills & proficiencies
│   │   │   │   ├── manifest.json
│   │   │   │   └── skills.test.jsx
│   │   │   ├── contact/
│   │   │   │   ├── index.jsx        # Contact form + social links
│   │   │   │   ├── manifest.json
│   │   │   │   └── contact.test.jsx
│   │   │   ├── blog/                # Optional plugin
│   │   │   │   ├── index.jsx        # Blog/articles (system design, devops)
│   │   │   │   ├── manifest.json
│   │   │   │   └── blog.test.jsx
│   │   │   └── admin/               # Optional plugin
│   │   │       ├── index.jsx        # Admin panel — manage content
│   │   │       ├── manifest.json
│   │   │       └── admin.test.jsx
│   │   │
│   │   ├── config/
│   │   │   └── plugins.json         # 🟡 Master config — enable/disable plugins
│   │   │
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   └── fonts/
│   │   │
│   │   ├── styles/
│   │   │   └── globals.css          # Tailwind CSS global styles
│   │   │
│   │   ├── App.jsx                  # Root component — mounts AppShell
│   │   └── main.jsx                 # Vite entry point
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
├── server/                          # Node.js + Express Backend (Optional Data Layer)
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js                # MongoDB connection (Mongoose)
│   │   │   └── env.js               # Environment variable loader
│   │   │
│   │   ├── models/                  # Mongoose schemas
│   │   │   ├── Project.js
│   │   │   ├── Blog.js
│   │   │   └── Contact.js
│   │   │
│   │   ├── routes/                  # Express route handlers
│   │   │   ├── projects.route.js
│   │   │   ├── blog.route.js
│   │   │   └── contact.route.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── projects.controller.js
│   │   │   ├── blog.controller.js
│   │   │   └── contact.controller.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js   # JWT verification
│   │   │   ├── error.middleware.js  # Global error handler
│   │   │   └── logger.middleware.js
│   │   │
│   │   └── app.js                   # Express app setup
│   │
│   ├── server.js                    # Entry point
│   ├── .env                         # Environment variables (never commit)
│   ├── .env.example
│   └── package.json
│
├── docker/
│   ├── Dockerfile.client
│   ├── Dockerfile.server
│   └── docker-compose.yml
│
├── .github/
│   └── workflows/
│       ├── ci.yml                   # CI — lint, test on push/PR
│       └── deploy.yml               # CD — deploy to Vercel/Netlify/AWS
│
├── .gitignore
├── .eslintrc.js
├── .prettierrc
└── README.md
```

---

## ⚙️ Configuration — `config/plugins.json`

This file is the single source of truth for which plugins are active.

```json
{
  "plugins": ["about", "projects", "skills", "contact", "blog"],
  "theme": "dark",
  "version": "1.0.0"
}
```

To disable a plugin, simply remove it from the array — no code changes needed.

---

## Plugin Manifest — `plugins/<name>/manifest.json`

Each plugin declares its identity via a manifest:

```json
{
  "name": "projects",
  "route": "/projects",
  "label": "Projects",
  "enabled": true,
  "version": "1.0.0",
  "icon": "briefcase"
}
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x or yarn
- MongoDB (local or MongoDB Atlas)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/Portfolio-website.git
cd Portfolio-website
```

### 2. Install Dependencies

```bash
# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install
```

### 3. Configure Environment Variables

```bash
# In server/
cp .env.example .env
```

Edit `server/.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### 4. Enable/Disable Plugins

Edit `client/src/config/plugins.json` to control which sections appear:

```json
{
  "plugins": ["about", "projects", "skills", "contact"],
  "theme": "dark"
}
```

### 5. Run the Application

```bash
# Terminal 1 — Start the backend
cd server && npm run dev

# Terminal 2 — Start the frontend
cd client && npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🧪 Testing

### Testing Stack

| Layer | Tool |
|---|---|
| Unit & Component Tests | Jest + React Testing Library |
| API / Integration Tests | Jest + Supertest |
| E2E Tests | Playwright |
| Test Coverage | Jest `--coverage` |

### Install Testing Dependencies

```bash
# Client
cd client
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event playwright

# Server
cd server
npm install --save-dev jest supertest
```

### Running Tests

```bash
# Run all client tests
cd client && npm test

# Run all client tests with coverage report
cd client && npm run test:coverage

# Run server/API tests
cd server && npm test

# Run E2E tests (requires running app)
cd client && npx playwright test

# Run all tests from root (if using a monorepo runner)
npm run test:all
```

### Test Structure

```
client/src/plugins/
├── about/
│   └── about.test.jsx          # Unit test for About plugin
├── projects/
│   └── projects.test.jsx       # Unit test for Projects plugin
├── contact/
│   └── contact.test.jsx        # Form submission, validation
└── ...

client/src/core/
└── PluginLoader.test.js        # Tests plugin discovery & loading

server/src/
├── routes/
│   └── projects.route.test.js  # API route integration tests
└── controllers/
    └── contact.controller.test.js
```

### Example — Unit Test (Plugin Component)

```jsx
// plugins/about/about.test.jsx
import { render, screen } from '@testing-library/react';
import AboutPlugin from './index';

describe('About Plugin', () => {
  it('renders the about section', () => {
    render(<AboutPlugin />);
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
  });
});
```

### Example — API Integration Test

```js
// server/src/routes/projects.route.test.js
const request = require('supertest');
const app = require('../../app');

describe('GET /api/projects', () => {
  it('should return a list of projects', async () => {
    const res = await request(app).get('/api/projects');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
```

### Example — E2E Test (Playwright)

```js
// e2e/navigation.spec.js
const { test, expect } = require('@playwright/test');

test('loads the About section', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.click('text=About');
  await expect(page).toHaveURL(/.*about/);
  await expect(page.locator('h1')).toBeVisible();
});
```

### Coverage Targets

| Module | Target |
|---|---|
| Core (Microkernel) | ≥ 90% |
| Plugins | ≥ 80% |
| API Routes | ≥ 85% |
| Controllers | ≥ 80% |

---

## 🚢 Deployment

### Option A — Vercel (Recommended for Frontend)

1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import repo.
3. Set the **Root Directory** to `client`.
4. Set **Build Command**: `npm run build`
5. Set **Output Directory**: `dist`
6. Add environment variables under **Project Settings → Environment Variables**.
7. Click **Deploy**.

For the backend, deploy separately to Railway, Render, or a VPS and update the frontend's API base URL.

---

### Option B — Netlify (Frontend)

1. Go to [netlify.com](https://netlify.com) → **Add New Site** → Import from Git.
2. Set **Base directory**: `client`
3. Set **Build command**: `npm run build`
4. Set **Publish directory**: `client/dist`
5. Add environment variables under **Site Configuration → Environment Variables**.
6. Deploy.

Add a `client/public/_redirects` file for React Router SPA support:

```
/*  /index.html  200
```

---

### Option C — AWS (Production-Grade)

| Service | Purpose |
|---|---|
| S3 + CloudFront | Host React static build |
| EC2 / ECS | Run Express API |
| MongoDB Atlas | Managed database |
| Route 53 | DNS management |
| ACM | SSL/TLS certificates |
| CodePipeline | CI/CD automation |

**Frontend Deploy to S3:**

```bash
cd client
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_CF_ID --paths "/*"
```

---

### Option D — Docker (Self-Hosted / Any Cloud)

Build and run with Docker Compose:

```bash
# From project root
docker-compose up --build
```

**`docker/docker-compose.yml`:**

```yaml
version: "3.9"
services:
  client:
    build:
      context: ../client
      dockerfile: ../docker/Dockerfile.client
    ports:
      - "5173:80"
    depends_on:
      - server

  server:
    build:
      context: ../server
      dockerfile: ../docker/Dockerfile.server
    ports:
      - "5000:5000"
    environment:
      - MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
      - NODE_ENV=production
    depends_on:
      - mongo

  mongo:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

**`docker/Dockerfile.client`:**

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**`docker/Dockerfile.server`:**

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]
```

---

### CI/CD Pipeline — GitHub Actions

**`.github/workflows/ci.yml`** — runs on every push and pull request:

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test-client:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: cd client && npm ci
      - run: cd client && npm test -- --coverage

  test-server:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: cd server && npm ci
      - run: cd server && npm test

  build:
    needs: [test-client, test-server]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: cd client && npm ci && npm run build
```

**`.github/workflows/deploy.yml`** — deploys on merge to `main`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to Vercel
        run: npx vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

---

## 🔑 Environment Variables Reference

| Variable | Location | Description |
|---|---|---|
| `VITE_API_URL` | `client/.env` | Backend API base URL |
| `PORT` | `server/.env` | Express server port (default: 5000) |
| `MONGO_URI` | `server/.env` | MongoDB Atlas connection string (`mongodb+srv://...`) |
| `JWT_SECRET` | `server/.env` | Secret for JWT signing (admin plugin) |
| `NODE_ENV` | `server/.env` | `development` or `production` |
| `CLIENT_URL` | `server/.env` | Allowed CORS origin |

---

## ✅ Key Benefits

- **Highly Modular & Scalable** — add sections without touching core code
- **Add / Remove Features Easily** — toggle plugins in `plugins.json`
- **Core Remains Stable** — plugins can break independently without crashing the app
- **Plugins are Independent** — each plugin owns its own route, UI, and tests
- **Reusability Across Projects** — copy any plugin to another microkernel project
- **Easy Maintenance & Extension** — new developers can add plugins with zero core knowledge

---

## 📜 Scripts Reference

| Command | Location | Description |
|---|---|---|
| `npm run dev` | `client/` | Start frontend dev server |
| `npm run build` | `client/` | Production build |
| `npm test` | `client/` | Run unit/component tests |
| `npm run test:coverage` | `client/` | Tests + coverage report |
| `npx playwright test` | `client/` | Run E2E tests |
| `npm run dev` | `server/` | Start backend with nodemon |
| `npm test` | `server/` | Run API integration tests |
| `docker-compose up` | root | Start full stack with Docker |

---

## 📄 License

MIT — feel free to use this as a template for your own portfolio.
