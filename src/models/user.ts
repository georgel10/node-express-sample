import { Document, model, Schema } from 'mongoose';

export interface User extends Document {
    name: string;
    lastname: string;
    email: string;
    phone: string;
}

const userSchema = new Schema(
    {
        name: {
            type: String,
            unique: false,
        },
        lastname: {
            type: String,
            unique: false,
        },
        email: {
            type: String,
            unique: true,
        },
        phone: {
            type: String,
            unique: false,
        },
    }
);


export const UserModel = model<User>('users', userSchema);
