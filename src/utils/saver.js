const DATA_ROOT = require("./animeList.json");

const fs = require("fs");
const request = require("request");

async function saver() {
  for (let i = 0; i < DATA_ROOT.length; i++) {
    await request.get(
      { url: DATA_ROOT[i].image_url, encoding: "binary" },
      (err, response, body) => {
        if (err) return console.log(err);
        fs.writeFile(`${DATA_ROOT[i].anime_id}.jpg`, body, "binary", (err) => {
          if (err) return console.log(err);
          console.log("The file was saved!");
        });
      }
    );
  }
}

saver();
