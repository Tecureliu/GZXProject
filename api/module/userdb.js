var db = require('./db.js')();
//后台登录
var managerLogin = function(_collection,data,callback){
	db.open(function(err,db){
		if(err){
			console.log('connect db:',err);
		}

		db.collection(_collection,function(err,collection){
			if(err){
				console.log('connect collection:',err);
			}

			collection.find({name:data.name,password:data.password}).toArray(function(err,doc){
				if(err){
					console.log('find err:',err);
				}
				callback(doc);
				db.close();
			})
		})
	})
}
//后台注册
var managerRegister = function(_collection,data,key,callback){
	db.open(function(err,db){
		if(err){
			console.log('connect db:',err);
		}

		db.collection(_collection,function(err,collection){
			if(err){
				console.log('connect collection:',err);
			}

				collection.find({name:data[key]}).toArray(function(err, docs){
					// console.log(docs)
					if(!docs[0]){
						collection.insert(data);
					}
					callback(docs);
					db.close();
			})
		})
	})
}




exports.managerLogin = managerLogin;
exports.managerRegister = managerRegister;