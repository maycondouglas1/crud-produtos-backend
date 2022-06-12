import express from 'express';
import productsRoutes from './routes/products.routes.js';
import cors from './cors.js';

const app = express();
const json = express.json();

app.use(json);
app.use(cors);
app.use(productsRoutes);

export default app;