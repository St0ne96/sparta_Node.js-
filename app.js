const express = require("express");
const app = express();

//env setting
require('dotenv').config();
const PORT = process.env.port || 8000;
app.listen(PORT, console.log('Server don start for port' + PORT));

app.get('/', (req, res) => {
  res.send('안녕 테스트 중이야 ㅎㅎ');
});

