/*
	后台产品数据处理
 */
var db = require('./db.js')();
//增加商品
var addGoods = function(_collection, data, key,callback){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)	
			} else {
				collection.find({goodTitle:data[key]}).toArray(function(err, docs){
					if(!docs.length){
						collection.insert(data);
					}
					callback(docs);
					db.close();
				});
			}
			
		})
	})	
}
//获取所有商品
var allGoods = function(_collection, res){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error);	
			} else {
				collection.find().toArray(function(err, docs){
					if(err){
						console.log(err);
					}
					res.send(docs);
					db.close();
				});
			}
		})
	})	
}
//搜索商品
var searchGoods = function(_collection,data,res){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)	
			} else {
				console.log(data.keyword);
				var reg = new RegExp("^.*"+data.keyword+"\.*$","i");
				collection.find({'$or':[{goodTitle:{$regex:reg}},{bigKind:{$regex:reg}},{smallKind:{$regex:reg}}]}).toArray(function(err,dos){	
					if(err){
						console.log(err);
					}
					res.end(JSON.stringify(dos));
					db.close();
				})
			}
			
		})
	})	
}

//删除商品
var delGoods = function(_collection,data, callback){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)	
			} else {
				collection.find({id:data.id}).toArray(function(err, docs){
					if(err){
						console.log('find err:',err);
					}

					collection.remove({id:data.id});
					callback(docs);
					db.close();
				});
			}
			
		})
	})	
}

//点击编辑时获取商品信息
var editShowgoods = function(_collection,data, callback){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)	
			} else {
				collection.find({id:data.id}).toArray(function(err, docs){
					if(err){
						console.log('find err:',err);
					}
					callback(docs);
					db.close();
				});
			}
			
		})
	})	
}


//修改商品
var editGoods = function(_collection,data, callback){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)	
			} else {
				collection.find({id:data.id}).toArray(function(err, docs){
					if(err){
						console.log('find err:',err);
					}
					collection.update({id:data.id},{
						$set:{	id:data.id,
								goodTitle:data.goodTitle,
								oldPrice:data.oldPrice,
								newPrice:data.newPrice,
								bigKind:data.bigKind,
								smallKind:data.smallKind,
								sale:data.sale,
								origin:data.origin,
								size1:data.size1,
								size2:data.size2,
								size3:data.size3,
								size1Price:data.size1Price,
								size2Price:data.size2Price,
								size3Price:data.size3Price,	
								banner:data.banner,
								photo:data.photo							
						}},{multi:true});
					callback(docs);
					db.close();
				});
			}
			
		})
	})	
}

exports.delGoods=delGoods;
exports.editGoods = editGoods ;
exports.editShowgoods=editShowgoods;
exports.allGoods = allGoods;
exports.addGoods = addGoods;
exports.searchGoods = searchGoods;
