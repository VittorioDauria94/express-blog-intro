import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  const jsonData = fs.readFileSync("./blogPostData.json", "utf8");
  const posts = JSON.parse(jsonData);

  const respData = {
    info: {
      count: posts.length,
    },
    result: posts,
  };

  res.json(respData);
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
