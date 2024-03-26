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
    return userList || null;
    //     let users: any = [];
    //     const user = {
    //         "email": cognitoUser.Attributes.find(atrr=>atrr.Name === 'email')?.Value || '',
    //         "name": cognitoUser.Attributes.find(atrr=>atrr.Name === 'name')?.Value || '',
    //         "flightID": "2398429832",
    //         "CC": cognitoUser.Attributes.find(atrr=>atrr.Name === 'custom:CC')?.Value || '',
    //         "IsInControlList": false,
    //         "Tel": cognitoUser.Attributes.find(atrr=>atrr.Name === 'name')?.Value || '',
    //         "lastLogin": "2024-04-25",
    //         "Nationality": "Colombia",
    //         "Birthday": "2004-04-20",
    //         "EmergencyContact": cognitoUser.Attributes.find(atrr=>atrr.Name === 'custom:emergencyContact')?.Value || '',
    //         "Occupation": cognitoUser.Attributes.find(atrr=>atrr.Name === 'name')?.Value || '',
    //  }
    //  users.push(retrievedUsers);
    //     if (cognitoRes.Users){
    //         cognitoRes.Users?.forEach(cognitoUser => {
    //             if (cognitoUser.Attributes) {
    //             }
    //         })
    //     }
});
exports.getCognitoUserList = getCognitoUserList;
