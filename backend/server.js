import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Crypto Dashboard Backend is running.");
});

app.get("/api", (req, res) => {
  res.json({ message: "API is working", status: "success" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
