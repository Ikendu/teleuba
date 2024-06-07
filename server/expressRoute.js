// this is where all our express routes and related stuffs are done
const app = require("./server").app;

app.get("/test", (req, res) => {
  res.json("Testing of app");
});
