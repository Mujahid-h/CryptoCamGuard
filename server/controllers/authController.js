import { comparePassword, hashPassword } from "../middleware/authMiddleware.js";
import userModel from "../models/authModel.js";
import JWT from "jsonwebtoken";

// REGISTER CONTROLLER || METHOD (POST)
export const registerController = async (req, res) => {
  try {
    const { fullName, email, password, mobile } = req.body;

    // validation
    if (!fullName) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }
    if (!mobile) {
      return res.send({ message: "Mobile is required" });
    }

    // check the user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      console.log("User already registered");
      return res.status(500).send({
        success: false,
        message: "Already Registered! Please Login",
      });
    }

    // register the user
    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      fullName,
      email,
      mobile,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully!",
      user,
    });
  } catch (error) {
    console.log("Error in Registration:", error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

// LOGIN CONTROLLER || METHOD (POST)
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    // check the user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not Registered",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Incorrect password",
      });
    }

    // token generation
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "120d",
    });
    res.status(200).send({
      success: true,
      message: "Login successfully!",
      user: {
        name: user.name,
        email: user.email,
        mobile: user.mobile,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      mesage: "Invalid username or password",
      error,
    });
  }
};

// // FORGET PASSWORD CONTROLLER || METHOD (POST)
// export const forgetPasswordController = async (req, res) => {
//   try {
//     const { email, answer, newPassword } = req.body;
//     if (!email) {
//       res.status(400).send({
//         message: "Email is required",
//       });
//     }
//     if (!answer) {
//       res.status(400).send({
//         message: "Answer is required",
//       });
//     }
//     if (!newPassword) {
//       res.status(400).send({
//         message: "New Password is required",
//       });
//     }
//     // check the user
//     const user = await userModel.findOne({ email, answer });
//     // validation
//     if (!user) {
//       return res.status(404).send({
//         success: false,
//         message: "Wrong Email or Answer",
//       });
//     }
//     const hashedPassword = await hashPassword(newPassword);
//     await userModel.findByIdAndUpdate(user._id, { password: hashedPassword });
//     res.status(200).send({
//       success: true,
//       message: "Password Reset Successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Something went wrong",
//       error,
//     });
//   }
// };
