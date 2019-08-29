const router = require("express").Router();
const auth = require("../auth");
const { err } = require("../../modules/utilities");

router.get("/followed", auth({ user: true }), async (req, res) => {
  const { followedServers } = require("../../controllers/user");
  console.log(req.user);
  if (req.user && req.user.id) {
    const followed = await followedServers(req.user);
    res.send(followed);
    return;
  }
  res.send({ status: "Error!", error: "Unable to get followed servers." });
  return;
});

router.post("/reset-password", auth({ user: true }), async (req, res) => {
  const { resetPassword } = require("../../controllers/user");
  if (req.user && req.user.id) {
    console.log(`Reset Password for: ${req.user.username}`);
    const reset = await resetPassword(req.user);
    res.send(reset);
    return;
  }
  res.send(err("There was a problem generating a reset key through the API"));
});

module.exports = router;
