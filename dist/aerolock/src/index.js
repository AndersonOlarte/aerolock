"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = 80;
function main() {
    try {
        app_1.default.listen(PORT);
        console.log('Server listening port: ', PORT);
    }
    catch (error) {
    }
}
main();
