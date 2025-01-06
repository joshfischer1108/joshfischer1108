# Write to DynamoDB with the AWS Javascript v3 SDK

## Set up authentication with AWS
[Javascript v3 Credentials](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-your-credentials.html)

## Create your DynamoDB table
```shell
 aws dynamodb create-table \
    --table-name contact_us_signups \
    --attribute-definitions AttributeName=contact_us_id,AttributeType=S \
    --key-schema AttributeName=contact_us_id,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
```

## Install deps
```shell
npm install
```

## Run the script!
```shell
npm run dev
```
If successfully set up you should see the following in your terminal.
```shell
data to write  {
  firstName: 'Kermit',
  lastName: 'Frog',
  company: 'Kermit and Sons',
  email: 'kermit@frog.com',
  country: 'USA',
  phoneNumber: '1231231234',
  message: 'the message'
}
response from dynamo is 200
```


