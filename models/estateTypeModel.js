import sequelize from "../config/sequelizeConfig.js";
import { DataTypes, Model } from "sequelize";

export class estateTypeModel extends Model {}

estateTypeModel.init(
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
    modelName: "estateType",
    freezeTableName: true,
    timestamps: true,
  }
);

export default estateTypeModel;
