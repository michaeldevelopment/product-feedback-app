// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { feedbackData } from "../../mockData";

export default function handler(req, res) {
  res.status(200).json(feedbackData);
}
