const data = require("./animeList.json");

const fs = require("fs");
const request = require("request");

for (let i = 0; i < data.length; i++) {
  request.get(
    {
      url: data[i].image_url,
      encoding: "binary",
    },
    (err, response, body) => {
      if (err) return console.log(err);
      fs.writeFile(`${data[i].anime_id}.jpg`, body, "binary", (err) => {
        if (err) return console.log(err);
        console.log("The file was saved!");
      });
    }
  );
}
