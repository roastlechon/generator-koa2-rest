# Yeoman koa@next RESTful generator

This yo generator is based off PatrickWolleb's [generator-koa-rest](https://github.com/PatrickWolleb/generator-koa-rest). I modified the generator to use newer ES2015 syntax and to generate an ES2015 koa@next application.

## Scaffolded App
* node@~5.4.1
* koa@next
    * [koa-morgan](https://github.com/koa-modules/morgan) - Used for logging
    * [koa-mount@next](https://github.com/koajs/mount/tree/next) - Used for mounting applications/endpoints/middleware
    * [koa-router@next](https://github.com/alexmingoia/koa-router/tree/master/) - Used for Express-style routing
    * [koa-bodyparser@next](https://github.com/koajs/bodyparser/tree/next) - Used for parsing JSON from koa request body
    * [koa-compress@next](https://github.com/koajs/compress/tree/v2.x) - Used for http compression

See [list of middleware/libraries](https://github.com/koajs/koa/wiki) compatible with koa@next

## Features
* No gulp/grunt necessary, just use `npm run` commands. See available commands by typing `npm run` on generated app
* Liberal usage of arrow functions, const, let, async/await, and class via ES2015 and babel
* Directory structure follows:

```
app - Main project folder
   /src - This is where all source code goes
       /api - Folder contains all the endpoints
           /root - Folder names are specific to endpoint/API resource names
                /index.js - Sub endpoint routes are defined here and reference controller functions
                /root.controller.js - Controller functions used for export to index.js
                /root.model.js - Model functions used for business logic of controller
       /config - Folder contains all the config/setup for the microservice
              /index.js - Contains all configs. Should prioritize environmental variables
              /koa.js - Middleware integration starts here
              /routes.js - This is where all the main routes are defined
       /server.js - Starting point for microservice
   /test - All tests go here. Tests must end with .test.js
        /e2e - All end to end tests go here
        /unit - All unit tests go here. The structure should mimic src folder
   package.json
```

## Install
To install generator-koa2-rest, run:

```
npm install -g generator-koa2-rest
```

Create a folder for your project and navigate into it

```
--- ~/projects » mkdir sample-app
--- ~/projects » cd sample-app 
--- projects/sample-app » 
```

Run `yo koa2-rest`

Run `npm start` and navigate to localhost:9000

## Creating another endpoint
Navigate to project folder and run `yo koa2-rest:api resource-name`

This will create a folder under `src/api/` with the name of the resource with an index, controller, model. Test files will be generated in test/e2e and test/unit

From there, you can add new routes, modify the existing index route, etc.

**Note:** Make sure to modify src/config/routes.js file to add the new endpoint.

## Questions/Concerns?

Feel free to add an issue for feature requests or problems with the generator
