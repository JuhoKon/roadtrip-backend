/* eslint-disable @typescript-eslint/no-var-requires */
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
const bodyParser = require("body-parser");
const cors = require("cors");
// Routes
import { index } from "./routes/index";
// Create Express server
export const app = express();
require("dotenv").config();
const jsonParser = bodyParser.json();

const { REACT_APP_API_KEY } = process.env;

app.use(bodyParser.json());
app.use(cors());
// Express configuration
app.set("port", process.env.PORT || 8080);

app.use(logger("dev"));

const buildFolder = "../build";
app.set("views", path.join(__dirname, buildFolder));
app.engine("html", require("ejs").renderFile);

app.use(
  "/static",
  express.static(path.join(__dirname, `${buildFolder}/static`)),
);
app.get("/", function (req, res) {
  res.render("index.html", { REACT_APP_API_KEY });
});

app.use("/api", index);
