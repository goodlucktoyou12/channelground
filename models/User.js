import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
const UserSchema = new mongoose.Schema({
  name: String,
  realname: String,
  email: String,
  password: String,
  phone: String,
  description: String,
  
  avatarUrl: {
    type: String,
    default: " "
  },
  facebookId: Number,
  githubId: Number,
  coin: {
    type: Number,
    default: 0
  },
  isMailVerify: {
    type: Boolean,
    default: false
  },
  mailJwtToken: String,
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video"
    }
  ],
	follower: [
    {
		type: "Number",
		default: 0
    }
  ],
  notices: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notice"
    }
  ],
  transferList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transfer"
    }
  ]
});


UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });




const model = mongoose.model("User", UserSchema);
export default model;