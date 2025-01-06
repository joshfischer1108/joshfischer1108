
import {v4 as uuidv4} from 'uuid';

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

async function writeToDynamo(dataToWrite) {
    // Fetch data from a database or perform server-side operations
    const client = new DynamoDBClient({
        region: "us-east-1",

    });
    const docClient = DynamoDBDocumentClient.from(client)

    const command  = new PutCommand({
        TableName: "contact_us_signups",
        Item: {
            contact_us_id: uuidv4(),
            first_name: dataToWrite.firstName,
            last_name: dataToWrite.lastName,
            company: dataToWrite.company,
            email: dataToWrite.email,
            country: dataToWrite.country,
            phone_number: dataToWrite.phoneNumber,
            message: dataToWrite.message,
            created: new Date().toISOString()
        },
    });

    const response = await docClient.send(command);

    return response.$metadata.httpStatusCode;
}


const dataToWrite = {
    firstName: 'Kermit',
    lastName: 'Frog',
    company: 'Kermit and Sons',
    email: 'kermit@frog.com',
    country: 'USA',
    phoneNumber: '1231231234',
    message: 'the message',
}

console.log("data to write ", dataToWrite)
writeToDynamo(dataToWrite)
    .then(response => {
        console.log('response from dynamo is ' + response)
    })


