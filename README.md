# L'Éclat Gastronomy - Restaurant Menu System

A fully functional full-stack restaurant menu application built with Express.js and EJS. This application provides an elegant luxury dining experience with a complete ordering system.

## Features

### Frontend

- **Responsive Design**: Elegant dark theme with gold accents
- **Dynamic Menu Display**: All menu items displayed dynamically from backend data
- **Shopping Cart**: Add items to cart with persistent storage using localStorage
- **Real-time Cart Updates**: See cart count and totals update instantly
- **Checkout Process**: Customer information collection for orders
- **Smooth Animations**: Hover effects and transitions for enhanced UX

### Backend

- **Express.js Server**: Fast and reliable server handling all requests
- **Menu Management**: Centralized menu data with categories (Appetizers, Mains, Desserts, Drinks)
- **Order Management**: Store and manage customer orders in memory
- **RESTful API**: Complete API for menu retrieval and order submission
- **Admin Dashboard**: View all received orders with details

### Menu Categories

#### Appetizers (4 items)

- Truffle Beef Carpaccio - $28
- Heirloom Burrata - $24
- Hokkaido Scallop Crudo - $32
- Crispy Foie Gras - $26

#### Main Courses (5 items)

- Pan-Seared Wagyu Striploin - $68
- Dover Sole Meunière - $52
- Truffle Risotto - $38
- Roasted Duck Breast - $45
- Lobster Thermidor - $58

#### Desserts (4 items)

- Chocolate Soufflé - $16
- Vanilla Panna Cotta - $14
- Pistachio Financier - $12
- Fruit Tart Noire - $18

#### Drinks (5 items)

- Vintage Champagne - $45
- Premium Red Wine - $55
- Espresso Martini - $18
- Signature Cocktail - $22
- Still Water - $2

## Project Structure

```
Restruent Menu/
├── app.js                    # Main Express application
├── menuData.js              # Menu items data
├── package.json             # Project dependencies
├── public/
│   ├── images/              # Image assets
│   ├── javaScript/          # Client-side scripts
│   └── stylesheet/
│       └── styles.css       # Main stylesheet
└── views/
    ├── index.ejs            # Main menu page with cart
    ├── admin.ejs            # Admin orders dashboard
    └── partials/
        ├── header.ejs       # Page header with meta tags
        └── footer.ejs       # Page footer
```

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation Steps

1. **Navigate to project directory**

```bash
cd "t:\Learning Skills\Full-Stack Web Developer\My Projects\Restruent Menu"
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the server**

```bash
npm start
```

or

```bash
node app.js
```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## Usage

### For Customers

1. **Browse Menu**: Scroll through different menu categories
2. **Add Items**: Click "Add to Order" button on any menu item
3. **View Cart**: Click the shopping cart icon (🛒) in navigation
4. **Modify Order**:
   - Change quantity with number input
   - Remove items with "Remove" button
5. **Checkout**:
   - Enter your name and email
   - Click "Place Order"
   - Receive order confirmation with Order ID

### For Admin

1. **Access Admin Panel**: Navigate to `http://localhost:3000/admin`
2. **View Orders**: See all received orders with complete details:
   - Order number and status
   - Customer information
   - Ordered items and quantities
   - Itemized pricing and totals

## API Endpoints

### Menu Endpoints

**Get all menu data**

```
GET /api/menu
```

Returns all menu categories with items.

**Get menu by category**

```
GET /api/menu/:category
```

Parameters:

- `category`: appetizers | mains | desserts | drinks

### Order Endpoints

**Create new order**

```
POST /api/orders
Content-Type: application/json

{
  "items": [
    { "id": 1, "name": "Truffle Beef Carpaccio", "price": 28, "quantity": 1 }
  ],
  "customerName": "John Doe",
  "customerEmail": "john@example.com"
}
```

**Get all orders**

```
GET /api/orders
```

**Get specific order**

```
GET /api/orders/:id
```

Parameters:

- `id`: Order ID number

## Technologies Used

### Backend

- **Express.js** - Web server framework
- **EJS** - Template engine for server-side rendering

### Frontend

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox/grid
- **JavaScript** - Client-side interactivity
- **localStorage** - Persistent cart storage

### Fonts

- **Playfair Display** - Elegant serif font for headings
- **Montserrat** - Clean sans-serif font for body text

## Features in Detail

### Shopping Cart

- **Client-side Storage**: Cart persists across page refreshes using localStorage
- **Real-time Calculations**: Automatic tax (15%) and total calculations
- **Quantity Management**: Easily adjust item quantities
- **Item Removal**: Remove items from order before checkout

### Styling

- **Dark Theme**: Professional dark background (#0a0a0a) with gold accents (#c5a059)
- **Responsive**: Adapts gracefully to mobile and tablet screens
- **Animations**: Smooth transitions and hover effects throughout
- **Modal Design**: Clean overlay cart system

### Order Processing

- **Validation**: Ensures cart has items before checkout
- **Confirmation**: Shows order ID upon successful submission
- **Data Persistence**: Orders stored in server memory (for demo)

## Future Enhancements

Potential features for expansion:

- Database integration (MongoDB, PostgreSQL)
- User authentication and profiles
- Order history for registered users
- Payment gateway integration
- Email confirmation system
- Kitchen display system (KDS)
- Reservation system
- Menu customization (dietary restrictions)
- Image uploads
- Real-time order status updates

## Performance Notes

- **Image Optimization**: Uses placeholder images from placehold.co
- **Lazy Loading**: Images load on demand
- **Caching**: CSS is cached by browser
- **Minification**: Static assets can be minified for production

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Testing

### Test the Application

1. **Menu Display**: Verify all menu items appear correctly
2. **Add to Cart**: Test adding various items
3. **Cart Operations**:
   - Verify quantity changes
   - Test item removal
   - Check totals calculation
4. **Checkout**: Complete an order with test data
5. **Admin Panel**: Verify order appears in admin dashboard
6. **API**: Test endpoints using Postman or curl:
   ```bash
   curl http://localhost:3000/api/menu
   ```

## Troubleshooting

### Port Already in Use

If port 3000 is in use, modify in app.js:

```javascript
const port = 3001; // Change to another port
```

### CSS Not Loading

Ensure static middleware is properly configured in app.js:

```javascript
app.use(express.static(path.join(__dirname, "public")));
```

### Images Not Displaying

Check image paths in menuData.js or verify external image URLs are accessible.

## Development Notes

- Server uses ES6 modules (import/export)
- EJS templates support both static and dynamic content
- Orders are stored in memory (not persistent across server restarts)
- Cart data persists on client using localStorage

## License

ISC

## Author

Bin Sohail

## Restaurant Information

**Location**: Ample Business Club, Jinnah Avenue, Commercial Bahria Town Karachi, Karachi

**Contact**: +92 (555) 888-GOLD

**Website**: L'Éclat Gastronomy

---

**Application Status**: ✅ Fully Functional

Last Updated: March 8, 2026
