const { Schema, model, default: mongoose } = require("mongoose");

const reviewSchema = new Schema({
  username: { type: String, required: true, trim: true },
  score: { type: Number, required: true },
  comments: { type: String, required: true },

  beer: [{ type: mongoose.Schema.Types.ObjectId, ref: "beer" }],
});

const ReviewModel = model("Review", reviewSchema);

module.exports = ReviewModel;
