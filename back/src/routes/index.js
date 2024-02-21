const { Router } = require("express");
const postRouter = require("./postRouter")
const userRouter = require("./userRouter")


const router = Router();


router.use("/movies", postRouter);
router.use("/users", userRouter);


module.exports = router;