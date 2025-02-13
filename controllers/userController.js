import { hashPassword, comparePassword } from "../utils/passwordUtils.js";

async function registerUser(req, res) {
  try {
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    // Save the user with hashedPassword instead of plain password
  } catch (error) {
    // Handle error
  }
}
