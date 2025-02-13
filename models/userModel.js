import sequelize from "../config/sequelizeConfig.js";
import { DataTypes, Model } from "sequelize";
import { hashPassword } from "../utils/passwordUtils.js";

export class userModel extends Model {}

userModel.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    refresh_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user",
    freezeTableName: true,
    timestamps: true,
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          user.password = await hashPassword(user.password);
        }
      },
      beforeUpdate: async (user) => {
        if (user.changed("password")) {
          user.password = await hashPassword(user.password);
        }
      },
    },
  }
);

export default userModel;
