import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {username, password} = await request.json();

        if (username !== 'john') {
            return NextResponse.json({
                msg: '* Incorrect username. Please try again!',
                success: false
            })
        }

        if (password !== '1234') {
            return NextResponse.json({
                msg: '* Incorrect password. Please try again!',
                success: false
            })
        }

        return NextResponse.json({
            success: true
        })
        
    } catch (error) {
        return NextResponse.json({
            msg: '* Invalid request!',
            success: false
        })
    }
}
