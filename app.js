
const express = require("express");
const PORT = process.env.port || 3000;
const app = express();

const apiRoutes = require("./Develop/routes/api-routes");
const htmlRoutes = require("./Develop/routes/html-routes");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server on port ${PORT}`);
});
