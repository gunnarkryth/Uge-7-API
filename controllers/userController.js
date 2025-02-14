import { hashPassword, comparePassword } from "../utils/passwordUtils.js";

async function registerUser(req, res) {
  try {
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    // HASHEDPASSWORD
  } catch (error) {
    // ERROR
  }
}
