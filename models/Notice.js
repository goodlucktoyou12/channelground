import mongoose from "mongoose";
const NoticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Text is required"
  },
  payload:{
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isRead: {
    type: Boolean,
    default: false
  }
});

const model = mongoose.model("Notice", NoticeSchema);
export default model;