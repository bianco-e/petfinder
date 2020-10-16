import "../../../db/database";
import Post from "../../../db/models/post";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      try {
        new Post(req.body).save((err, addedPost) => {
          if (err) return console.log(err);
          res.status(200).json(addedPost);
        });
      } catch (error) {
        return res.status(400).json({ error });
      }
      break;
    case "PATCH":
      try {
        return res.status(200).json({ resp: "patched" });
      } catch (error) {
        return res.status(400).json({ error });
      }
      break;
    case "DELETE":
      try {
        return res.status(200).json({ resp: "deleted" });
      } catch (error) {
        return res.status(400).json({ error });
      }
      break;
    default:
      return res.status(400).end();
  }
};
