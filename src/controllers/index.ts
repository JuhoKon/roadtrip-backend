import { Request, Response } from "express";
import axios from "axios";
const API = "API_KEY_HERE";

export const index = async (req: Request, res: Response): Promise<void> => {
  res.json({ ok: "OKEI" });
};

export const autocomplete = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const query: any = req.query.query;
  if (!query) {
    res.status(400).json({ error: "No query" });
    return;
  }
  console.log(query);
  const results = await axios.get(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
      query,
    )}&key=${API}`,
  );

  const data = results.data;
  res.json({ data });
};
export const placeDetails = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const placeID: any = req.query.placeID;
  if (!placeID) {
    res.status(400).json({ error: "No ID" });
  }
  const results = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?key=${API}&place_id=${placeID}
  `);
  const data = results.data;
  res.json({ data });
};
