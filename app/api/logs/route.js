import { NextResponse } from "next/server";

let id = 5;
const logs = [
  { id: 1, name: 'TV', action: 'Turn On', ip: '192.168.1.1', date: '2023-06-30' },
  { id: 2, name: 'Washer', action: 'Turn Off', ip: '192.168.1.1', date: '2023-06-30' },
  { id: 3, name: 'Refrigerator', action: 'Set up', ip: '192.168.1.1', date: '2023-06-30' },
  { id: 4, name: 'Selling Fan', action: 'Turn On', ip: '192.168.1.1', date: '2023-06-30' },
  { id: 5, name: 'Laptop', action: 'Turn On', ip: '192.168.1.1', date: '2023-06-30' },
];

function createResponse(msg, success = false, data = null) {
    return NextResponse.json({
        msg,
        success,
        data
    })
}

export async function GET(request) {
    try {
        return NextResponse.json({
            logs
        });
    } catch (error) {
        console.error(error);
        return createResponse(`* An error occurred: ${error.message}`);
    }
}

