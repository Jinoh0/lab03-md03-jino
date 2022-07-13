const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/db.config.js");
dbConnect();

const app = express();
app.use(express.json());

const ReviewRouter = require("./routes/review.router");
app.use("/review", ReviewRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`servidor executando na porta ${process.env.PORT}`);
});
