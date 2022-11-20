const express = require("express");
const app = express();
app.use(express.json());
const routesGet = require("./routes/routesGet");
const routesPost = require("./routes/routesPost");
const routesPut = require("./routes/routesPut");


app.use("/api", routesGet);
app.use("/api", routesPost);
app.use("/api", routesPut);


//require("dotenv").config();

//const mongoString = process.env.DATABASE_URL;
//mongoose.connect("mongodb://localhost:27017/prueba");




app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});