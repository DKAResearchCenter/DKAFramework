import DKA, {Api, Server, Functions, Security, Database, Options} from "./../../../JS";


const enc = new Security.Encryption.DKA({
    key : "easkjhd728w2jh3iewujsfhkskdjksdjkdsjkasjkkasjjksalkdaldkasd"
});

const encrypt = enc.encode('dhikaprivate@gmail');
console.log(encrypt)
const decryption = enc.decode(encrypt);
console.log(decryption);