import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataFile = path.join(__dirname, "menuData.json");

// Initialize default menu data if file doesn't exist
const defaultMenu = {
  appetizers: [
    {
      id: 1,
      name: "Truffle Beef Carpaccio",
      price: 28,
      description:
        "Thinly sliced Wagyu beef, shaved black summer truffles, caper berries, and 24-month aged Parmigiano Reggiano.",
      image: "https://placehold.co/400x300/1a1a1a/c5a059?text=Beef+Carpaccio",
    },
    {
      id: 2,
      name: "Heirloom Burrata",
      price: 24,
      description:
        "Creamy Puglian burrata, heirloom tomatoes, basil chlorophyll, balsamic pearls, and toasted pine nuts.",
      image: "https://placehold.co/400x300/1a1a1a/c5a059?text=Burrata",
    },
    {
      id: 3,
      name: "Hokkaido Scallop Crudo",
      price: 32,
      description:
        "Premium diver scallops, yuzu foam, micro shiso, and jalapeño ponzu.",
      image: "https://placehold.co/400x300/1a1a1a/c5a059?text=Scallop+Crudo",
    },
    {
      id: 4,
      name: "Crispy Foie Gras",
      price: 26,
      description:
        "Pan-seared duck liver, fig gastrique, brioche toast, and black garlic.",
      image: "https://placehold.co/400x300/1a1a1a/c5a059?text=Foie+Gras",
    },
  ],
  mains: [
    {
      id: 5,
      name: "Pan-Seared Wagyu Striploin",
      price: 68,
      description:
        "A5 Japanese Wagyu, wagyu butter, roasted bone marrow, and seasonal vegetables.",
      image: "https://placehold.co/400x300/1a1a1a/c5a059?text=Wagyu+Steak",
    },
    {
      id: 6,
      name: "Dover Sole Meunière",
      price: 52,
      description:
        "Whole Dover sole, brown butter sauce, capers, and organic almonds.",
      image: "https://placehold.co/400x300/1a1a1a/c5a059?text=Dover+Sole",
    },
    {
      id: 7,
      name: "Truffle Risotto",
      price: 38,
      description:
        "Arborio rice, wild mushrooms, shaved black truffle, and Parmigiano Reggiano.",
      image: "https://placehold.co/400x300/1a1a1a/c5a059?text=Truffle+Risotto",
    },
    {
      id: 8,
      name: "Roasted Duck Breast",
      price: 45,
      description:
        "Mulard duck breast, cherry gastrique, parsnip purée, and micro herbs.",
      image: "https://placehold.co/400x300/1a1a1a/c5a059?text=Duck+Breast",
    },
    {
      id: 9,
      name: "Lobster Thermidor",
      price: 58,
      description:
        "Canadian lobster, cognac cream sauce, and Gruyère cheese gratine.",
      image: "https://placehold.co/400x300/1a1a1a/c5a059?text=Lobster",
    },
  ],
  desserts: [
    {
      id: 10,
      name: "Chocolate Soufflé",
      price: 16,
      description:
        "Dark chocolate soufflé with Grand Marnier, gold leaf, and crème anglaise.",
      image:
        "https://placehold.co/400x300/1a1a1a/c5a059?text=Chocolate+Souffle",
    },
    {
      id: 11,
      name: "Vanilla Panna Cotta",
      price: 14,
      description:
        "Silky vanilla panna cotta, fresh berries, and raspberry coulis.",
      image: "https://placehold.co/400x300/1a1a1a/c5a059?text=Panna+Cotta",
    },
    {
      id: 12,
      name: "Pistachio Financier",
      price: 12,
      description:
        "Delicate pistachio financier, pistachio cream, and crushed pistachio.",
      image: "https://placehold.co/400x300/1a1a1a/c5a059?text=Pistachio",
    },
    {
      id: 13,
      name: "Fruit Tart Noire",
      price: 18,
      description: "Dark chocolate tart, seasonal fruits, and champagne jelly.",
      image: "https://placehold.co/400x300/1a1a1a/c5a059?text=Fruit+Tart",
    },
  ],
  drinks: [
    {
      id: 14,
      name: "Vintage Champagne",
      price: 45,
      description: "Krug Clos d'Ambonnay, vintage 2012.",
      image: "https://placehold.co/400x300/1a1a1a/c5a059?text=Champagne",
    },
    {
      id: 15,
      name: "Premium Red Wine",
      price: 55,
      description: "Château Mouton Rothschild 1990, Bordeaux.",
      image: "https://placehold.co/400x300/1a1a1a/c5a059?text=Red+Wine",
    },
    {
      id: 16,
      name: "Espresso Martini",
      price: 18,
      description:
        "Premium vodka, coffee liqueur, fresh espresso, and cocoa dust.",
      image: "https://placehold.co/400x300/1a1a1a/c5a059?text=Martini",
    },
    {
      id: 17,
      name: "Signature Cocktail",
      price: 22,
      description:
        "Bespoke creation with top-shelf spirits and fresh ingredients.",
      image: "https://placehold.co/400x300/1a1a1a/c5a059?text=Cocktail",
    },
    {
      id: 18,
      name: "Still Water",
      price: 2,
      description: "Premium bottled water.",
      image: "https://placehold.co/400x300/1a1a1a/c5a059?text=Water",
    },
  ],
};

// Load or initialize menu data
export function loadMenuData() {
  try {
    if (fs.existsSync(dataFile)) {
      const data = fs.readFileSync(dataFile, "utf8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error loading menu data:", error);
  }
  return defaultMenu;
}

// Save menu data to file
export function saveMenuData(data) {
  try {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error("Error saving menu data:", error);
    return false;
  }
}

// Get next ID
export function getNextId(menuData) {
  let maxId = 0;
  Object.values(menuData).forEach((categoryItems) => {
    categoryItems.forEach((item) => {
      if (item.id > maxId) maxId = item.id;
    });
  });
  return maxId + 1;
}
