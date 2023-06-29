import { NextResponse } from "next/server";

function createResponse(msg, success = false) {
    return NextResponse.json({
        msg,
        success
    })
}

export async function POST(request) {
    try {
        const {username, password} = await request.json();

        if (username !== 'john') {
            return createResponse('* Incorrect username. Please try again!');
        }

        if (password !== '1234') {
            return createResponse('* Incorrect password. Please try again!');
        }

        return createResponse('Login successful!', true);
        
    } catch (error) {
        console.error(error);
        return createResponse(`* An error occurred: ${error.message}`);
    }
}
