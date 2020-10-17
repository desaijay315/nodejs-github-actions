const express = require("express");
const indexRoutes = require("./routes/index");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", indexRoutes);

app.listen(port, () => {
  console.log("server  is up on " + port);
});
