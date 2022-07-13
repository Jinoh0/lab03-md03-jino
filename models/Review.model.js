const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  username: { type: String, required: true, trim: true },
  score: { type: Number, required: true },
  comments: { type: String, required: true },
});

const ReviewModel = model("Review", reviewSchema);

module.exports = ReviewModel;
