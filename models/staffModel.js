import sequelize from "../config/sequelizeConfig.js";
import { DataTypes, Model } from "sequelize";

export class staffModel extends Model {}

staffModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "gender",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "staff",
    freezeTableName: true,
    timestamps: true,
  }
);

export default staffModel;
