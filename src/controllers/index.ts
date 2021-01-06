import { Request, Response } from "express";
import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const { API_KEY } = process.env;

export const index = async (req: Request, res: Response): Promise<void> => {
  res.json({ ok: "OKEI" });
};

export const autocomplete = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const query: any = req.query.query;
  console.log(API_KEY);
  if (!query) {
    res.status(400).json({ error: "No query" });
    return;
  }
  console.log(query);
  const results = await axios
    .get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
        query,
      )}&key=${API_KEY}`,
    )
    .catch((e) => {
      res.json({ e });
    });
  if (results) {
    const data = results.data;
    res.json({ data });
  }
};

export const placeDetails = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const placeID: any = req.query.placeID;
  if (!placeID) {
    res.status(400).json({ error: "No ID" });
  }
  // eslint-disable-next-line max-len
  const results = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?key=${API_KEY}&place_id=${placeID}
  `);
  const data = results.data;
  res.json({ data });
};

export const getDirections = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { destination, origin, waypoints } = req.body;

  const results = await axios.get(
    // eslint-disable-next-line max-len
    `https://maps.googleapis.com/maps/api/directions/json?origin=place_id:${destination}&destination=place_id:${origin}&waypoints=place_id:${waypoints.join(
      "|place_id:",
    )}&key=${API_KEY}`,
  );

  const data = results.data;
  res.json({ data });
};

export const nearbySearch = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { location, radius, type, keyword } = req.body;
  // eslint-disable-next-line max-len
  let query = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=${radius}&key=${API_KEY}`;
  if (type && type !== "none") {
    query = query.concat(`&type=${type}`);
  }
  if (keyword) {
    query = query.concat(`&keyword=${keyword}`);
  }

  const results = await axios.get(query);
  const data = results.data;
  res.json({ data });
};

export const getPhoto = async (req: Request, res: Response): Promise<void> => {
  const { photoId } = req.body;
  const results = await axios.get(
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoId}&key=${API_KEY}`,
  );
  res.json({ url: results.request._redirectable._options.href });
};
