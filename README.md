# 🗂️ Portfolio Website

> A full-stack portfolio website built with the **MERN Stack** — clean, section-based architecture on the frontend, RESTful API backend with MongoDB Atlas, OTP email verification, and JWT authentication.

---

## 📐 Architecture Overview

- **Frontend** — React + Vite with a clean, section-based architecture
- **Backend** — Node.js + Express REST API
- **Database** — MongoDB Atlas (single cluster, separate collections per section)
- **Auth** — JWT + OTP email verification via Nodemailer (Gmail)
- **Styling** — Tailwind CSS v4 + DaisyUI v4

---

## 📁 Folder Structure

```
Portfolio-website/
│
├── client/                             # React.js Frontend (Vite)
│   ├── public/
│   │   └── logo.svg
│   ├── src/
│   │   ├── components/                 # Reusable UI pieces
│   │   │   ├── ui/                     # Dumb components — no business logic
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Badge.jsx
│   │   │   │   └── SectionTitle.jsx
│   │   │   └── layout/                 # Structural wrappers
│   │   │       ├── Navbar.jsx
│   │   │       ├── Footer.jsx
│   │   │       └── ScrollToTop.jsx
│   │   │
│   │   ├── sections/                   # Each portfolio section owns its folder
│   │   │   ├── introduction/
│   │   │   │   └── Introduction.jsx
│   │   │   ├── profile/
│   │   │   │   └── Profile.jsx
│   │   │   ├── projects/
│   │   │   │   ├── Projects.jsx
│   │   │   │   └── ProjectCard.jsx
│   │   │   ├── certificates/
│   │   │   │   ├── Certificates.jsx
│   │   │   │   └── CertificateCard.jsx
│   │   │   ├── skills/
│   │   │   │   ├── Skills.jsx
│   │   │   │   └── SkillBadge.jsx
│   │   │   ├── blog/
│   │   │   │   ├── Blog.jsx
│   │   │   │   └── BlogCard.jsx
│   │   │   ├── testimonial/
│   │   │   │   └── Testimonial.jsx
│   │   │   ├── workProcess/
│   │   │   │   └── WorkProcess.jsx
│   │   │   └── contact/
│   │   │       ├── Contact.jsx
│   │   │       └── ContactForm.jsx
│   │   │
│   │   ├── data/                       # All content as plain JS objects
│   │   │   ├── projects.js             # Edit here to update your projects
│   │   │   ├── certificates.js
│   │   │   ├── skills.js
│   │   │   └── testimonials.js
│   │   │
│   │   ├── hooks/                      # Custom React hooks
│   │   │   ├── useScrollPosition.js    # Scroll-aware navbar
│   │   │   └── useContactForm.js       # Contact form state + submission
│   │   │
│   │   ├── services/                   # API calls — components never call fetch directly
│   │   │   ├── contactService.js
│   │   │   └── projectService.js
│   │   │
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   └── icons/
│   │   │
│   │   ├── styles/
│   │   │   └── globals.css             # Tailwind CSS + DaisyUI + custom theme vars
│   │   │
│   │   ├── App.jsx                     # Assembles all sections top to bottom
│   │   └── main.jsx                    # Vite entry point
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── .env
│   ├── .env.example
│   └── package.json
│
├── server/                             # Node.js + Express Backend
│   ├── src/
│   │   ├── utils/
│   │   │   └── otp.util.js             # Generate & verify OTP (crypto.randomInt)
│   │   │
│   │   ├── services/
│   │   │   └── email.service.js        # Nodemailer Gmail transporter + OTP templates
│   │   │
│   │   ├── config/
│   │   │   ├── db.js                   # MongoDB Atlas connection (Mongoose)
│   │   │   └── env.js                  # Environment variable loader
│   │   │
│   │   ├── models/                     # Mongoose schemas
│   │   │   ├── User.js                 # Admin user (bcrypt hashed password)
│   │   │   ├── Project.js
│   │   │   ├── Blog.js
│   │   │   └── Contact.js
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.route.js           # Register / Login / OTP flows
│   │   │   ├── projects.route.js
│   │   │   ├── blog.route.js
│   │   │   └── contact.route.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── user.controller.js      # Auth + OTP logic
│   │   │   ├── projects.controller.js
│   │   │   ├── blog.controller.js
│   │   │   └── contact.controller.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js      # JWT Bearer token verification
│   │   │   ├── error.middleware.js     # Global error handler
│   │   │   └── logger.middleware.js    # Colour-coded request logger
│   │   │
│   │   └── app.js                      # Express app — middleware + routes
│   │
│   ├── server.js                       # Entry point — connect DB then start server
│   ├── .env                            # Never commit this
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
│       ├── ci.yml                      # CI — lint + test on push/PR
│       └── deploy.yml                  # CD — deploy to Vercel on merge to main
│
├── .gitignore
├── .eslintrc.js
├── .prettierrc
└── README.md
```

---

## 🗃️ Database — MongoDB Atlas

One cluster, one database, separate collections per feature. No cross-collection complexity.

```
MongoDB Atlas
└── portfolio (database)
    ├── users        ← admin auth
    ├── projects     ← portfolio projects
    ├── blogs        ← blog posts
    └── contacts     ← contact form submissions
```

---

## 🔐 Auth & OTP Flows

Admin registration and sensitive actions use a 2-step OTP flow via Gmail.

| Flow | Step 1 | Step 2 |
|---|---|---|
| Register | `POST /api/auth/register/send-otp` | `POST /api/auth/register` |
| Update Email | `POST /api/auth/update-email/send-otp` | `PUT /api/auth/update-email` |
| Change Password | `POST /api/auth/change-password/send-otp` | `PUT /api/auth/change-password` |

OTPs are 6 digits, expire in **10 minutes**, and are single-use (deleted after successful verification).

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x
- MongoDB Atlas account
- Gmail account with 2-Step Verification + App Password

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/Portfolio-website.git
cd Portfolio-website
```

### 2. Install Dependencies

```bash
# Frontend
cd client && npm install

# Backend
cd ../server && npm install
```

### 3. Configure Environment Variables

```bash
cd server
cp .env.example .env
```

Edit `server/.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
JWT_SECRET=your_128_char_random_hex_string
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Nodemailer — use a Gmail App Password, NOT your Gmail login password
# Generate at: https://myaccount.google.com/apppasswords
EMAIL_SERVICE=gmail
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=xxxx_xxxx_xxxx_xxxx
```

Edit `client/.env`:

```env
VITE_API_URL=http://localhost:5000
```

### 4. Generate a JWT Secret

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Paste the output as your `JWT_SECRET`.

### 5. Run the Application

```bash
# Terminal 1 — Backend
cd server && npm run dev

# Terminal 2 — Frontend
cd client && npm run dev
```

Frontend: `http://localhost:5173` — Backend: `http://localhost:5000`

---

## 🧪 Testing

### Testing Stack

| Layer | Tool |
|---|---|
| Unit & Component Tests | Jest + React Testing Library |
| API / Integration Tests | Jest + Supertest |
| E2E Tests | Playwright |
| Coverage | Jest `--coverage` |

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
# Client unit tests
cd client && npm test

# Client tests with coverage report
cd client && npm run test:coverage

# Server API tests
cd server && npm test

# E2E tests (app must be running)
cd client && npx playwright test
```

### Test Structure

```
client/src/
├── sections/
│   ├── projects/
│   │   └── Projects.test.jsx
│   ├── contact/
│   │   └── Contact.test.jsx
│   └── ...
│
server/src/
├── routes/
│   └── projects.route.test.js
└── controllers/
    └── contact.controller.test.js
```

### Example — Component Test

```jsx
// sections/projects/Projects.test.jsx
import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects Section', () => {
  it('renders the projects heading', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
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
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});
```

### Example — E2E Test (Playwright)

```js
// e2e/navigation.spec.js
const { test, expect } = require('@playwright/test');

test('scrolls to projects section', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.click('text=Portfolio');
  await expect(page.locator('#portfolio')).toBeVisible();
});
```

### Coverage Targets

| Module | Target |
|---|---|
| Sections (components) | ≥ 80% |
| API Routes | ≥ 85% |
| Controllers | ≥ 80% |
| Auth / OTP flows | ≥ 90% |

---

## 🚢 Deployment

### Option A — Vercel (Recommended for Frontend)

1. Push to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import repo.
3. Set **Root Directory** to `client`.
4. Set **Build Command**: `npm run build`
5. Set **Output Directory**: `dist`
6. Add environment variables under **Project Settings → Environment Variables**.
7. Deploy.

Deploy the backend separately to **Railway** or **Render**, then set `VITE_API_URL` in Vercel to point to it.

---

### Option B — Netlify (Frontend)

1. Go to [netlify.com](https://netlify.com) → **Add New Site** → Import from Git.
2. Set **Base directory**: `client`
3. Set **Build command**: `npm run build`
4. Set **Publish directory**: `client/dist`
5. Add environment variables.
6. Deploy.

Add `client/public/_redirects` for SPA support:

```
/*  /index.html  200
```

---

### Option C — AWS (Production-Grade)

| Service | Purpose |
|---|---|
| S3 + CloudFront | Host React static build |
| EC2 / ECS | Run Express API |
| MongoDB Atlas | Managed cloud database |
| Route 53 | DNS management |
| ACM | SSL/TLS certificates |
| CodePipeline | CI/CD automation |

```bash
cd client
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_CF_ID --paths "/*"
```

---

### Option D — Docker

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

**`.github/workflows/ci.yml`:**

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
      - run: cd client && npm ci && npm test -- --coverage

  test-server:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: cd server && npm ci && npm test

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

**`.github/workflows/deploy.yml`:**

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
| `MONGO_URI` | `server/.env` | MongoDB Atlas connection string |
| `JWT_SECRET` | `server/.env` | 128-char random hex string for JWT signing |
| `NODE_ENV` | `server/.env` | `development` or `production` |
| `CLIENT_URL` | `server/.env` | Allowed CORS origin |
| `EMAIL_SERVICE` | `server/.env` | Email provider (default: `gmail`) |
| `EMAIL_USER` | `server/.env` | Gmail address for sending OTPs |
| `EMAIL_PASS` | `server/.env` | Gmail App Password (not your account password) |

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