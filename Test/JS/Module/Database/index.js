import DKA, {Functions, Helper, Server, Security, Database, Options, Api } from "./../../../../JS";
import Mongodb from "./MONGODB";

const mDatabase = async () => {
    //console.log(`DKA::Test The database Module Loaded`);
    //await Mongodb();
    const db = new Database.MariaDB({
        engine : Options.MARIADB_POOL,
        user : "developer",
        password : "Cyberhack2010",
        database : "dka_parking"
    });

    db.Read(`parkir-config-data-vehicle_in`)
        .then(async (res) => {
            console.log(res.metadata)
        }).catch(async (err) => {
            console.error(err)
    })
};


export default mDatabase;