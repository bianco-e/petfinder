import "../database";
import Post from "../models/post";

export default async (req, res) => {
  switch (req.method) {
    case "POST": {
      try {
        const body = req.body;
        // Get the results from the api
        const results = { body: "Hello World" };
        // If everything is fine, return the results
        return res.status(200).json(results);
      } catch (error) {
        // Return a 400 if something failed
        return res.status(400).json({ error });
      }
    }
    case "PATCH": {
      try {
        // Get the results from the api
        const results = { body: "Hello World" };
        // If everything is fine, return the results
        return res.status(200).json(results);
      } catch (error) {
        // Return a 400 if something failed
        return res.status(400).json({ error });
      }
    }
  }

  // If nothing matched, we return a 400
  return res.status(400).end();
};
