"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const cognitoconfig_1 = require("../helpers/cognitoconfig");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retrievedUsers = yield (0, cognitoconfig_1.getCognitoUserList)();
        res.status(200).send(retrievedUsers);
    }
    catch (error) {
        console.log('error getting users:', error);
        res.status(500).send('Error getting users');
    }
});
exports.getUsers = getUsers;
