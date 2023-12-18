const express = require("express");
const https = require("node:https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log("Post request received");
  const query = req.body.cityName;
  const apiKey = "274d400c2ce9eab25d3b7cbe45633d5f ";
  const units = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&units=" +
    units +
    "&appid=" +
    apiKey;

  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      console.log(temp);
      console.log(description);
      console.log(icon);
      res.write(
        "<h1> The temperature in " +
          query +
          " is " +
          temp +
          " degrees Celcius </h1>"
      );
      res.write("<p>The weather is currently " + description + "</p>");
      res.write("<img src=" + imageURL + "></img>");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
