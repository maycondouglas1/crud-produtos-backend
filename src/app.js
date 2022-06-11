import express from 'express';
import productsRoutes from './routes/products.routes.js';

const app = express();
const json = express.json();

app.use(json);
app.use(productsRoutes);

export default app;