const express = require('express');
const app = express();
const port = 3000;
const helmet = require('helmet');
const cors = require('cors');


app.use(cors());
app.options('*', cors());
 app.get('/', (req, res) => {
   res.send('Welcome to the G3clothing!');
 });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});