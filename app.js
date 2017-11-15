/*
Es6 sintax that why I am using const
instead of var, fat arrow, promises are Es6 sintax
*/
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

const port = 5000

//listen method
//app.listen(3000)
/* app.listen(port, function(){

}); */
//ARROW FUNCTION
//https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/template_strings
//http://exploringjs.com/es6/ch_template-literals.html
app.listen(port, ()=>{
    //template string or template literal using back ticks
    console.log(`Server started at ${port}`);
    console.log("Server started at "+ port);
});