import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const ProductModel = sequelize.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo deve ser preenchido"
            },
            len: {
                args: [2, 20],
                msg: "Esse campo deve conter pelo menos 2 caracteres"
            }
        }
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo deve ser preenchido"
            }
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo deve ser preenchido"
            }
        }
    }
});