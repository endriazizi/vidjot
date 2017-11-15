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

nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.
    npm install -g nodemon

where our global modules are installed locally:
    npm root -g

http://handlebarsjs.com/
https://github.com/ericf/express-handlebars

    npm install --save express-handlebars

  `-- express-handlebars@3.0.0
  +-- glob@6.0.4
  | +-- inflight@1.0.6
  | | `-- wrappy@1.0.2
  | +-- minimatch@3.0.4
  | | `-- brace-expansion@1.1.8
  | |   +-- balanced-match@1.0.0
  | |   `-- concat-map@0.0.1
  | +-- once@1.4.0
  | `-- path-is-absolute@1.0.1
  +-- graceful-fs@4.1.11
  +-- handlebars@4.0.11
  | +-- async@1.5.2
  | +-- optimist@0.6.1
  | | +-- minimist@0.0.10
  | | `-- wordwrap@0.0.3
  | +-- source-map@0.4.4
  | | `-- amdefine@1.0.1
  | `-- uglify-js@2.8.29
  |   +-- source-map@0.5.7
  |   +-- uglify-to-browserify@1.0.2
  |   `-- yargs@3.10.0
  |     +-- camelcase@1.2.1
  |     +-- cliui@2.1.0
  |     | +-- center-align@0.1.3
  |     | | +-- align-text@0.1.4
  |     | | | +-- kind-of@3.2.2
  |     | | | | `-- is-buffer@1.1.6
  |     | | | +-- longest@1.0.1
  |     | | | `-- repeat-string@1.6.1
  |     | | `-- lazy-cache@1.0.4
  |     | +-- right-align@0.1.3
  |     | `-- wordwrap@0.0.2
  |     +-- decamelize@1.2.0
  |     `-- window-size@0.1.0
  +-- object.assign@4.0.4
  | +-- define-properties@1.1.2
  | | `-- foreach@2.0.5
  | +-- function-bind@1.1.1
  | `-- object-keys@1.0.11
  `-- promise@7.3.1
    `-- asap@2.0.6


TIPS: this come with Emett, Visual Code comes by default with it, 
to others ide you need to install plugin for it,
h1 and tab to autocomplet every tag you need