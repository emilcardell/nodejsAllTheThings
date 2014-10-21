
var Promise = require('bluebird');



sql = require('node-sqlserver-unofficial');
sql.query(conn_str, "... ", function (err, results) { 
	results.forEach(function(x) {

	});
}
var sqlQueryPromised = Promise.promisify(require('node-sqlserver-unofficial').query);

var promise = sqlQuery(config.PriceDb, query).then(function (results) { 

});









var options = {
		uri: 'http://www.google.com',
		method: 'POST',
		body: body,
		headers: {
			'Content-Type': 'text/xml'
		}
	};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})

var request = Promise.promisify(require('request'));
var reqPromise =  request(options).then(function(body) {
	//Code here
});


agent
	.post("url")
	.send(body)
	.end(function(error, result) {
		//Kod här				
	});









//Elasticsearch
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

client.search({
  index: 'twitter',
  type: 'tweets',
  body: {
    query: {
      match: {
        body: 'elasticsearch'
      }
    }
  }
}).then(function (resp) {
    var hits = resp.hits.hits;
}, function (err) {
    console.trace(err.message);
});

var request = Promise.promisify(require('request'));


 








var promisedFunc = function() {
	var deferred = Q.defer();
	setTimeout(function(){
		deferred.resolve();
	});
	return deferred.promise;
		
}

