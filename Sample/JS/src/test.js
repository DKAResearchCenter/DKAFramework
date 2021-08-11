import DKA, {Server, Functions, Security, Database, Options} from "./../../../JS";
import moment from "moment";
import Nvr from "hikvision-api";


(async() => {
    new Database.MariaDB({
        host : "localhost",
        user : "developer",
        password : "Cyberhack2010",
        database : "tes",
        autoBackup : true,
    }).Read('test')
        .then(async (resolve) => {
            console.log(resolve)
        })
        .catch(async (err) => {
            console.log(err)
        })
})()

// Create an encryptor:


/* new Database.MariaDB({
     host : "192.168.72.102",
     user : "developer",
     password : "Cyberhack2010",
     database : "dka_parking"
 }).Create(`parkir-config-data-vehicle_in`, {
     data : {
         id_config_child_gate : 2,
         ticket_number : 2222,
         status : false
     }
 }).then(async(resolve) => {
     console.log(resolve)
 }).catch(async(resolve) => {
     console.log(resolve);
 })*/


/*const printer = new Functions.Hardware.Printer.Escpos()
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((err) => {
        console.error(err);
    })*/

/*new Database.MariaDB({
    host : "192.168.1.100",
    user : "developer",
    password : "Cyberhack2010",
    database : "pappri",
    encryption : false
})
    .Read("pappri_user_login")
    .then(async (resolve) => {
        console.log(resolve)
    })
    .catch(async (error) => {
        console.log(error)
    })*/

/**
 * {
        data : {
            nama_lengkap : "Yovangga",
            username : "dhika",
            password : "dhanti",
            level_access : "master",
            no_telp : "3233333",
            alamat : "jl Rappojawa",
            waktu : "selasa"
        }
    }
 */
/*new Database.MariaDB({
    host : "192.168.1.100",
    user : "developer",
    password : "Cyberhack2010",
    database : "pappri",
    encryption : true
})
    .init("pappri-user_login", {
        id_user_login : {
            typeData : "BIGINT",
            primaryKey : true,
            autoIncrement : true,
            defaultNotNull : true
        },
        nama_lengkap : {},
        username : {},
        password : {},
        level_access : {},
        no_telp : {},
        alamat : {},
        waktu : {}
    })
    .then(async (resolve) => {
        console.log(resolve)
    })
    .catch(async (error) => {
        console.log(error)
    })*/

