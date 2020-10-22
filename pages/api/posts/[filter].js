import "../../../db/database";
import Post from "../../../db/models/post";

export default async (req, res) => {
  if (req.method === "GET") {
    const filter = JSON.parse(req.query.filter);
    try {
      Post.find({ deleted: false, ...filter }, (err, docs) => {
        if (err) return console.log(err);
        return res.status(200).json(docs);
      });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
};
