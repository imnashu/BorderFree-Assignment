const express = require('express')
const AWS = require('aws-sdk')
var cors = require('cors')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
AWS.config.update({
    region : 'us-west-2',
    endpoint: 'http://localhost:8000'
})
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(logger('dev'));
var docClient = new AWS.DynamoDB.DocumentClient();
app.post('/loaddata' , (req,res) => {
    const params = {
        TableName: 'bordertest',
        FilterExpression:
        "attribute_not_exists(deletedAt) AND begins_with(title, :title)",
        ExpressionAttributeValues: {
        ":title": req.body.title,
      },
      } 
      docClient.scan(params , function(err , data){
        if(err){
            console.log(err)
        }else{
            console.log(data)
            console.log("If")
            res.send(data)
        }
      })
    // console.log(req.body.title)
})

app.post('/updateurl' , (req , res) => {
    console.log('in update')
    console.log(req.body.title)
    var params = {
        TableName: "bordertest",
        Key: {
            "title": req.body.title
        },
        UpdateExpression: "set image_Url=:s",
        ExpressionAttributeValues: {
            ":s": "https://google.com"
        },
        ReturnValues: "UPDATED_NEW"
    };
    console.log("Updating Cars table.");
    docClient.update(params, function (err, data) {
        if (err) {
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
        }
    });
})
app.listen(5000,() => console.log('listening on port 5000!'))
