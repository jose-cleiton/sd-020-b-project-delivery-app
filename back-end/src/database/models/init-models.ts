import type { Sequelize } from "sequelize";
import { SequelizeMeta as _SequelizeMeta } from "./SequelizeMeta";
import type { SequelizeMetaAttributes, SequelizeMetaCreationAttributes } from "./SequelizeMeta";
import { products as _products } from "./products";
import type { productsAttributes, productsCreationAttributes } from "./products";
import { sales as _sales } from "./sales";
import type { salesAttributes, salesCreationAttributes } from "./sales";
import { sales_products as _sales_products } from "./sales_products";
import type { sales_productsAttributes, sales_productsCreationAttributes } from "./sales_products";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";

export {
  _SequelizeMeta as SequelizeMeta,
  _products as products,
  _sales as sales,
  _sales_products as sales_products,
  _users as users,
};

export type {
  SequelizeMetaAttributes,
  SequelizeMetaCreationAttributes,
  productsAttributes,
  productsCreationAttributes,
  salesAttributes,
  salesCreationAttributes,
  sales_productsAttributes,
  sales_productsCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const SequelizeMeta = _SequelizeMeta.initModel(sequelize);
  const products = _products.initModel(sequelize);
  const sales = _sales.initModel(sequelize);
  const sales_products = _sales_products.initModel(sequelize);
  const users = _users.initModel(sequelize);

  products.belongsToMany(sales, { as: 'sale_id_sales', through: sales_products, foreignKey: "product_id", otherKey: "sale_id" });
  sales.belongsToMany(products, { as: 'product_id_products', through: sales_products, foreignKey: "sale_id", otherKey: "product_id" });
  sales_products.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(sales_products, { as: "sales_products", foreignKey: "product_id"});
  sales_products.belongsTo(sales, { as: "sale", foreignKey: "sale_id"});
  sales.hasMany(sales_products, { as: "sales_products", foreignKey: "sale_id"});
  sales.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(sales, { as: "sales", foreignKey: "user_id"});
  sales.belongsTo(users, { as: "seller", foreignKey: "seller_id"});
  users.hasMany(sales, { as: "seller_sales", foreignKey: "seller_id"});

  return {
    SequelizeMeta: SequelizeMeta,
    products: products,
    sales: sales,
    sales_products: sales_products,
    users: users,
  };
}
