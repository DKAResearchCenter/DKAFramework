import {Database, Security, Functions } from "./../../../../../../../JS";
import _ from "lodash";

const v1 = async(app, opts, next) => {

    /***
     * @type {*}
     */
    const DB = await new Database.MariaDB({
        engine : Database.MariaDB.MARIADB_POOL,
        host : 'localhost',
        user : 'developer',
        password : "Cyberhack2010",
        database : "dka"
    });

    await app.get('verify', function (request, response) {
        response.send(request.headers);
    });

    await app.get('/accesstoken', function (request, response) {

        new Promise(async (resolve, rejected) => {
            if (request.headers.authorization !== undefined){
                const splitAutorize = request.headers.authorization.split(" ");
                (request.headers['content-type'] === 'application/x-www-form-urlencoded') ?
                    resolve(splitAutorize) :
                    rejected({ status : false, code : 500, msg : 'Content-Type in Header Not Exist'});
            }else{
                rejected({ status : false, code : 500, msg : 'Authorization in Header Not Exist' });
            }

        }).then(async(resolve) => {
            /** Function For Data In The Integrated System **/
            DB.Read(`dka-bigdata-system_developer`, { search : [{ secretkey : resolve[1] }]})
                .then(async (res) => {

                    const encryptData = _.extend({
                        token : new Functions.Encryption.Crypto().encode(JSON.parse(res.data))
                    }, res);

                    console.log(encryptData)
                    response.code(res.code).send(encryptData);
                }).catch(async (error) => {
                    response.code(error.code).send(error);
                });

        }).catch(async(error) => {
            response.code(error.code).send(error);
        });


    });

    next();
};

export default v1;