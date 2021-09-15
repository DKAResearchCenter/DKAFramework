import {Api, Server, Functions, Security, Database, Options} from "dkaframework";





/*new Database.MariaDB(dbconfig)
    .Read('product', {
        search : [
            { id : 1 }
        ]
    })
    .then(function (data) {
    console.log(data)
})
    .catch(function (error) {
        console.log('error')
    })*/


/*const BRI = new Api.ThirdParty.Payment.Banking.BRI({
    client_id : 'zSAyjUMqOhfZNVm9ybgKCH3BTwl8lEku',
    client_secret : '4sTZ0bVvIODUTB6X'
})

BRI.accessToken()
    .then(async (res) => {
        //console.log(res.data);
        BRI.getAccountInfo({
            accountNumber : 888801000157508,
            token : res.data.access_token
        }).then(async (res) => {
            console.log(res);
        })
            .catch(async (error) => {
                console.error(error)
            })
    })
    .catch(async (error) => {
        console.error(error)
    })*/
