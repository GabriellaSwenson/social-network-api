const router = require("express").Router();
const thoughtsRoutes = require("./thoughtsRoutes");
const usersRoutes = require("./usersRoutes");

router.use("/thoughts", thoughtsRoutes);
router.use("/user", usersRoutes);

module.export = router;
