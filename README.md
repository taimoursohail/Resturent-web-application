# L'Éclat Gastronomy

## Premium Restaurant Menu & Ordering System

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](https://opensource.org/licenses/ISC)

L'Éclat Gastronomy is a full-stack restaurant menu and ordering experience built with Node.js, Express, and EJS. It delivers a polished, mobile-friendly menu UI, a persistent cart, and an admin dashboard for managing dishes and viewing incoming orders.

**Live Demo:** [https://restaurant-app-eta-three.vercel.app/](https://restaurant-app-eta-three.vercel.app/)

---

## Highlights

- Elegant, responsive dark UI with gold accents (optimized for mobile → desktop)
- Client-side cart with `localStorage` persistence and live subtotal/tax/total updates
- Server-rendered pages (EJS) plus JSON APIs for menu, orders, and dish management
- Admin dashboard (slug-protected) for managing dishes and reviewing orders
- Configurable tax rate via environment variables

---

## Tech Stack

- Runtime: Node.js (ESM)
- Server: Express
- Views: EJS
- Styling: Vanilla CSS
- Deployment: Vercel (Serverless)

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)

### Install & Run (Local)

```bash
npm install
npm run dev
```

Then open:

- http://localhost:3000

### Environment Variables

Create a `.env` file (see `.env example`):

- `PORT` (default: `3000`)
- `NODE_ENV` (set to `production` for serverless deployments)
- `TAX_RATE` (decimal, e.g. `0.15` for 15%)
- `ADMIN_SLUGS` (comma-separated list of allowed admin slugs, e.g. `admin,superadmin`)

---

## Admin Dashboard

Admin pages are accessible only when the `:slug` matches one of the values in `ADMIN_SLUGS`.

- Manage dishes: `/admin/dishes/:slug`
- View orders: `/admin/orders/:slug`

This is a lightweight access-control mechanism designed for demos/internal usage. For real production use, add proper authentication.

---

## API Endpoints

### Menu

- `GET /api/menu` — full menu JSON
- `GET /api/menu/:category` — menu items by category (`appetizers`, `mains`, `desserts`, `drinks`)

### Orders

- `POST /api/orders` — submit an order (`items`, `customerName`, `customerEmail`)

### Dishes (Admin UI uses these)

- `POST /api/dishes` — create a dish
- `PUT /api/dishes/:id` — update a dish (supports moving categories)
- `DELETE /api/dishes/:id` — delete a dish

### Admin Orders (JSON)

- `GET /api/admin/:slug/orders` — list all orders
- `GET /api/admin/:slug/orders/:id` — get a single order

---

## Data & Persistence Notes

- Menu data is loaded from `menuData.json` and written back when dishes are created/updated/deleted.
- Orders are stored in memory (`orders` array) and reset when the server restarts.
- On serverless platforms, filesystem writes and in-memory state may not persist across invocations. For a production system, move menu + orders to a database.

---

## Project Structure

```text
.
├── app.js                # Express app + routes (pages + JSON APIs)
├── menuManager.js        # Menu persistence helpers (load/save/getNextId)
├── menuData.json         # Persistent menu storage (runtime editable)
├── menuData.js           # Legacy/static menu export (not used by server)
├── package.json          # Dependencies and scripts
├── vercel.json           # Vercel Serverless configuration
├── public/
│   ├── images/
│   └── stylesheet/
│       └── styles.css
└── views/
    ├── index.ejs         # Customer menu + cart + checkout
    ├── dishes.ejs        # Admin: dish CRUD UI
    ├── orders.ejs        # Admin: orders dashboard UI
    └── partials/
        ├── header.ejs
        └── footer.ejs
```

---

## License

ISC
