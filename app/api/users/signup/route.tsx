import User from '../../../../lib/database/models/user.models'
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connectToDatabase } from "@/lib/database";


connectToDatabase()


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { firstName, lastName, email, password } = reqBody.values
        const { role } = reqBody.role

        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        //send verification email

        // await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id })

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}