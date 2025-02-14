import sequelize from "../config/sequelizeConfig.js";
import { DataTypes, Model } from "sequelize";

export class estateModel extends Model {}

estateModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    payout: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    gross: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    net: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    cost: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    num_rooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    num_floors: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    floor_space: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ground_space: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    basement_space: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year_construction: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year_rebuilt: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    floor_plan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    num_clicks: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    energy_label_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "estate",
    freezeTableName: true,
    timestamps: true,
  }
);

export default estateModel;
