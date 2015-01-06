 var MongoClient = require('mongodb').MongoClient
   

  MongoClient.connect('mongodb://localhost:27017/firstdb', function(err, db) {
    if(err) throw err;

    var collection = db.collection('test');
   
     collection.count({b:2},function(err, count) {
      console.log("there are " + count + " Records");
     });

      // Locate all the entries using find
      collection.find().toArray(function(err, results) {
        console.dir(results);
        db.close();
      });
   
  })