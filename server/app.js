require("dotenv").config();
const express = require('express');
const cors = require('cors');
require("./model/db");
const MovieController = require('./controller/Movie');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());


app.get('/movies', MovieController.list);
app.get('/movies/:id', MovieController.getById);

app.use('*', (req, res) => {
  res.status(404).json({
    message: '404 Not Found',
  });
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  console.log({ err });
  res.status(statusCode).send({
    message: statusCode === 500 ? 'На сервере произошла ошибка' : message,
  });
});


app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});