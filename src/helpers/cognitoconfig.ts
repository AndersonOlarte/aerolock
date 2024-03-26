import { CognitoIdentityProviderClient, CognitoIdentityProviderClientConfig, ListUsersCommand, UserType } from "@aws-sdk/client-cognito-identity-provider";
import { AwsCredentialIdentity } from "@aws-sdk/types";
import "dotenv/config";


export const getCognitoClient = async (): Promise<CognitoIdentityProviderClient>  => {
    const awsCredentials: AwsCredentialIdentity = {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_KEY || ''
    };
    const cognitoConfig: CognitoIdentityProviderClientConfig = {
        credentials: awsCredentials,
        region: 'us-east-1'
    };
    const cognitoClient = await new CognitoIdentityProviderClient(cognitoConfig);
    return cognitoClient;
};


export const getCognitoUserList = async (): Promise<UserType[] | null> => {
    const cognitoClient = await getCognitoClient();
    const input = {
        UserPoolId: process.env.USER_POOL_ID,
    }
    const command = new ListUsersCommand(input);
    const userList: UserType[] | undefined = (await cognitoClient.send(command)).Users;
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



}