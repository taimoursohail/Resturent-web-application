# L'Éclat Gastronomy
## Premium Restaurant Menu and Ordering System

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](https://opensource.org/licenses/ISC)

L'Éclat Gastronomy is a full-stack web application designed for luxury dining establishments. Built with Node.js, Express.js, and EJS, the platform provides a seamless digital menu experience and a robust backend ordering system.

**Live Demo:** [https://restaurant-app-eta-three.vercel.app/](https://restaurant-app-eta-three.vercel.app/)

---

## Technical Features

### Client-Side Architecture
* **Responsive UI**: A high-contrast dark theme with gold accents, optimized for mobile, tablet, and desktop viewing.
* **Persistent State Management**: Implementation of `localStorage` ensures shopping cart data persists across browser refreshes.
* **Dynamic Computations**: Real-time logic for tax calculation (15%) and order totals.
* **User Interface**: Smooth CSS transitions and asynchronous UI updates for an enhanced user experience.

### Server-Side Architecture
* **RESTful API**: Endpoints developed for dynamic menu retrieval and secure order submission.
* **Stateful Order Management**: In-memory server-side storage for tracking active customer orders.
* **Template Engine**: Server-side rendering utilized via EJS for dynamic content delivery.
* **Admin Dashboard**: A secure internal interface for real-time monitoring of customer data and order history.

---

## Project Structure

```text
.
├── app.js                # Primary Express server and middleware configuration
├── menuData.js           # Centralized data model for menu items
├── package.json          # Dependency management and project scripts
├── vercel.json           # Deployment configuration for Vercel Serverless Functions
├── public/               # Static assets directory
│   ├── images/           # High-resolution UI and product assets
│   ├── javaScript/       # Client-side business logic and cart management
│   └── stylesheet/       # Core CSS architecture
└── views/                # Server-side templates (EJS)
    ├── index.ejs         # Primary storefront/menu view
    ├── admin.ejs         # Administrative order management view
    └── partials/         # Modular template components (Header/Footer)
