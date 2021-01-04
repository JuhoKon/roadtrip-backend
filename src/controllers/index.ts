import { Request, Response } from "express";
import axios from "axios";
const API = "AIzaSyAyE4jHf8w_cZs3pd5ZsidArr4JbqwsB1Y";

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

export const getDirections = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { destination, origin, waypoints } = req.body;
  console.log(destination);
  console.log(waypoints.join("|place_id:"));
  const results = await axios.get(
    `https://maps.googleapis.com/maps/api/directions/json?origin=place_id:${destination}&destination=place_id:${origin}&waypoints=place_id:${waypoints.join(
      "|place_id:",
    )}&key=${API}`,
  );

  const data = results.data;
  res.json({ data });
};

export const nearbySearch = async (req: Request, res: Response) => {
  const { location, radius, type, keyword } = req.body;
  console.log(location, radius, type, keyword);
  let query = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=${radius}&key=${API}`;
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
