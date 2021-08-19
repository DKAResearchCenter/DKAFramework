import DKA, {Api, Server, Functions, Security, Database, Options} from "./../../../JS";


    Server({
        serverPort : 8002,
        app : async (app, opts, next) => {

            
            
            new Database.Maria
            app.io.on('connection', function (io) {
                console.log(io.id)
                io.on('browser_state', function (e){
                    console.log(e)
                })

            })
            next()
        }
    })
    /*const app = new Api.Google.Firebase({
        apiKey: "AIzaSyA0A-Z07424Aa1ZmLXft0hCEYfdeSSuCzU",
        authDomain: "test-203b1.firebaseapp.com",
        projectId: "test-203b1",
        storageBucket: "test-203b1.appspot.com",
        messagingSenderId: "634592374511",
        appId: "1:634592374511:web:041d23a0a4055ebc47351a",
        measurementId: "G-TY5SLRC7C4"
    });

    app.auth().then(async(res) => {
            res.signInWithEmailAndPassword("dhikaprivate@gmail.com", "Cyberhack2010")
                .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error)
            });*/
       /*res.createUserWithEmailAndPassword("dhikaprivate@gmail.com", "Cyberhack2010")
           .then((userCredential) => {
               // Signed in
               var user = userCredential.user;
               console.log(user.uid)
               //

           })
           .catch((error) => {
               console.error(error)
               // ..
           });*/

    /*app.firestore().then(async(res) => {
            //console.log(res)
            res.collection('karyawan').add({
                nama: "US",
                usia: 24,
                kota: "button"
            }).then(async (res) => {
                console.log(res.id);
            }).catch(async (res) => {
                console.log(res);
            })
        });*/


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

