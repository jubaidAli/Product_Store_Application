# Product Store Application (MERN Stack)

My second full‑stack application for a product shop, built with the MERN stack (MongoDB, Express, React, Node.js). ([github.com](https://github.com/jubaidAli/Product_Store_Application))

> Repository: `https://github.com/jubaidAli/Product_Store_Application`

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [API Overview (Backend)](#api-overview-backend)
- [Available Scripts](#available-scripts)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Overview

The **Product Store Application** is a MERN-based web app that demonstrates a simple e‑commerce flow for a product shop. It is structured as a Node/Express backend (with MongoDB for persistence) and a React frontend that consumes the backend APIs.

Use this project to:

- Practice full‑stack development with the MERN stack  
- Learn how to structure a small monorepo with `backend` and `frontend` folders  
- Experiment with product listing, cart logic, and basic CRUD operations

---

## Tech Stack

**Frontend**

- React
- JavaScript, HTML, CSS

**Backend**

- Node.js
- Express
- MongoDB (via Mongoose or native driver)

**Tooling**

- npm for dependency management
- Git/GitHub for version control ([github.com](https://github.com/jubaidAli/Product_Store_Application))

---

## Features

Adjust this list to match what you’ve implemented:

- Browse a list of products
- View product details
- Add products to a cart
- Update/remove items from the cart
- (Optional) User authentication (sign up / login)
- (Optional) Admin CRUD for products (create, update, delete)
- Basic REST API to manage products and orders

---

## Project Structure

At the root of the repository: ([github.com](https://github.com/jubaidAli/Product_Store_Application))

```txt path=null start=null
Product_Store_Application/
  backend/        # Node/Express backend (APIs, DB models, controllers)
  frontend/       # React frontend (pages, components, hooks)
  package.json    # Root package file (optionally used for scripts/workspaces)
  package-lock.json
  .gitignore
