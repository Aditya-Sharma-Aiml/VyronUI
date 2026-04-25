import mongoose from "mongoose";



const componentSchema = new mongoose.Schema({
  name: String,

  code: String,

  props: [String],   // customizable props

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  visibility: {
    type: String,
    enum: ["private", "public"],
    default: "private"
  },

  npmPackage: String
  ,
  npmPublishStatus: {
    type: String,
    enum: ["not_published", "published", "failed"],
    default: "not_published"
  },
  npmPublishError: String

}, { timestamps: true });

const Component = mongoose.model("Component", componentSchema);

export default Component
