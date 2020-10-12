const express = require('express');
const app = express();

let fruits = [
  { id: "1", name: 'Banana', color: 'yellow'},
  { id: "2", name: 'Cherry', color: 'red'},
  { id: "3", name: 'Lemon', color: 'yellow'},
  { id: "4", name: 'Apple', color: 'green'},
  { id: "5", name: 'Orange', color: 'orange'}
]

app.get('/fruits', (req, res) => {
  res.json(fruits)
});

app.get('/fruits/:id', (req, res) => {
  res.json({})
})

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});

//Run app, then load http://localhost:5000 in a browser to see the output.