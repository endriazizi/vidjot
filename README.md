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

added template handlebars engine
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

TIPS: using Emmit ! and tab for html template 


BOOTSTRAP http://getbootstrap.com/docs/4.0/getting-started/introduction/
views/main.handlebars

Mongoose
http://mongoosejs.com/docs/
    npm install --save mongoose

  `-- mongoose@4.13.2
  +-- async@2.1.4
  | `-- lodash@4.17.4
  +-- bson@1.0.4
  +-- hooks-fixed@2.0.2
  +-- kareem@1.5.0
  +-- lodash.get@4.4.2
  +-- mongodb@2.2.33
  | +-- es6-promise@3.2.1
  | +-- mongodb-core@2.1.17
  | | `-- require_optional@1.0.1
  | |   +-- resolve-from@2.0.0
  | |   `-- semver@5.4.1
  | `-- readable-stream@2.2.7
  |   +-- buffer-shims@1.0.0
  |   +-- core-util-is@1.0.2
  |   +-- isarray@1.0.0
  |   +-- process-nextick-args@1.0.7
  |   +-- string_decoder@1.0.3
  |   `-- util-deprecate@1.0.2
  +-- mpath@0.3.0
  +-- mpromise@0.5.5
  +-- mquery@2.3.2
  | +-- bluebird@3.5.1
  | `-- sliced@0.0.5
  +-- muri@1.3.0
  +-- regexp-clone@0.0.1
  `-- sliced@1.0.1

Example Mongoose Connection:

    //to remove warning: 
    /*(node:16564) DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library
    instead: http://mongoosejs.com/docs/promises.html */
    mongoose.Promise = global.Promise;
    //Mongodb Connection
    mongoose.connect(config.database, { useMongoClient: true });

    // On Connection
    mongoose.connection.on('connected', () => {
        console.log('Connected to database '+config.database);
    });
    
    // On Error
    mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err);
    });


TO LEARN:
promise or callback but we are using promise in the following code
might me related to Es6

Create Model using schema