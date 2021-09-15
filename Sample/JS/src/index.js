const {Server, Functions, Security, Database, Options } = require("dkaframework");

Server({
    serverPort : 9211,
    app : function (app, opts, next) {
        app.get('/', function (request, response){
            response.send('test');
        })
        next();

    }
});
