import "../database";
import Post from "../models/post";

export default {
  getFilteredDataBy: async (filters) => {
    const posts = await Post.find({ deleted: false, ...filters });
    return JSON.parse(JSON.stringify(posts));
  },
};
