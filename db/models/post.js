import mongoose from "mongoose";
const postSchema = new mongoose.Schema(
  {
    user: {
      id: String,
      avatar: String,
      firstName: String,
      lastName: String,
      phone: String,
    },
    pet: {
      species: String,
      name: String,
      description: {
        gender: String,
        color: String,
        identifyingFeature: String,
      },
    },
    location: {
      province: String,
      city: String,
      zone: String,
    },
    text: String,
    images: [String],
    state: String,
    date: Date,
    createdAt: Date,
    updatedAt: Date,
    deleted: Boolean,
  },
  {
    collection: "posts",
    versionKey: false,
  }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
