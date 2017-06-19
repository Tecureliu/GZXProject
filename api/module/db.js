var mongodb = require('mongodb');

var ApiResult = require('./ApiResult')

var server = new mongodb.Server('10.3.133.21', 27017);

var db = new mongodb.Db('gzx', server);

module.exports = function(){
	return db;	
};
