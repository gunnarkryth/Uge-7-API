import userModel from "../models/userModel.js";
import { hashPassword, comparePassword } from "../utils/passwordUtils.js";

// REGISTER
export async function registerUser(req, res) {
  try {
    const { firstname, lastname, email, password } = req.body;

    const existingUser = await userModel.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await userModel.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      refresh_token: "",
      is_active: true,
    });

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// LOGIN
export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
