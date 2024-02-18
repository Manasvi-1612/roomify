import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, required: true, default: "student" },
})

const User = models.User || model('User', UserSchema);

export default User;