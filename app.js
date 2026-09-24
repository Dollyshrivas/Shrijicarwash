const express = require("express");
const app = express();
const cors = require("cors");
PORT = 3000;


//cors
app.use(
  cors({
    origin:"https://shrijicarwash.vercel.app",
    credentials:true,
    methods:["GET","POST","PUT","DELETE"],
  })
);

app.get("/", (req, res) => {
  res.send("Car project backend running");
});

app.listen(PORT, () => {
  console.log(`Server will run on https://localhost${3000}`);
});
