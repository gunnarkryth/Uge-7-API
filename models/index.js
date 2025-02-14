import sequelize from "../config/sequelizeConfig.js";
import genderModel from "./genderModel.js";
import staffModel from "./staffModel.js";

staffModel.belongsTo(genderModel, { foreignKey: "gender_id" });
genderModel.hasMany(staffModel, { foreignKey: "gender_id" });

export { sequelize, staffModel, genderModel };
