import { app } from "./app";
require("dotenv").config();

const port = process.env.APP_PORT;

app.get("/", (request, response) => {
  return response.json({ msg: "Working!" });
});

app.listen(port, () => {
  console.log("server running on port: " + port);
});
