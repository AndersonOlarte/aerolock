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
exports.getCognitoUserList = exports.getCognitoClient = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
require("dotenv/config");
const getCognitoClient = () => __awaiter(void 0, void 0, void 0, function* () {
    const awsCredentials = {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_KEY || ''
    };
    const cognitoConfig = {
        credentials: awsCredentials,
        region: 'us-east-1'
    };
    const cognitoClient = yield new client_cognito_identity_provider_1.CognitoIdentityProviderClient(cognitoConfig);
    return cognitoClient;
});
exports.getCognitoClient = getCognitoClient;
const getCognitoUserList = () => __awaiter(void 0, void 0, void 0, function* () {
    const cognitoClient = yield (0, exports.getCognitoClient)();
    const input = {
        UserPoolId: process.env.USER_POOL_ID,
    };
    const command = new client_cognito_identity_provider_1.ListUsersCommand(input);
    const userList = (yield cognitoClient.send(command)).Users;
    let userResponse = [];
    if (userList) {
        userList.forEach(userRetrieved => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            const userUpdated = {
                "email": ((_b = (_a = userRetrieved.Attributes) === null || _a === void 0 ? void 0 : _a.find(atrr => atrr.Name === 'email')) === null || _b === void 0 ? void 0 : _b.Value) || '',
                "name": ((_d = (_c = userRetrieved.Attributes) === null || _c === void 0 ? void 0 : _c.find(atrr => atrr.Name === 'name')) === null || _d === void 0 ? void 0 : _d.Value) || '',
                "flightID": "2398429832",
                "CC": ((_f = (_e = userRetrieved.Attributes) === null || _e === void 0 ? void 0 : _e.find(atrr => atrr.Name === 'custom:CC')) === null || _f === void 0 ? void 0 : _f.Value) || '',
                "IsInControlList": false,
                "Tel": ((_h = (_g = userRetrieved.Attributes) === null || _g === void 0 ? void 0 : _g.find(atrr => atrr.Name === 'name')) === null || _h === void 0 ? void 0 : _h.Value) || '',
                "lastLogin": "2024-04-25",
                "Nationality": "Colombia",
                "Birthday": "2004-04-20",
                "EmergencyContact": ((_k = (_j = userRetrieved.Attributes) === null || _j === void 0 ? void 0 : _j.find(atrr => atrr.Name === 'custom:emergencyContact')) === null || _k === void 0 ? void 0 : _k.Value) || '',
                "Occupation": ((_m = (_l = userRetrieved.Attributes) === null || _l === void 0 ? void 0 : _l.find(atrr => atrr.Name === 'name')) === null || _m === void 0 ? void 0 : _m.Value) || '',
            };
            userResponse.push(userUpdated);
        });
    }
    return userResponse || null;
});
exports.getCognitoUserList = getCognitoUserList;
