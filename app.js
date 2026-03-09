import express from "express";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import { loadMenuData, saveMenuData, getNextId } from "./menuManager.js";

const app = express();
const port = 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load initial menu data
let menuData = loadMenuData();

//Middlewear
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//In-memory order storage
let orders = [];

//REQ RESPONSE Cycle - Pages

app.get("/", (req, res) => {
  res.render("index.ejs", {
    footerYear: new Date().getFullYear(),
    menuData: menuData,
  });
});

app.all("/admin", (req, res) => {
  res.redirect("/admin/orders");
});

app.all("/test", (req, res) => {
  res.send("TEST ROUTE");
});

app.get("/admin/orders", (req, res) => {
  res.render("orders.ejs", {
    footerYear: new Date().getFullYear(),
    orders: orders,
  });
});

app.get("/admin/dishes", (req, res) => {
  res.render("dishes.ejs", {
    footerYear: new Date().getFullYear(),
    menuData: menuData,
  });
});

//API Routes for menu data retrieval

app.get("/api/menu", (req, res) => {
  res.json(menuData);
});

app.get("/api/menu/:category", (req, res) => {
  const category = req.params.category;
  if (menuData[category]) {
    res.json(menuData[category]);
  } else {
    res.status(404).json({ error: "Category not found" });
  }
});

// API Routes for dish management (CRUD)

app.post("/api/dishes", (req, res) => {
  const { name, price, description, category, image } = req.body;

  if (!name || !price || !description || !category) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (!menuData[category]) {
    return res.status(400).json({ error: "Invalid category" });
  }

  const newDish = {
    id: getNextId(menuData),
    name: name,
    price: parseFloat(price),
    description: description,
    image:
      image ||
      `https://placehold.co/400x300/1a1a1a/c5a059?text=${encodeURIComponent(
        name
      )}`,
  };

  menuData[category].push(newDish);
  saveMenuData(menuData);

  res.json({ success: true, dish: newDish });
});

app.put("/api/dishes/:id", (req, res) => {
  const dishId = parseInt(req.params.id);
  const { name, price, description, category, image } = req.body;

  let found = false;
  for (const cat in menuData) {
    const itemIndex = menuData[cat].findIndex((item) => item.id === dishId);
    if (itemIndex !== -1) {
      if (category && category !== cat) {
        // Moving to different category
        const movedDish = menuData[cat][itemIndex];
        menuData[cat].splice(itemIndex, 1);
        if (!menuData[category]) {
          return res.status(400).json({ error: "Invalid category" });
        }
        const updatedDish = {
          id: dishId,
          name: name || movedDish.name,
          price: parseFloat(price) || movedDish.price,
          description: description || movedDish.description,
          image: image || movedDish.image,
        };
        menuData[category].push(updatedDish);
      } else {
        // Update in same category
        if (name) menuData[cat][itemIndex].name = name;
        if (price) menuData[cat][itemIndex].price = parseFloat(price);
        if (description) menuData[cat][itemIndex].description = description;
        if (image) menuData[cat][itemIndex].image = image;
      }
      found = true;
      break;
    }
  }

  if (!found) {
    return res.status(404).json({ error: "Dish not found" });
  }

  saveMenuData(menuData);
  res.json({ success: true, message: "Dish updated" });
});

app.delete("/api/dishes/:id", (req, res) => {
  const dishId = parseInt(req.params.id);
  let found = false;

  for (const category in menuData) {
    const itemIndex = menuData[category].findIndex(
      (item) => item.id === dishId
    );
    if (itemIndex !== -1) {
      menuData[category].splice(itemIndex, 1);
      found = true;
      break;
    }
  }

  if (!found) {
    return res.status(404).json({ error: "Dish not found" });
  }

  saveMenuData(menuData);
  res.json({ success: true, message: "Dish deleted" });
});

// Order routes
app.post("/api/orders", (req, res) => {
  const { items, customerName, customerEmail } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ error: "No items in order" });
  }

  const order = {
    id: orders.length + 1,
    items: items,
    customerName: customerName || "Guest",
    customerEmail: customerEmail || "",
    timestamp: new Date(),
    status: "pending",
  };

  orders.push(order);
  res.json({ success: true, orderId: order.id, message: "Order received!" });
});

app.get("/api/orders", (req, res) => {
  res.json(orders);
});

app.get("/api/orders/:id", (req, res) => {
  const order = orders.find((o) => o.id === parseInt(req.params.id));
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ error: "Order not found" });
  }
});

//PORT OUTPUT
if (process.env.NODE_ENV !== "production") {
  const port = 3000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
}

module.exports = app;
