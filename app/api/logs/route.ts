import { NextRequest, NextResponse } from "next/server";

let id = 12;
const logs = [
  { id: 1, name: 'TV', action: 'Turn On', ip: '192.168.1.1', date: '2023-06-30' },
  { id: 2, name: 'Washer', action: 'Turn Off', ip: '192.168.1.1', date: '2023-06-30' },
  { id: 3, name: 'Refrigerator', action: 'Set up', ip: '192.168.1.1', date: '2023-06-30' },
  { id: 4, name: 'Selling Fan', action: 'Turn On', ip: '192.168.1.1', date: '2023-06-30' },
  { id: 5, name: 'Laptop', action: 'Turn On', ip: '192.168.1.1', date: '2023-06-30' },
  { id: 6, name: 'TV-1', action: 'Turn On', ip: '192.168.1.1', date: '2023-06-30' },
  { id: 7, name: 'Washer-1', action: 'Turn Off', ip: '192.168.1.1', date: '2023-06-30' },
  { id: 8, name: 'Refrigerator-1', action: 'Set up', ip: '192.168.1.1', date: '2023-06-30' },
  { id: 9, name: 'Selling Fan-1', action: 'Turn On', ip: '192.168.1.1', date: '2023-06-30' },
  { id: 10, name: 'Laptop-1', action: 'Turn On', ip: '192.168.1.1', date: '2023-06-30' },
  { id: 11, name: 'TV-2', action: 'Turn On', ip: '192.168.1.1', date: '2023-06-30' },
  { id: 12, name: 'Washer-2', action: 'Turn Off', ip: '192.168.1.1', date: '2023-06-30' },
];

function createResponse(msg: string, success = false, data = null) {
    return NextResponse.json({
        msg,
        success,
        data
    })
}

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const pageIndex = Number(searchParams.get('pageIndex')) ?? 1;
        const pageSize = Number(searchParams.get('pageSize')) ?? 5;
        const searchTerm = searchParams.get('searchTerm') ?? '';
        const filterLogs = logs.filter(log => log.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
        const offset = (pageIndex - 1) * pageSize;
        const pageLogs = filterLogs.slice(offset,  offset + pageSize);
        return NextResponse.json({
            logs: pageLogs,
            total: filterLogs.length
        });
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            return createResponse(`* An error occurred: ${error.message}`);
        }
    }
}

