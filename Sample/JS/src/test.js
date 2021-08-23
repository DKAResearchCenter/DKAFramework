import DKA, {Api, Server, Functions, Security, Database, Options} from "./../../../JS";


new Database.MariaDB({
    host : "localhost",
    user : "developer",
    password : "Cyberhack2010",
    database : "tes"
}).Read('test')
.then(async (res) => {
    console.log(res);
})
.catch(async (error) => {
    console.error(error)
})