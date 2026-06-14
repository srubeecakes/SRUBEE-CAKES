const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const reviewRoutes=
require(
"./routes/reviewRoutes"
);

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(
"/reviews",
reviewRoutes
);
mongoose
.connect(process.env.MONGO_URI)
.then(() => {

console.log("MongoDB Connected 🎂");

})
.catch((err) => {

console.log(err);

});

app.get("/", (req, res) => {

res.send("SRUBEE Backend Running");

});

app.listen(
process.env.PORT,
() => {

console.log("Server Running");

}
);