var MongoClient=require('Mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/firstdb',function(error,db)
{
if(error)
throw error;

var collection = db.collection('mycollection');
collection.update({Fname:"aaa"},{$set:{Lname:"fff"}},{W:1},function(err,doc)
{
console.log("Records updated:");
});

});
