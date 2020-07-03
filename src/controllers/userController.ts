import { Request, Response } from 'express';
import { UserModel } from '../models/user';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.find();
        res.status(200).json({
            user: user
        })   
    } catch (error) {
        res.status(400).json({
            user: error,
            message: 'Error in get users'
        }) 
    }
} 

export const saveUser = async (req: Request, res: Response) => {
    try {
        const { name, lastname, email, phone  } = req.body;
         const user = await UserModel.create({ name, lastname, email, phone });
        res.status(200).json({
            user: user,
            message: 'User saved'
        })   
    } catch (error) {
        res.status(400).json({
            user: error,
            message: 'Error in save user'
        }) 
    }
}
