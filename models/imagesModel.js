import sequelize from "../config/sequelizeConfig.js";
import { DataTypes, Model } from "sequelize";

export class imagesModel extends Model {}

imagesModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    file_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "images",
    freezeTableName: true,
    timestamps: true,
  }
);

export default imagesModel;
