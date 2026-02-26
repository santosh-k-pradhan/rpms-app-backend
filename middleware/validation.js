const { body, validationResult } = require("express-validator");

exports.validatePricing = [
  body("storeId").notEmpty(),
  body("sku").notEmpty(),
  body("productName").notEmpty(),
  body("price").isNumeric(),
  body("date").isISO8601(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];