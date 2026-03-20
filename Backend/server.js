const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Sample Menu Data
const menu = [
  { id: 1, name: "Paneer Butter Masala", price: 250 },
  { id: 2, name: "Butter Naan", price: 40 },
  { id: 3, name: "Veg Biryani", price: 180 }
];

app.get('/api/menu', (req, res) => {
  res.json(menu);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});