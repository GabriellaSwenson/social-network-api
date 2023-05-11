const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThoughts,
  deleteThoughts,
} = require("../../controllers/thoughtsController.js");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThoughts)
  .delete(deleteThoughts);

module.exports = router;
