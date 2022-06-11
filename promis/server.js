const express = require('express')
const request = require('request');
const app = express()
const port = 3000

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {

  const options = {
    'method': 'GET',
    'url': 'https://gorest.co.in/public/v2/users',
    'headers': {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer d8b42b3d8e8a21d707fe553923b48b3d3514de59e0511ad75379697695cea800'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response.body)
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
