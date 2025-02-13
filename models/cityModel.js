import sequelize from "../config/sequelizeConfig.js";
import { DataTypes, Model } from "sequelize";

export class cityModel extends Model {}

cityModel.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "city",
    freezeTableName: true,
    timestamps: true,
  }
);

export default cityModel;
