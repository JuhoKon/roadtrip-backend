import { Request, Response } from "express";
import axios from "axios";
const API = "AIzaSyACED-iW3pMSvqLlQrgx4TQ5cZEy7DrY64";

export const index = async (req: Request, res: Response): Promise<void> => {
  res.json({ ok: "OKEI" });
};

export const autocomplete = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const query = req.query.query;
  if (!query) {
    res.status(400).json({ error: "No query" });
    return;
  }
  const results = await axios.get(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${API}`,
  );
  const data = results.data;
  res.json({ data });
};
