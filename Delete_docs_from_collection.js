var MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/firstdb',function(err,db)
{
if(err)
throw error;

var collection= db.collection('mycollection');
collection.remove({Lname:"qqq"},function(err,res)
{
console.log("Record is removed")
});
db.close();
});