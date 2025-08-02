const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Lấy danh sách giày Nike
app.get('/api/nike-shoes', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'nikeShoes.json');
  fs.readFile(filePath, 'utf8', (err, jsonData) => {
    if (err) return res.status(500).json({ error: 'Không đọc được dữ liệu' });
    res.json(JSON.parse(jsonData));
  });
});

// Lấy chi tiết giày theo ID
app.get('/api/nike-shoes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const filePath = path.join(__dirname, 'data', 'nikeShoes.json');
  fs.readFile(filePath, 'utf8', (err, jsonData) => {
    if (err) return res.status(500).json({ error: 'Không đọc được dữ liệu' });
    const shoes = JSON.parse(jsonData);
    const shoe = shoes.find(s => s.id === id);
    if (shoe) res.json(shoe);
    else res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
  });
});

app.listen(PORT, () => {
  console.log(`Nike Shoes API đang chạy tại http://localhost:${PORT}/api/nike-shoes`);
});
