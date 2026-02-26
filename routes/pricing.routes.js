const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const controller = require("../controllers/pricing.controller");
const { validatePricing } = require("../middleware/validation");

const router = express.Router();

router.post("/upload", upload.single("file"), controller.uploadCSV);
router.get("/", controller.searchPricing);
router.put("/:id", validatePricing, controller.updatePricing);

module.exports = router;