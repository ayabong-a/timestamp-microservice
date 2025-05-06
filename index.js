const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/hello", (req, res) => {
  res.json({ greeting: "hello API" });
});

app.get("/api", (req, res) => {
    const now = new Date();

    res.json({unix: now.getTime(), utc: now.toUTCString()})
})

app.get("/api/:date", (req, res) => {
  let dateParam = req.params.date;
  let date;

  if (/^\d+$/.test(dateParam)) {
    date = new Date(parseInt(dateParam));
  } else {
    date = new Date(dateParam);
  }
  if(date.toString() === "Invalid Date"){
    res.json({error: "Invalid Date"});
  }

  res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${listener.address().port}`);
});
