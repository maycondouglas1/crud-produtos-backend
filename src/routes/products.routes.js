import { Router } from 'express';
import ProductController from '../controllers/products.controller.js';

const router = Router();

// Default route
router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/products', ProductController.findAll);
router.post('/products', ProductController.create);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.destroy);
router.get('/products/:id', ProductController.findOne);

export default router;