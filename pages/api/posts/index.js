import "../../../db/database";
import Post from "../../../db/models/post";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      try {
        new Post(req.body).save((err, addedPost) => {
          if (err) return console.log(err);
          return res.status(200).json(addedPost);
        });
      } catch (error) {
        return res.status(400).json({ error });
      }
      break;
    case "PUT":
      try {
        const { _id, newContent } = req.body;
        Post.replaceOne({ _id }, newContent, {}, (err) => {
          if (err) return console.log(err);
          return res.status(200).send(`Updated ${_id}`);
        });
      } catch (error) {
        return res.status(400).json({ error });
      }
      break;
    case "DELETE":
      try {
        const { _id } = req.body;
        Post.updateOne({ _id }, { deleted: true }, {}, (err) => {
          if (err) return console.log(err);
          return res.status(200).send(`Deleted ${_id}`);
        });
      } catch (error) {
        return res.status(400).json({ error });
      }
      break;
    default:
      return res.status(400).end();
  }
};
