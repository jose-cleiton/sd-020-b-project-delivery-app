import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { sales, salesId } from './sales';

export interface usersAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

export type usersPk = "id";
export type usersId = users[usersPk];
export type usersOptionalAttributes = "id";
export type usersCreationAttributes = Optional<usersAttributes, usersOptionalAttributes>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  role!: string;

  // users hasMany sales via user_id
  sales!: sales[];
  getSales!: Sequelize.HasManyGetAssociationsMixin<sales>;
  setSales!: Sequelize.HasManySetAssociationsMixin<sales, salesId>;
  addSale!: Sequelize.HasManyAddAssociationMixin<sales, salesId>;
  addSales!: Sequelize.HasManyAddAssociationsMixin<sales, salesId>;
  createSale!: Sequelize.HasManyCreateAssociationMixin<sales>;
  removeSale!: Sequelize.HasManyRemoveAssociationMixin<sales, salesId>;
  removeSales!: Sequelize.HasManyRemoveAssociationsMixin<sales, salesId>;
  hasSale!: Sequelize.HasManyHasAssociationMixin<sales, salesId>;
  hasSales!: Sequelize.HasManyHasAssociationsMixin<sales, salesId>;
  countSales!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany sales via seller_id
  seller_sales!: sales[];
  getSeller_sales!: Sequelize.HasManyGetAssociationsMixin<sales>;
  setSeller_sales!: Sequelize.HasManySetAssociationsMixin<sales, salesId>;
  addSeller_sale!: Sequelize.HasManyAddAssociationMixin<sales, salesId>;
  addSeller_sales!: Sequelize.HasManyAddAssociationsMixin<sales, salesId>;
  createSeller_sale!: Sequelize.HasManyCreateAssociationMixin<sales>;
  removeSeller_sale!: Sequelize.HasManyRemoveAssociationMixin<sales, salesId>;
  removeSeller_sales!: Sequelize.HasManyRemoveAssociationsMixin<sales, salesId>;
  hasSeller_sale!: Sequelize.HasManyHasAssociationMixin<sales, salesId>;
  hasSeller_sales!: Sequelize.HasManyHasAssociationsMixin<sales, salesId>;
  countSeller_sales!: Sequelize.HasManyCountAssociationsMixin;

 public static initModel(sequelize: Sequelize.Sequelize): typeof users {
    return users.init({
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
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "email"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
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
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
  }
}
