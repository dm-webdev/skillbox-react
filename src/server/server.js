import express from "express";
import ReactDOM from "react-dom/server";
import { App } from "../App";
import { indexTemplate } from "./indexTemplate";
import axios from "axios";
import compression from "compression";
import helmet from "helmet";


const PORT = process.env.PORT || 9000;
const app = express();

if (process.env.IS_BUILD != "development") {
  app.use(helmet({
    contentSecurityPolicy: false,
  }));

  app.use(compression());
}

app.use("/static", express.static("./dist/client"));
app.get("/auth", (req, res) => {
  axios
    .post(
      "https://www.reddit.com/api/v1/access_token",
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${process.env.URI}/auth`,
      {
        auth: {
          username: process.env.CLIENT_ID,
          password: process.env.SECRET,
        },
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      }
    )

    .then(({ data }) => {
      res.send(
        indexTemplate(ReactDOM.renderToString(App()), data["access_token"])
      );
    })

    .catch(console.log);
});

app.get("*", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
