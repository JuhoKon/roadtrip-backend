/* eslint-disable @typescript-eslint/no-var-requires */
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
const bodyParser = require("body-parser");
const cors = require("cors");
import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";
// Create Express server
export const app = express();

const jsonParser = bodyParser.json();

app.use(bodyParser.json());
app.use(cors());
// Express configuration
app.set("port", 8080);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/api", index);

app.use(errorNotFoundHandler);
app.use(errorHandler);
