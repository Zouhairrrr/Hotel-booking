const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController.js");

router.route("/create").post(clientController.create);
router.route("/update/:id").put(clientController.update);
router.route("/delete/:id").delete(clientController.deleteClient);
router.route("/").get(clientController.allClient);
router.route("/:id").get(clientController.oneClient);

module.exports = router;
