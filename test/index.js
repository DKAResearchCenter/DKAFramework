const {Api, Server, Functions, Security, Database, Options} = require("./../JS");

const file = new Functions.File()
    .getFileRoot();

console.log(file)