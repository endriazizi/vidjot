/*
Es6 sintax that why I am using const
instead of var, fat arrow, promises are Es6 sintax
*/
const express = require('express')
const app = express()
const exphbs  = require('express-handlebars')

// Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

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
app.use((req, res, next)=>{
    //console.log('Date ' + Date.now());
    req.name = 'Endri Azizi';
    next();
});

//Index Route
/* app.get('/', function (req, res) {
    res.send('Hello World');
}); */

//Handlebar use render for send to the browser
app.get('/',(req, res) => {
    //inside we define the index handlebars page for randering at that  route
    //passing dynamic data to our view
    const title = 'Welcome Back';
    res.render('index', {
        title: title
    });
    

});

app.get('/test', (req, res) => {
    //send something to the browser
    console.log(req.name);
    res.send('TEST');
});

app.get('/about', (req, res) => {
    //send something to the browser
    res.send('ABOUT');
});


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
    console.log("Server started at " + port);
});