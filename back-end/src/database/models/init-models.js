var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _products = require("./products");
var _sales = require("./sales");
var _sales_products = require("./sales_products");
var _users = require("./users");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var sales = _sales(sequelize, DataTypes);
  var sales_products = _sales_products(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

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
    SequelizeMeta,
    products,
    sales,
    sales_products,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
