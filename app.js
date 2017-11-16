/*
Es6 sintax that why I am using const
instead of var, fat arrow, promises are Es6 sintax
*/
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')

//to remove warning: 
/*(node:16564) DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library
instead: http://mongoosejs.com/docs/promises.html */
//Map global promise - get rid of warning
mongoose.Promise = global.Promise;

//connect to mongoose
mongoose.connect('mongodb://localhost:27017/vidjot-dev', {useMongoClient: true})
//promise or callback but we are using promise in the following code
.then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// Load Idea Model
require('./models/Ideas');
//load the model into a variable
const Idea = mongoose.model('ideas');


// Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Body parser
// https://github.com/expressjs/body-parser
const bodyParser = require('body-parser')

//Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/*How middleware works 
http://expressjs.com/it/guide/using-middleware.html
*/
/* app.use(function(req, res, next){
    //console.log('Date ' + Date.now());
    req.name = 'Endri Azizi';
    next();
}); */

/*
we have access to that req [request] obkect we added something to it*/
app.use((req, res, next) => {
    //console.log('Date ' + Date.now());
    req.name = 'Endri Azizi';
    next();
});

//Index Route
/* app.get('/', function (req, res) {
    res.send('Hello World');
}); */

//Handlebar use render for send to the browser

// Home Route
app.get('/', (req, res) => {
    //inside we define the index handlebars page for randering at that  route
    //passing dynamic data to our view
    const title = 'Welcome Back';
    res.render('index', {
        title: title
    });
});

// About Route
app.get('/about', (req, res) => {
    //inside we define the index handlebars page for randering at that  route
    //passing dynamic data to our view
    const title = 'About Page';
    res.render('about', {
        title: title
    });
});


// Add Idea Form Route
app.get('/ideas/add', (req, res) => {
    res.render('ideas/add');
});

//Process Form
app.post('/ideas', (req, res) =>{
    //we can access with bodyparser to the body when is submitted
/*     console.log(req.body);
    res.send('ok'); */
    // a errors variable setted as an empty array
    let errors = [];
    // requests.body -> req.body is an Object with all of our form fields
    // so we can access each one with title
    // if there is no title then we are going to take that error's array 
    // and we are going to push on to it an Object with text
    if(!req.body.title){
        //text is an object
        errors.push({text:'Please add a title'});
    }
    if(!req.body.details){
        errors.push({text:'Please add some details'});
    }
    if(errors.lenght > 0){
        res.render('ideas/add', {
            errors: errors,
            title: req.body.title,
            details: req.body.details
        });
    } else {
        res.send('passed');
        console.log(req.body);
    }
});


//BEGINNING ROUTES
app.get('/test', (req, res) => {
    //send something to the browser
    console.log(req.name);
    res.send('TEST');
});

// app.get('/about', (req, res) => {
//     //send something to the browser
//     res.send('ABOUT');
// });


const port = 5000

//listen method
//app.listen(3000)
/* app.listen(port, function(){

}); */

/*
ARROW FUNCTION
https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/template_strings
http://exploringjs.com/es6/ch_template-literals.html
*/
app.listen(port, () => {
    //template string or template literal using back ticks
    console.log(`Server started at ${port}`);
    
    
    //console.log("Server started at " + port);
});