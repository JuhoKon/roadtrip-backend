import { Router } from "express";
import * as controller from "../controllers/index";

export const index = Router();

index.get("/", controller.index);
index.get("/autocomplete", controller.autocomplete);
index.get("/place_details", controller.placeDetails);
