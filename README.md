# 🛒 Product Store Application

A full-stack e-commerce product management application built with React and Node.js/Express. Features product CRUD operations, Chakra UI for a polished interface, and MongoDB for persistent storage.

## 📋 Project Overview

This is a modern e-commerce application that allows users to view, create, update, and delete products. It's built as a monorepo with a React frontend and Node.js/Express backend, showcasing a complete full-stack development workflow.

### Key Features
- **Product Management**: Complete CRUD operations (Create, Read, Update, Delete)
- **Responsive Design**: Beautiful UI with Chakra UI components
- **Dark/Light Mode**: Theme switching capability
- **State Management**: Client-side state with Zustand
- **RESTful API**: Clean REST API design
- **MongoDB Integration**: Document-based product storage
- **Production Ready**: Optimized build and deployment setup

---

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js with ES modules
- **Framework**: Express.js 5.2
- **Database**: MongoDB with Mongoose ODM
- **Environment**: Dotenv for configuration
- **Cross-Platform**: cross-env for NODE_ENV management
- **Development**: Nodemon for auto-reload
- **Server Monitoring**: Built-in environment-based configuration

### Frontend
- **UI Library**: React 19.2
- **Build Tool**: Vite 7.2
- **Routing**: React Router DOM 7.11
- **State Management**: Zustand 5.0
- **UI Framework**: 
  - Chakra UI 2.10 (component library)
  - Emotion (CSS-in-JS for Chakra UI)
  - Framer Motion (animations)
- **Icons**: React Icons 5.5
- **Styling**: 
  - @emotion/react & @emotion/styled
  - Chakra UI's built-in theming system

---

## 📁 Project Structure

\`\`\`
product_store_application/
├── backend/
│   ├── server.js                    # Express app setup and startup
│   ├── config/
│   │   └── db.js                    # MongoDB connection configuration
│   ├── controllers/
│   │   └── product.controller.js    # Product CRUD logic
│   ├── models/
│   │   └── product.model.js         # Product schema definition
│   ├── routes/
│   │   └── product.route.js         # API routes and endpoints
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── main.jsx                 # React entry point
│   │   ├── App.jsx                  # Root component with routing and layout
│   │   ├── components/
│   │   │   ├── Navbar.jsx           # Top navigation bar
│   │   │   └── ProductCard.jsx      # Reusable product card component
│   │   ├── pages/
│   │   │   ├── HomePage.jsx         # Product listing and display
│   │   │   └── CreatePage.jsx       # Create new product form
│   │   ├── store/
│   │   │   └── product.js           # Zustand store for product state
│   │   └── public/                  # Static assets
│   ├── vite.config.js               # Vite configuration
│   ├── eslint.config.js             # ESLint configuration
│   └── package.json
│
└── package.json                      # Root monorepo configuration
\`\`\`

---

## 🔄 How the App Works

### Data Flow Architecture

#### Frontend Data Flow
1. **App Load**: HomePage component mounts
   - Zustand store's \`fetchProducts()\` is called
   - Fetch request sent to \`/api/products\`
   - Products displayed in grid layout

2. **Create Product**:
   - User navigates to CreatePage
   - Fills in product details (name, price, image)
   - Submits form
   - Store's \`createProduct()\` makes POST request
   - New product added to local state
   - User redirected to HomePage

3. **Update Product**:
   - User clicks edit on product card
   - CreatePage loads with product data
   - User modifies fields
   - Store's \`updateProduct()\` makes PUT request
   - Local state updated optimistically
   - UI re-renders with new data

4. **Delete Product**:
   - User clicks delete on product card
   - Modal confirmation (handled by Chakra UI)
   - Store's \`deleteProduct()\` makes DELETE request
   - Product removed from local state immediately
   - Card disappears from UI

#### Backend API Flow
1. **Product Model**: Defines schema (name, price, image, colors, etc.)
2. **Controllers**: Handles business logic for CRUD operations
3. **Routes**: Maps HTTP methods to controller functions
4. **Server**: Expresses handles requests and responses
5. **Database**: MongoDB stores and retrieves product documents

---

## 🏗️ Component Architecture

### Pages

#### **HomePage.jsx**
- Displays all products in a responsive grid
- Implements Chakra UI Grid component
- Shows ProductCard for each item
- Integrates with Zustand store to fetch products on mount
- Handles empty state gracefully

#### **CreatePage.jsx**
- Form for creating and editing products
- Uses Chakra UI Form components (Input, Textarea, etc.)
- Image preview functionality
- Form validation
- Two modes: Create (POST) and Edit (PUT)

### Components

#### **Navbar.jsx**
- Navigation header with app title/logo
- Theme toggle button (light/dark mode)
- Create product button linking to CreatePage
- Responsive design for mobile

#### **ProductCard.jsx**
- Individual product display card
- Shows product image, name, price
- Edit and delete buttons
- Hover effects with Framer Motion
- Color/category display
- Flexible for both list and grid layouts

### Store

#### **product.js (Zustand)**
State management for products:
\`\`\`javascript
{
  products: [],              // Array of product objects
  setProducts: (products),   // Set products from API
  createProduct: async(),    // POST new product
  fetchProducts: async(),    // GET all products
  deleteProduct: async(),    // DELETE by ID
  updateProduct: async()     // PUT to update
}
\`\`\`

---

## 📊 Product Model

\`\`\`javascript
{
  _id: ObjectId,
  name: String (required),
  price: Number (required),
  image: String (required),
  colors: [String],        // Optional array of colors
  category: String,        // Optional category
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
\`\`\`

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB (local or MongoDB Atlas cloud)
- NPM or Yarn

### Setup Instructions

#### 1. Clone and Install Dependencies
\`\`\`bash
cd product_store_application
npm run build
\`\`\`
This installs dependencies for both backend and frontend.

#### 2. Configure Environment Variables

Create \`.env\` file in the root directory:
\`\`\`env
# Server Configuration
PORT=5001
NODE_ENV=development

# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/product-store
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/product-store
\`\`\`

#### 3. Start Development Server

From the root directory:
\`\`\`bash
npm run dev
\`\`\`

This starts the backend server with nodemon on \`http://localhost:5001\`

**Or separately:**

Backend (from root):
\`\`\`bash
cross-env NODE_ENV=development nodemon backend/server.js
\`\`\`

Frontend (from \`frontend/\` directory):
\`\`\`bash
npm run dev
\`\`\`
Runs on \`http://localhost:5173\`

#### 4. Build for Production
\`\`\`bash
npm run build
\`\`\`

Creates optimized production build with frontend bundled in \`frontend/dist\`

#### 5. Run in Production
\`\`\`bash
npm run start
\`\`\`

Runs server in production mode with \`NODE_ENV=production\`

---

## 📡 API Endpoints

### Base URL: \`/api/products\`

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | \`/\` | Get all products | - |
| POST | \`/\` | Create new product | \`{name, price, image}\` |
| GET | \`/:id\` | Get single product | - |
| PUT | \`/:id\` | Update product | \`{name, price, image}\` |
| DELETE | \`/:id\` | Delete product | - |

### Response Format
All endpoints return JSON with this structure:
\`\`\`json
{
  "success": true/false,
  "message": "Operation message",
  "data": {} // Product object or array
}
\`\`\`

---

## 🎯 Key Architecture Decisions

### Why Chakra UI?
- Accessible component library with built-in a11y
- Powerful theming system for light/dark modes
- Framer Motion integration for smooth animations
- TypeScript support (extensible to typed version)
- Emotion-based styling (CSS-in-JS)

### Why Zustand?
- Minimal boilerplate compared to Redux
- Easy to learn and use
- Direct state manipulation without actions
- Perfect for product CRUD state
- Efficient rendering with selective re-renders

### Monorepo Structure Benefits
1. **Single build command** - Easy deployment
2. **Shared scripts** - Consistent development workflow
3. **Co-location** - Frontend and backend together
4. **Express serves React** - SPA served from backend in production

### API Design
- RESTful principles for intuitive endpoints
- Standard HTTP methods (GET, POST, PUT, DELETE)
- Consistent JSON response format
- Error messages included in responses

---

## 🎨 UI/UX Features

### Chakra UI Integration
- Pre-built components: Box, Button, Input, Modal, Grid, Flex, etc.
- Responsive design built-in
- Color system for consistent theming
- Responsive spacing and sizing

### Theme System
- Light and Dark modes
- Toggle in Navbar
- Theme persists across components
- Automatic color adjustments

### Animations
- Framer Motion for smooth transitions
- Hover effects on cards
- Page transitions
- Button interactions

### Responsive Design
- Mobile-first approach
- Chakra UI's responsive utilities
- Flexible grid layout
- Touch-friendly interfaces

---

## 🧪 Development Workflow

### Available Scripts

**Root**:
- \`npm run dev\` - Start backend with nodemon
- \`npm run build\` - Install deps and build frontend
- \`npm run start\` - Run production server

**Frontend**:
- \`npm run dev\` - Start Vite dev server with HMR
- \`npm run build\` - Create optimized production build
- \`npm run lint\` - Run ESLint
- \`npm run preview\` - Preview production build locally

---

## 🚢 Deployment

### Production Setup
1. Set \`NODE_ENV=production\`
2. Configure \`MONGODB_URI\` for production database
3. Run \`npm run build\` to bundle frontend
4. Run \`npm run start\` to start server

### How It Works in Production
1. Frontend build generated in \`frontend/dist\`
2. Express serves static files from dist folder
3. All requests to \`/api/*\` handled by backend routes
4. All other requests served \`index.html\` (SPA fallback)
5. React Router handles client-side routing

### Example Deployment to Heroku/Railway/Render
\`\`\`bash
# Set buildpack to Node.js
# Set environment variables via dashboard
# Deploy via git push or CLI
\`\`\`

---

## 🔒 Data Persistence

- **MongoDB Atlas** for cloud database
- **Mongoose** handles data validation and relationships
- **Automatic timestamps** (createdAt, updatedAt) on all documents
- Proper error handling and status codes

---

## 💡 Learning Outcomes

This project demonstrates:
- Full-stack MERN/MEVN development
- REST API design and implementation
- Component-based React architecture
- State management with Zustand
- Modern styling with Chakra UI
- Database operations (Create, Read, Update, Delete)
- Environment-based configuration
- Production-ready application structure
- Responsive design principles

---

## 🐛 Common Issues & Solutions

### Port Already in Use
\`\`\`bash
# Kill process on port 5001
lsof -ti:5001 | xargs kill -9
\`\`\`

### MongoDB Connection Fails
- Verify MONGODB_URI in .env
- Check MongoDB service is running
- For MongoDB Atlas, whitelist your IP

### Frontend Build Fails
\`\`\`bash
# Clear cache and reinstall
rm -rf frontend/node_modules frontend/package-lock.json
npm install --prefix frontend
\`\`\`

---

## 📚 File Dependencies

Key module relationships:
- \`App.jsx\` → imports Navbar, pages (HomePage, CreatePage)
- \`HomePage.jsx\` → imports ProductCard, uses Zustand store
- \`CreatePage.jsx\` → imports Chakra UI, uses Zustand store
- \`product.js\` (Zustand) → manages all API calls and state

---

## 🤝 Contributing

This is a personal learning project. Feel free to explore and modify!

---

## 📄 License

ISC License
