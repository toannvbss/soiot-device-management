import { NextResponse } from "next/server";

let id = 4;
const devices = [
  { id: 1, name: 'TV', macAddress: '00:0a:95:9d:68:16', ip: '192.168.1.1', createdDate: '2023-06-30', powerConsumption: 50 },
  { id: 2, name: 'Washer', macAddress: '00:0a:95:9d:68:16', ip: '192.168.1.1', createdDate: '2023-06-30', powerConsumption: 60 },
  { id: 3, name: 'Refrigerator', macAddress: '00:0a:95:9d:68:16', ip: '192.168.1.1', createdDate: '2023-06-30', powerConsumption: 80 },
  { id: 4, name: 'Selling Fan', macAddress: '00:0a:95:9d:68:16', ip: '192.168.1.1', createdDate: '2023-06-30', powerConsumption: 100 },
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
            devices
        })
    } catch (error) {
        console.error(error);
        return createResponse(`* An error occurred: ${error.message}`);
    }
}

export async function POST(request) {
    try {
        const { name, ip } = await request.json();
        id++;
        const createdDate = '2023-06-30';
        const macAddress = '00:0a:95:9d:68:16';
        const powerConsumption = 10;
        const newDevice = { id, name, macAddress, ip, createdDate, powerConsumption };
        devices.push(newDevice);
        return createResponse('Device added successfully', true, newDevice);
    } catch (error) {
        console.error(error);
        return createResponse(`* An error occurred: ${error.message}`);
    }
}
