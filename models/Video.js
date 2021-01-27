import mongoose from "mongoose";
const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required"
  },
  title: {
    type: String,
    required: "Tilte is required"
  },
  description: String,
  thumbnail: String,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  price: {
    type: Number,
    default: 0
  },
  avatarUrl: {
    type: String,
    default: " "
  },
  coin: {
    type: Number,
    default: 0
  }
});

const model = mongoose.model("Video", VideoSchema);
export default model;