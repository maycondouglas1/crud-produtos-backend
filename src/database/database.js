import { Sequelize } from 'sequelize';

// Setting database connection
export const sequelize = new Sequelize(
    process.env.DATABASE_NAME || 'productsdb',
    process.env.DATABASE_USER || 'postgres',
    process.env.DATABASE_PASS || '39362264lhp', {
        host: process.env.DATABASE_HOST || 'localhost',
        dialect: 'postgres',
        port: process.env.DATABASE_PORT || 5432,
    }
);