import DKA, {Api, Server, Functions, Security, Database, Options} from "./../../../JS";
import path from "path";

const file = new Functions.File()
.getFileRoot();

console.log(file)