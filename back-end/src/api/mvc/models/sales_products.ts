import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { products, productsId } from './products';
import type { sales, salesId } from './sales';

export interface sales_productsAttributes {
  sale_id: number;
  product_id: number;
  quantity: number;
}

export type sales_productsPk = "sale_id" | "product_id";
export type sales_productsId = sales_products[sales_productsPk];
export type sales_productsCreationAttributes = sales_productsAttributes;

export class sales_products extends Model<sales_productsAttributes, sales_productsCreationAttributes> implements sales_productsAttributes {
  sale_id!: number;
  product_id!: number;
  quantity!: number;

  // sales_products belongsTo products via product_id
  product!: products;
  getProduct!: Sequelize.BelongsToGetAssociationMixin<products>;
  setProduct!: Sequelize.BelongsToSetAssociationMixin<products, productsId>;
  createProduct!: Sequelize.BelongsToCreateAssociationMixin<products>;
  // sales_products belongsTo sales via sale_id
  sale!: sales;
  getSale!: Sequelize.BelongsToGetAssociationMixin<sales>;
  setSale!: Sequelize.BelongsToSetAssociationMixin<sales, salesId>;
  createSale!: Sequelize.BelongsToCreateAssociationMixin<sales>;

  static initModel(sequelize: Sequelize.Sequelize): typeof sales_products {
    return sales_products.init({
    sale_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sales',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sales_products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sale_id" },
          { name: "product_id" },
        ]
      },
      {
        name: "product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
  }
}
