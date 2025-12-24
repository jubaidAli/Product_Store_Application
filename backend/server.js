import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept JSON data in request body

app.use("/api/products", productRoutes);

app.listen(process.env.PORT, () => {

  connectDB();

  console.log(`Server is running on port ${process.env.PORT} Hello World!`);
});
