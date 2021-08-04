import DKA, {Functions, Security, Database, Options } from "./../../../JS";
import tesseract from "node-tesseract-ocr"

const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
}

tesseract
    .recognize("./image.png", config)
    .then((text) => {
        console.log("Result:", text)
    })
    .catch((error) => {
        console.log(error.message)
    })

import cryptoJS from "crypto-js";
// Create an encryptor:

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

