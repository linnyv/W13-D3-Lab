const express = require('express')
const app = express();

const fruits = require('./models/fruits.js');

const vegetables = require('./models/vegetables.js');


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.use(express.urlencoded({extended:false}));

//////INDEX
app.get('/',  (req, res) => {
    res.send('<h1>Hello WISE!</h1>')
})

//////FRUIT INDEX
app.get('/fruits', (req, res) => {
    res.render('./fruits/index', {
        fruits: fruits
    });
});

//////VEGETABLES INDEX
app.get('/vegetables', (req, res) => {
    res.render('./vegetables/index', {
        vegetables: vegetables
    });
});

///////NEW
//Page with form to create a new fruit
app.get('/fruits/new', (req, res) => {
    res.render('./fruits/new');
});

//Page with form to create a new veggie
app.get('/vegetables/new', (req, res) => {
    res.render('./vegetables/new');
});

//////SHOW
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render('./fruits/show', {
        fruit: fruits[req.params.indexOfFruitsArray]
    });

});

app.get('/vegetables/:indexOfVegetablesArray', (req, res) => {
    res.render('./vegetables/show', {
        vegetables: vegetables[req.params.indexOfVegetablesArray]
    });

});

//////CREATE
//Post Route
app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ 
        req.body.readyToEat = true;
    } else { 
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/fruits'); 
});

app.post('/vegetables', (req, res)=>{
    if(req.body.readyToEat === 'on'){ 
        req.body.readyToEat = true;
    } else { 
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/vegetables'); 
});

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.listen(3000,  () => {
    console.log("Listening on Port 3000")
})

