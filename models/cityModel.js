import sequelize from "../config/sequelizeConfig.js";
import { DataTypes, Model } from "sequelize";

export class cityModel extends Model {}

cityModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    zip_code: {
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
