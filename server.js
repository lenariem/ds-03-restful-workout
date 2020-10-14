const express = require('express');
const app = express();

app.use(express.json());

let fruits = [
  { id: "1", name: 'Banana', color: 'yellow'},
  { id: "2", name: 'Cherry', color: 'red'},
  { id: "3", name: 'Lemon', color: 'yellow'},
  { id: "4", name: 'Apple', color: 'green'},
  { id: "5", name: 'Orange', color: 'orange'}
];

//start page
app.get('/', (req, res) => {
  res.send("Welcome to Fruit DB")
});

//get all fruits
app.get('/fruits', (req, res) => {
  res.json(fruits)
});

//get one single fruit by id
app.get('/fruits/:id', (req, res) => {
  let {id} = req.params;
  let fruit = fruits.find(fruit => fruit.id === id);
  if(!fruit) {
    res.send({error: `No fruit with ID ${id} in our DB`});
  } else {
    res.json({fruit});
  }   
});

//add a new fruit
app.post('/fruits', (req, res) => {
  let newFruit = req.body;
  newFruit.id = fruits.length+1 +""; 
  
  fruits.push(newFruit);
  res.json(newFruit);
});


//delete fruit
app.delete('/fruits/:id', (req, res) => {
  let {id} = req.params;
  fruits = fruits.filter(fruit => fruit.id !== id);
  res.send({message: `Fruit with ID ${id} is deleted`});
});

//update
app.patch('/fruits/:id', (req, res) => {
  let {id} = req.params;
  let fields = req.body;
  let foundFruit = fruits.find(fruit => fruit.id === id);
  
  if (foundFruit) {
    Object.assign(foundFruit, {...req.body});
    res.send(foundFruit);
  } else {
    res.send({message: `Fruit with ID ${id} is not found`});
  }
});

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});

//Run app, then load http://localhost:5000 in a browser to see the output.