import sequelize from "../config/sequelizeConfig.js";
import { DataTypes, Model } from "sequelize";

export class genderModel extends Model {}

genderModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "gender",
    freezeTableName: true,
    timestamps: true,
  }
);

export default genderModel;
