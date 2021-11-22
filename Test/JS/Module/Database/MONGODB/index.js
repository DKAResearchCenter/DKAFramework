import DKA, {Functions, Helper, Server, Security, Database, Options, Api } from "./../../../../../JS";

const mMongoDB = async () => {
    console.log(`DKA::The Module Mongodb Loaded`)
    const mdb = await new Database.MongoDB({
        database : "test"
    }).then(async (db) => {
            console.log('berhasil');

        }).catch(async (err) => {
            console.log(err)
        })

};


export default mMongoDB;