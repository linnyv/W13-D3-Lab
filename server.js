require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose');

const Fruit = require('./models/Fruit.js');
const Vegetable = require('./models/Veggie.js');

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log('connected to mongo')
});

//////INDEX
app.get('/',  (req, res) => {
    res.send('<h1>Hello WISE!</h1>')
})

///FRUIT INDEX
app.get('/fruits', (req, res) => {
    Fruit.find ({}).then((allFruits) => {
        console.log(allFruits);
    res.render('./fruits/index', {
        fruits: allFruits
    });
  })
  .catch(error => {
    console.error(error)
  });
});

///VEGETABLES INDEX
app.get('/vegetables', (req, res) => {
    Vegetable.find ({}).then((allVegetables) => {
        console.log(allVegetables);
    res.render('./vegetables/index', {
        vegetables: allVegetables
    });
   })
   .catch(error => {
     console.error(error)
   });
});

///////NEW
///NEW FRUIT
app.get('/fruits/new', (req, res) => {
    res.render('./fruits/new');
});

///NEW VEGGIE
app.get('/vegetables/new', (req, res) => {
    res.render('./vegetables/new');
});

//////CREATE
///CREATE FRUIT
app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ 
        req.body.readyToEat = true;
    } else { 
        req.body.readyToEat = false;
    }
    Fruit.create(req.body).then((createdFruit) => {
       res.redirect('/fruits')
       res.send(createdFruit);
    })
    .catch(error => {
        console.error(error)
    })
});

///CREATE VEGGIE
app.post('/vegetables', (req, res)=>{
    if(req.body.readyToEat === 'on'){ 
        req.body.readyToEat = true;
    } else { 
        req.body.readyToEat = false;
    }
    Vegetable.create(req.body).then((createdVegetable) => {
        res.redirect('/vegetables')
        res.send(createdVegetable);
    })
    .catch(error => {
        console.error(error)
    })
});

//////SHOW
///SHOW FRUIT
app.get('/fruits/:id', (req, res) => {
    Fruit.findOne({_id: req.params.id}).then((foundFruit) => {
    res.render('./fruits/show', {
        fruit: foundFruit
    })
    })
    .catch(error => {
        console.error(error)
    })
});

///SHOW VEGETABLE
app.get('/vegetables/:id', (req, res) => {
    Vegetable.findOne({_id: req.params.id}).then((foundVegetable) => { 
    res.render('./vegetables/Show', {
        vegetable: foundVegetable
    })
    })
    .catch(error => {
        console.error(error)
    })
});

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.listen(3000,  () => {
    console.log("Listening on Port 3000")
})

