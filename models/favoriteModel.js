import sequelize from "../config/sequelizeConfig.js";
import { DataTypes, Model } from "sequelize";

export class favoriteModel extends Model {}

favoriteModel.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    estate_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "favorite",
    freezeTableName: true,
    timestamps: true,
  }
);

export default favoriteModel;
