import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { sales, salesId } from './sales';
import type { sales_products, sales_productsId } from './sales_products';

export interface productsAttributes {
  id: number;
  name: string;
  price: number;
  url_image: string;
}

export type productsPk = "id";
export type productsId = products[productsPk];
export type productsOptionalAttributes = "id";
export type productsCreationAttributes = Optional<productsAttributes, productsOptionalAttributes>;

export class products extends Model<productsAttributes, productsCreationAttributes> implements productsAttributes {
  id!: number;
  name!: string;
  price!: number;
  url_image!: string;

  // products belongsToMany sales via product_id and sale_id
  sale_id_sales!: sales[];
  getSale_id_sales!: Sequelize.BelongsToManyGetAssociationsMixin<sales>;
  setSale_id_sales!: Sequelize.BelongsToManySetAssociationsMixin<sales, salesId>;
  addSale_id_sale!: Sequelize.BelongsToManyAddAssociationMixin<sales, salesId>;
  addSale_id_sales!: Sequelize.BelongsToManyAddAssociationsMixin<sales, salesId>;
  createSale_id_sale!: Sequelize.BelongsToManyCreateAssociationMixin<sales>;
  removeSale_id_sale!: Sequelize.BelongsToManyRemoveAssociationMixin<sales, salesId>;
  removeSale_id_sales!: Sequelize.BelongsToManyRemoveAssociationsMixin<sales, salesId>;
  hasSale_id_sale!: Sequelize.BelongsToManyHasAssociationMixin<sales, salesId>;
  hasSale_id_sales!: Sequelize.BelongsToManyHasAssociationsMixin<sales, salesId>;
  countSale_id_sales!: Sequelize.BelongsToManyCountAssociationsMixin;
  // products hasMany sales_products via product_id
  sales_products!: sales_products[];
  getSales_products!: Sequelize.HasManyGetAssociationsMixin<sales_products>;
  setSales_products!: Sequelize.HasManySetAssociationsMixin<sales_products, sales_productsId>;
  addSales_product!: Sequelize.HasManyAddAssociationMixin<sales_products, sales_productsId>;
  addSales_products!: Sequelize.HasManyAddAssociationsMixin<sales_products, sales_productsId>;
  createSales_product!: Sequelize.HasManyCreateAssociationMixin<sales_products>;
  removeSales_product!: Sequelize.HasManyRemoveAssociationMixin<sales_products, sales_productsId>;
  removeSales_products!: Sequelize.HasManyRemoveAssociationsMixin<sales_products, sales_productsId>;
  hasSales_product!: Sequelize.HasManyHasAssociationMixin<sales_products, sales_productsId>;
  hasSales_products!: Sequelize.HasManyHasAssociationsMixin<sales_products, sales_productsId>;
  countSales_products!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof products {
    return products.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    url_image: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
