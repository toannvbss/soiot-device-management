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
        const searchParams = request.nextUrl.searchParams;
        const pageIndex = Number(searchParams.get('pageIndex') | 1);
        const pageSize = Number(searchParams.get('pageSize')) | 10;
        const offset = (pageIndex - 1) * pageSize;
        const pageLogs = logs.slice(offset,  offset + pageSize);
        return NextResponse.json({
            logs: pageLogs,
            total: logs.length
        });
    } catch (error) {
        console.error(error);
        return createResponse(`* An error occurred: ${error.message}`);
    }
}

