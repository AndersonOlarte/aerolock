import { Request, Response } from "express";
import { UserType } from "@aws-sdk/client-cognito-identity-provider";
import { getCognitoUserList } from "../helpers/cognitoconfig";


export const getUsers = async (req: Request, res: Response) => {
    try {
        const retrievedUsers: UserType[] | null = await getCognitoUserList();
        res.status(200).send(retrievedUsers);
    } catch (error) {
        console.log('error getting users:', error);
        res.status(500).send('Error getting users');
    }
};
