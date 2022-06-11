import { ProductModel } from '../models/ProductModel.js';

class ProductController {
    // Read
    async findAll(req, res) {
        try {
            const products = await ProductModel.findAll();
            res.json(products);
        } catch (error) {
            return res.status(500).send(`Ops! ${error.message}`);
        }
    };

    // Read project by specific id
    async findOne(req, res) {
        try {
            const { id } = req.params;
            const product = await ProductModel.findOne({
                where: {
                    id,
                }
            });

            if (!product) {
                return res.status(404).send('Esse produto não existe!');
            }

            res.status(200).json(product);
        } catch (error) {
            res.status(404).send(`Ops! ${error.message}`);
        }
    }

    // Create product
    async create(req, res) {
        const { name, price, stock } = req.body;

        try {
            const product = await ProductModel.create({
                name,
                price,
                stock,
            });

            res.json(product);
        } catch (error) {
            res.status(404).send(`Ops! ${error.message}`);
        }

    };

    // Update Product
    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, price, stock } = req.body;

            const product = await ProductModel.update({
                name,
                price,
                stock,
            }, {
                where: { id }
            });

            res.json(product);
        } catch (error) {
            res.status(404).send(`Ops! ${error.message}`);
        }

    };

    // Delete Product
    async destroy(req, res) {
        try {
            const { id } = req.params;
            await ProductModel.destroy({
                where: {
                    id,
                }
            });
            res.send('Deletado com sucesso!');
        } catch (error) {
            res.status(500).send(`Ops! ${error.message}`);
        }
    };

}

export default new ProductController();



