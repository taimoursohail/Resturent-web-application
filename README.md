# 🍽️ L'Éclat Gastronomy
### Premium Restaurant Menu & Ordering System

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)

A sophisticated full-stack restaurant application providing an elegant luxury dining experience. Built with **Express.js** and **EJS**, featuring a real-time ordering system and a dark-themed aesthetic with gold accents.

---

## ✨ Key Features

### 💎 Frontend Experience
* **Luxury Design**: Responsive dark theme optimized for all devices.
* **Smart Shopping Cart**: Persistent storage using `localStorage` (your items stay even if you refresh).
* **Interactive UI**: Smooth animations, real-time total calculations (including tax), and hover effects.
* **Seamless Checkout**: Integrated customer data collection for order processing.

### ⚙️ Backend Power
* **Dynamic Routing**: RESTful API for menu retrieval and order submission.
* **Menu Management**: Centralized data structure categorized by Appetizers, Mains, Desserts, and Drinks.
* **Admin Dashboard**: Dedicated interface to view and manage incoming orders in real-time.

---

## 📂 Project Structure

```text
.
├── app.js                # Main Express application
├── menuData.js           # Menu items database (JSON/Object)
├── package.json          # Dependencies & Scripts
├── public/               # Static Assets
│   ├── images/           # UI Icons & Food Images
│   ├── javaScript/       # Client-side Cart Logic
│   └── stylesheet/       # Custom CSS (Luxury Theme)
└── views/                # EJS Templates
    ├── index.ejs         # Customer Menu Page
    ├── admin.ejs         # Order Management Dashboard
    └── partials/         # Reusable Header/Footer
