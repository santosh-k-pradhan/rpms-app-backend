const fs = require("fs");
const csv = require("csv-parser");
const Pricing = require("../models/Pricing");

exports.uploadCSV = async (req, res, next) => {
  const results = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => {
      results.push({
        storeId: data["Store ID"],
        sku: data["SKU"],
        productName: data["Product Name"],
        price: parseFloat(data["Price"]),
        date: new Date(data["Date"])
      });
    })
    .on("end", async () => {
      try {
        await Pricing.insertMany(results);
        fs.unlinkSync(req.file.path);
        res.json({ message: "Upload successful", count: results.length });
      } catch (error) {
        next(error);
      }
    });
};

exports.searchPricing = async (req, res) => {
  const { storeId, sku, date } = req.query;
  const query = {};

  if (storeId) query.storeId = storeId;
  if (sku) query.sku = sku;
  if (date) query.date = new Date(date);

  const data = await Pricing.find(query).limit(100);
  res.json(data);
};

exports.updatePricing = async (req, res) => {
  const updated = await Pricing.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};