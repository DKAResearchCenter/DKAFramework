import { Options } from "./../../../../../JS"

const index = {
    serverState : Options.SERVER_STATE_PRODUCTION,
    serverEnabled : true,
    serverPort : 9231,
    settings : {
        /** Ngrok Tunneling **/
        ngrok: {
            enabled: true,
            authToken: 'g3UD9sgpzrW41i6YGVWH_3w7oA58kHxKDgSNpmncba'
        }
    }
};

export default index;