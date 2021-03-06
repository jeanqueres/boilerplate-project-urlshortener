require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// app.route('/api/shorturl')
// .get((req, res, next) => {
//   let data = req.query;
//   res.json({'data': data});
// })

// URL Shortener Microservice POST
app.route('/api/shorturl')
.get((req, res, next) => {
  let data = req.query;
  res.json({
    body: data
  });
  //   original_url: req.body,
  //   short_url: 
  // });
})
.post((req, res, next) => {
  let data = req.body;
  res.json({
    body: data
  });
});

// // URL Shortener Microservice GET
// app.get('/api/shorturl/short_url?', function (req, res) {
//   let url = req.params['short_url'];

//   if (err)

//     res.redirect(url);

// });

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
