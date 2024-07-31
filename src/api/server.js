const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());

//1jIwhdqub9ATmehrjvL3MTHZ0yNLLIocX
app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/fetch-json', async (req, res) => {
  try {
    const fileId = '1C_Aj4X1yybnGhHKsch3tkFoKzEc4d-OX'; // Replace with your Google Drive file ID
    const response = await axios.get(`https://drive.google.com/uc?export=download&id=${fileId}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
