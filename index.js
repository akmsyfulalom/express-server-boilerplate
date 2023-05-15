const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
const toolsRoutes = require("./routes/v1/tools.routes.js");
const viewCount = require("./middleware/viewCount");
const errorHandler = require("./middleware/errorHandler");
// const {default: rateLimit} = require("express-rate-limit");
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
// app.use(viewCount);
// const limiter = rateLimit({
// 	windowMs: 15 * 60 * 1000, // 15 minutes
// 	max: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
// 	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// })
// Apply the rate limiting middleware to all requests
// app.use(limiter)
dbConnect();
app.use("/api/v1/tools", toolsRoutes);
app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/public/test.html")
  res.render("home.ejs", {
    id:2,
    user:{
      name: "akm test"
    }
  })
});
app.all("*", (req, res) =>{
  res.send("NOT found this route!")
});
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
process.on("unhandledRejection", (error) =>{
  console.log(error.name, error.message);
  app.close(()=>{
    process.exit(1);
  })
});

