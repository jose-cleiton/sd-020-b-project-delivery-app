import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { products, productsId } from './products';
import type { sales_products, sales_productsId } from './sales_products';
import type { users, usersId } from './users';

export interface salesAttributes {
  id: number;
  user_id: number;
  seller_id: number;
  total_price: number;
  delivery_address: string;
  delivery_number: string;
  sale_date: Date;
  status: string;
}

export type salesPk = "id";
export type salesId = sales[salesPk];
export type salesOptionalAttributes = "id";
export type salesCreationAttributes = Optional<salesAttributes, salesOptionalAttributes>;

export class sales extends Model<salesAttributes, salesCreationAttributes> implements salesAttributes {
  id!: number;
  user_id!: number;
  seller_id!: number;
  total_price!: number;
  delivery_address!: string;
  delivery_number!: string;
  sale_date!: Date;
  status!: string;

  // sales belongsToMany products via sale_id and product_id
  product_id_products!: products[];
  getProduct_id_products!: Sequelize.BelongsToManyGetAssociationsMixin<products>;
  setProduct_id_products!: Sequelize.BelongsToManySetAssociationsMixin<products, productsId>;
  addProduct_id_product!: Sequelize.BelongsToManyAddAssociationMixin<products, productsId>;
  addProduct_id_products!: Sequelize.BelongsToManyAddAssociationsMixin<products, productsId>;
  createProduct_id_product!: Sequelize.BelongsToManyCreateAssociationMixin<products>;
  removeProduct_id_product!: Sequelize.BelongsToManyRemoveAssociationMixin<products, productsId>;
  removeProduct_id_products!: Sequelize.BelongsToManyRemoveAssociationsMixin<products, productsId>;
  hasProduct_id_product!: Sequelize.BelongsToManyHasAssociationMixin<products, productsId>;
  hasProduct_id_products!: Sequelize.BelongsToManyHasAssociationsMixin<products, productsId>;
  countProduct_id_products!: Sequelize.BelongsToManyCountAssociationsMixin;
  // sales hasMany sales_products via sale_id
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
  // sales belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;
  // sales belongsTo users via seller_id
  seller!: users;
  getSeller!: Sequelize.BelongsToGetAssociationMixin<users>;
  setSeller!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createSeller!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof sales {
    return sales.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    total_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    delivery_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    delivery_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sale_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sales',
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
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "seller_id",
        using: "BTREE",
        fields: [
          { name: "seller_id" },
        ]
      },
    ]
  });
  }
}
