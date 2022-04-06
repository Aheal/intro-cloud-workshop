const PORT = 8080;
const express = require('express');
const app = express();
app.get('/', async (req, res, next) => {
  res.send('Hello world.');
});
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});