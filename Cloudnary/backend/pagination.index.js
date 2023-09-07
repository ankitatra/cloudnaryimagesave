const express = require("express");
const cors = require("cors"); // Import the cors middleware
const app = express();
const port = 3000;
const ItemModel = require("./models/items");
app.use(cors()); // Enable CORS for all routes

const itemsPerPage = 10; // Number of items per page

// Sample data (replace with actual database queries)
const allItems = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
  { id: 6, name: "Item 6" },
  { id: 7, name: "Item 7" },
  { id: 8, name: "Item 8" },
  { id: 9, name: "Item 9" },
  { id: 10, name: "Item 10" },
  { id: 11, name: "Item 11" },
  { id: 12, name: "Item 12" },
  { id: 13, name: "Item 13" },
  { id: 14, name: "Item 14" },
  { id: 15, name: "Item 15" },
  { id: 16, name: "Item 16" },
  { id: 17, name: "Item 17" },
  { id: 18, name: "Item 18" },
  { id: 19, name: "Item 19" },
  { id: 20, name: "Item 20" },
  { id: 21, name: "Item 21" },
  { id: 22, name: "Item 22" },
  { id: 23, name: "Item 23" },
  { id: 24, name: "Item 24" },
  { id: 25, name: "Item 25" },
  { id: 26, name: "Item 26" },
  { id: 27, name: "Item 27" },
  { id: 28, name: "Item 28" },
  { id: 29, name: "Item 29" },
  { id: 30, name: "Item 30" },
  { id: 31, name: "Item 31" },
  { id: 32, name: "Item 32" },
  { id: 33, name: "Item 33" },
  { id: 34, name: "Item 34" },
  { id: 35, name: "Item 35" },
  { id: 36, name: "Item 36" },
  { id: 37, name: "Item 37" },
  { id: 38, name: "Item 38" },
  { id: 39, name: "Item 39" },
  { id: 40, name: "Item 40" },
  { id: 41, name: "Item 41" },
  { id: 42, name: "Item 42" },
  { id: 43, name: "Item 43" },
  { id: 44, name: "Item 44" },
  { id: 45, name: "Item 45" },
  { id: 46, name: "Item 46" },
  { id: 47, name: "Item 47" },
  { id: 48, name: "Item 48" },
  { id: 49, name: "Item 49" },
  { id: 50, name: "Item 50" },
  { id: 51, name: "Item 51" },
  { id: 52, name: "Item 52" },
  { id: 53, name: "Item 53" },
  { id: 54, name: "Item 54" },
  { id: 55, name: "Item 55" },
  { id: 56, name: "Item 56" },
  { id: 57, name: "Item 57" },
  { id: 58, name: "Item 58" },
  { id: 59, name: "Item 59" },
  { id: 60, name: "Item 60" },
  { id: 61, name: "Item 61" },
  { id: 62, name: "Item 62" },
  { id: 63, name: "Item 63" },
  { id: 64, name: "Item 64" },
  { id: 65, name: "Item 65" },
  { id: 66, name: "Item 66" },
  { id: 67, name: "Item 67" },
  { id: 68, name: "Item 68" },
  { id: 69, name: "Item 69" },
  { id: 70, name: "Item 70" },
  { id: 71, name: "Item 71" },
  { id: 72, name: "Item 72" },
  { id: 73, name: "Item 73" },
  { id: 74, name: "Item 74" },
  { id: 75, name: "Item 75" },
  { id: 76, name: "Item 76" },
  { id: 77, name: "Item 77" },
  { id: 78, name: "Item 78" },
  { id: 79, name: "Item 79" },
  { id: 80, name: "Item 80" },
  { id: 81, name: "Item 81" },
  { id: 82, name: "Item 82" },
  { id: 83, name: "Item 83" },
  { id: 84, name: "Item 84" },
  { id: 85, name: "Item 85" },
  { id: 86, name: "Item 86" },
  { id: 87, name: "Item 87" },
  { id: 88, name: "Item 88" },
  { id: 89, name: "Item 89" },
  { id: 90, name: "Item 90" },
  // ... more items
];
// Array of all items

app.get("/api/items", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToSend = allItems.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  res.json({
    items: itemsToSend,
    currentPage: page,
    totalPages: totalPages,
  });
});

// app.get("/api/item", async (req, res) => {
//   try {
//     const filters = req.query; // Get query parameters for filtering
//     const filteredItems = await ItemModel.find(filters);
//     res.json(filteredItems);
//   } catch (error) {
//     console.error("Error fetching filtered items:", error);
//     res.status(500).json({ error: "Error fetching filtered items" });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});