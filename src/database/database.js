import { Sequelize } from 'sequelize';

// Setting database connection
export const sequelize = new Sequelize(
    'productsdb',
    'postgres',
    '39362264lhp', {
        host: process.env.DATABASE_HOST,
        dialect: 'postgres',
        port: process.env.DATABASE_PORT,
    }
);