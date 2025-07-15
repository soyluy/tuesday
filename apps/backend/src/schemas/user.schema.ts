import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import type { User } from "../types/user.interface";
import { Document, Types } from "mongoose";

@Schema({
  timestamps: true,
})
export class UserDocument extends Document<Types.ObjectId> implements User {

    get userId(): number {
        return this._id as unknown as number; // Assuming _id is a number, adjust if necessary
    }

    @Prop({
        type: String,
        required: true,
        unique: true,
        index: true,
    })
    username!: string;

    @Prop({
        type: String,
        required: false,
        select: false
    })
    passwordHash?: string;

    @Prop({
        type: String,
        required: true,
        unique: true,
        index: true,
    })
    email!: string;

    @Prop({
        type: String,
        required: false,
        default: null,
    })
    fullName?: string;

}

export const UserSchema = SchemaFactory.createForClass(UserDocument);