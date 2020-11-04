import "../database";
import Post from "../models/post";

export default {
  getFilteredDataBy: async (filters, limit) => {
    const posts = !limit
      ? await Post.find({ deleted: false, ...filters })
      : await Post.find({ deleted: false, ...filters }).limit(limit);
    return JSON.parse(JSON.stringify(posts));
  }
};
