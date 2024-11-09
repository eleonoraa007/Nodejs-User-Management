const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const { sequelize, connectDB } = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

connectDB()
  .then(() => {
    sequelize.sync({ force: false });
  })
  .then(() => {
    console.log("Database and tables created");
  })
  .catch((err) => {
    console.error("Error connecting to database ", err);
  });

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
