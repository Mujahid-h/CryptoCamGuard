import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import authRoute from "./routes/authRoute.js";
import connectDb from "./config/db.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server running on PORT ${PORT}`);
});
