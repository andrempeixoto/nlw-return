import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.send("/")
});

app.listen(3333, () => {
  console.log("server running in port 3333")
});