import sequelize from "../config/sequelizeConfig.js";
import { DataTypes, Model } from "sequelize";

export class estateImageReelModel extends Model {}

estateImageReelModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    estate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_main: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "estateImageReel",
    freezeTableName: true,
    timestamps: true,
  }
);

export default estateImageReelModel;
