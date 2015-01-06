var MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/firstdb',function(err,db)
{
if(err)
	throw err;
var document= [{Fname:"aaa",Lname:"bbb"},{Fname:"ppp",Lname:"qqq"}];
var collection=db.collection('mycollection');
collection.insert(document,{w:1},function(err,docs)
	{
		console.log("Record is added");
	});
});