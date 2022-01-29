const AWS = require('aws-sdk')
const fs = require('fs')

AWS.config.update({
    region : 'us-west-2',
    endpoint: 'http://localhost:8000'
})

var docClient = new AWS.DynamoDB.DocumentClient();

var data = JSON.parse(fs.readFileSync('moviedata.json' , 'utf-8'))
var id = 0
data.forEach(element => {
    id = id + 1;
    const params = {
        'TableName' : 'bordertest' ,
        'Item' : {
        'id' : id,
        "title" : element.title,
        "Description" : element.info.plot,
        'image_Url' : element.info.image_url}  
    }
    docClient.put(params , function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log('data added')
        }
    })
});
