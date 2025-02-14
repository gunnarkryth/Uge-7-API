import sequelize from "../config/sequelizeConfig.js";
import { DataTypes, Model } from "sequelize";

export class energyLabelModel extends Model {}

energyLabelModel.init(
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
    modelName: "energyLabel",
    freezeTableName: true,
    timestamps: true,
  }
);

export default energyLabelModel;
