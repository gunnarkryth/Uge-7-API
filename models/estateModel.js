import sequelize from "../config/sequelizeConfig.js";
import { DataTypes, Model } from "sequelize";

export class estateModel extends Model {}

estateModel.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    payout: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gross: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    net: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cost: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    year_construction: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    year_rebuilt: {
      type: DataTypes.BIGINT,
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
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    energy_label_id: {
      type: DataTypes.BIGINT,
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
