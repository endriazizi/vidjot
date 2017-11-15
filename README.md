"# vidjot" 


    npm install --save express
        +-- qs@6.5.1
        +-- range-parser@1.2.0
        +-- safe-buffer@5.1.1
        +-- send@0.16.1
        | +-- destroy@1.0.4
        | `-- mime@1.4.1
        +-- serve-static@1.13.1
        +-- setprototypeof@1.1.0
        +-- statuses@1.3.1
        +-- type-is@1.6.15
        | `-- media-typer@0.3.0
        +-- utils-merge@1.0.1
        `-- vary@1.1.2

"# create entry point that is app.js"

//ARROW FUNCTION
//https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/template_strings
//http://exploringjs.com/es6/ch_template-literals.html
    app.listen(port, ()=>{
        //template string or template literal using back ticks
        console.log(`Server started at ${port}`);
        console.log("Server started at "+ port);
    });

RUN app.js
    node app.js 
or
    node app