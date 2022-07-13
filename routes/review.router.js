const router = require("express").Router();
const ReviewModel = require("../models/Review.model");

//CREATE
router.post("/create-review", async (req, res) => {
  try {
    const newReview = await ReviewModel.create(req.body);
    return res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//Read all

router.get("/all-reviews", async (req, res) => {
  try {
    const allReviews = await ReviewModel.find();
    return res.status(200).json(allReviews);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//Read details

router.get("/review/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const review = await ReviewModel.findOne({ _id: id });
    return res.status(200).json(review);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//EDIT

router.patch("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const editedReview = await ReviewModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true, runValidators: true }
    );
    return res.status(200).json(editedReview);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//DELETE

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReview = await ReviewModel.deleteOne({ _id: id });
    return res.status(200).json(deletedReview);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

router.post("/create-beer", async (req, res) => {
  try {
    const newBeer = await ReviewModel.create(req.body);
    return res.status(201).json(newBeer);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

router.post("/make-beer", async (req, res) => {
  try {
    const allReviews = await ReviewModel.findByIdAndUpdate(
      ReviewModel._id,
      { $push: { beer: beer._id } },
      { new: true }
    );
    return res.status(200).json(allReviews);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
