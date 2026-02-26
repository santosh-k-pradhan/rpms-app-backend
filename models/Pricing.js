const mongoose = require("mongoose");

const pricingSchema = new mongoose.Schema({
  storeId: { type: String, required: true, index: true },
  sku: { type: String, required: true, index: true },
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true, index: true }
}, { timestamps: true });

pricingSchema.index({ storeId: 1, sku: 1, date: 1 });

module.exports = mongoose.model("Pricing", pricingSchema);