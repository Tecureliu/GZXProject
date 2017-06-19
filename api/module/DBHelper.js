var ApiResult = require('./ApiResult.js');
var db = require('./db.js')();

module.exports = {
get: function(_collection, _condition, _callback) {
        db.open(function(dberror) {
            if (dberror) {
                _callback(ApiResult(false, null, dberror));
                return;
            }

            db.collection(_collection, function(collerror, collection) {
                if (collerror) {
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                var condition = _condition || {};
                collection.find(condition).toArray(function(resulterror, dataset) {
                    //console.log(dataset, _condition)
                    if (resulterror) {
                        _callback(ApiResult(false, null, resulterror));
                    } else {
                        _callback(ApiResult(true, null, dataset));
                    }
                     
                })
            })
           db.close();
        })
    },
    insert: function(_collection, _newdata, _callback) {
        db.open(function(dberror) {
            if (dberror) {
                _callback(ApiResult(false, null, dberror));
                return;
            }

            db.collection(_collection, function(collerror, collection) {
                if (collerror) {
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                
                collection.insert(_newdata, function(resulterror, result) {
                    if (resulterror) {
                        _callback(ApiResult(false, null, resulterror));
                    } else {
                        _callback(ApiResult(true, null, result));
                    }
                })
            })
            db.close();
        })
    },
    findpw:function(_collection, data,key, _callback){
        db.open(function(error, db){
            if(error){
                _callback(ApiResult(false, null, error));
                return;
            }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    _callback(ApiResult(false, null, error));
                    return; 
                } else {
                    collection.find({phone:data[key]}).toArray(function(err, docs){
                        console.log(docs)
                        if(docs[0]){
                            if(data.phone == docs[0].phone){
                                _callback(docs[0]);
                                db.close();
                            }else{
                                _callback(0);
                                db.close();
                            }   
                        }else{
                            _callback(null);
                            db.close();
                        }
                        
                    });
                }
                
            })
        })  
    }, 
    resetLoginPw:function(_collection, data,key, _callback){
        db.open(function(error, db){
            if(error){
                console.log('connect db:', error);
            }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error); 
                } else {
                    collection.find({phone:data[key]}).toArray(function(err, docs){
                        //console.log(data)
                        if(docs[0]){
                            collection.update({phone:data[key]},{$set:{password:data.resetpassword}});
                            //console.log(123)
                            _callback(docs);
                            db.close();
                        }else{
                            _callback(null);
                            db.close();
                        }
                        
                    });
                }
                
            })
        })
    },

    addressMsgNowDefault:function(_collection, data,key, _callback){
        db.open(function(error, db){
            if(error){
                console.log('connect db:', error);
            }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error); 
                } else {
                    collection.find({myDate:data[key]}).toArray(function(err, docs){
                        
                        collection.find({phone:data.phone}).toArray(function(resulterror,dataset){
                            if(!dataset[0]){
                                _callback(ApiResult(false, null, resulterror));
                            }else{
                                //console.log(dataset)
                                var newData;
                                dataset.forEach(function(item){
                                    if(item.addressuseraddressDefault == '1'){
                                        newData = Object.assign({},item)
                                    }
                                })
                                //console.log(newData);
                                if(newData){
                                    collection.update({myDate:newData.myDate},{$set:{addressuseraddressDefault:'0'}});
                                }
                                data.addressuseraddressDefault == '1';
                                collection.update({myDate:data[key]},{$set:data});
                                _callback(ApiResult(true, null, resulterror));

                            }
                            db.close();
                        })

                        // if(docs[0]){
                        //     collection.update({myDate:data[key]},{$set:data});
                        //     _callback(docs);
                        //     db.close();
                        // }else{
                        //     _callback(null);
                        //     db.close();
                        // }
                        
                    });
                }
                
            })
        })
    },
    addressMsgNowNoDefault:function(_collection, data,key, _callback){
        db.open(function(error, db){
            if(error){
                console.log('connect db:', error);
            }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error); 
                } else {
                    collection.find({myDate:data[key]}).toArray(function(err, docs){
                        
                        if(docs[0]){
                            data.addressuseraddressDefault == '0';
                            collection.update({myDate:data[key]},{$set:data});
                            _callback(docs);
                            db.close();
                        }else{
                            _callback(null);
                            db.close();
                        }
                        
                    });
                }
                
            })
        })
    },
    addressDefault: function(_collection, data, _callback) {
        db.open(function(dberror) {
            if (dberror) {
                _callback(ApiResult(false, null, dberror));
                return;
            }

            db.collection(_collection, function(collerror, collection) {
                if (collerror) {
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                collection.find({phone:data.phone}).toArray(function(resulterror, dataset) {
                   
                   if(!dataset[0]){
                       collection.insert(data);
                       _callback(ApiResult(false, null, resulterror));
                   }else{
                       //console.log(dataset)
                       var newData;
                       dataset.forEach(function(item){
                            if(item.addressuseraddressDefault == '1'){
                                newData = Object.assign({},item)
                            }
                       })
                       //console.log(newData);
                       if(newData){
                            collection.update({myDate:newData.myDate},{$set:{addressuseraddressDefault:'0'}});
                       }
                       collection.insert(data);
                       _callback(ApiResult(true, null, resulterror));
                   }
                    
                    db.close();
                })
            })
   
        })
    },
    addressNoDefault: function(_collection, data, _callback){
        db.open(function(dberror) {
            if (dberror) {
                _callback(ApiResult(false, null, dberror));
                return;
            }
            db.collection(_collection, function(collerror, collection) {
                if (collerror) {
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                collection.find({phone:data.phone}).toArray(function(resulterror, dataset) {
                   if(!dataset[0]){
                      
                       data.addressuseraddressDefault = '1';
                       collection.insert(data);
                        _callback(dataset);
                   }else{
                       data.addressuseraddressDefault = '0';
                        collection.insert(data);
                        _callback(dataset);
                   }
                    db.close();
                })
            })
        })
    },
    showlist: function(_collection, _condition, _callback) {
        db.open(function(dberror) {
            if (dberror) {
                _callback(ApiResult(false, null, dberror));
                return;
            }

            db.collection(_collection, function(collerror, collection) {
                if (collerror) {
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                var condition = _condition || {};
                var reg = new RegExp("^.*"+_condition.bigKind+"\.*$","i");
                collection.find({'$or':[{bigKind:reg},{goodTitle:reg}]}).toArray(function(resulterror, dataset) {
                    if (resulterror) {
                        _callback(ApiResult(false, null, resulterror));
                    } else {
                        _callback(ApiResult(true, null, dataset));
                    }
                })
            })
            db.close();
        })
    },

    
    fetchgoods:function(_collection,data, callback){
        db.open(function(error, db){
            if(error){
                console.log('connect db:', error);
            }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)  
                } else {
                    collection.find().toArray(function(err, docs){
                        if(err){
                            console.log('find err:',err);
                        }
                        // console.log(docs)
                        callback(docs);
                        db.close();
                    })
                }
                
            })
        })  
    },


    getcartgoods:function(_collection,data,key, callback){
        db.open(function(error, db){
            if(error){
                console.log('connect db:', error);
            }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)  
                } else {
                    // console.log(data)
                    // console.log(key)
                    collection.find({phone:data[key]}).toArray(function(err, docs){
                        if(err){
                            console.log('find err:',err);
                        }
                        callback(docs);
                        db.close();
                    })
                }
                
            })
        })  
    },

    delcartgoods:function(_collection,data,key, callback){
        db.open(function(error, db){
             // console.log(data)
            if(error){
                console.log('connect db:', error);
            }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)  
                } else {
                    // console.log(data)
                    // console.log({id:data[key]})
                    collection.find({id:data[key]}).toArray(function(err, docs){
                        if(err){
                            console.log('find err:',err);
                        }
                        collection.remove(data);
                        // console.log(docs)
                        callback(docs);
                        db.close();
                    })
                }
                
            })
        })  
    },
    updateqty:function(_collection,data,key, callback){
        db.open(function(error, db){
             // console.log(data)
            if(error){
                console.log('connect db:', error);
            }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)  
                } else {
                    // console.log(data)
                    // console.log({id:data[key]},{qty:data.qty})
                    collection.find({id:data[key]}).toArray(function(err, docs){
                        if(err){
                            console.log('find err:',err);
                        }
                       collection.update({id:data[key]},{
                        $set:{  qty:data.qty
                        }},{multi:true});
                        // console.log(docs)
                        callback(docs);
                        db.close();
                    })
                }
                
            })
        })  
    },
    addOrders:function(_collection,data){
        db.open(function(error, db){
             // console.log(data)
            if(error){
                console.log('connect db:', error);
            }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)  
                } else {
                        collection.insert(data);
                        db.close();
                   
                }
                
            })
        })  
    },
    addItem:function(_collection,data,callback){
        db.open(function(err,db){
            if(err){
                console.log('db open' ,err)
            }

            db.collection(_collection,function(err,collection){
                if(err){
                    console.log('collection ',err)
                }

                collection.find({phone:data.phone}).toArray(function(err,docs){
                    if(err){
                        console.log('find docs',err)
                    }
                    if(!docs[0]){
                        // console.log('!docs ' , 111);
                        collection.insert(data)
                        callback(null)
                    }else{
                        var num = data.qty;
                        var obj;
                        docs.forEach(function(item){
                            if(data.id == item.id){
                                num = Number(num) + Number(item.qty);
                                // console.log(num)
                                obj = Object.assign({},item);
                            }
                        })
                        //判断是否已拥有该商品
                        if(!obj){
                            // console.log('!obj',222);
                            collection.insert(data);
                            callback(true)
                        }else{
                            // console.log('obj',obj);
                            collection.update({phone:obj.phone,id:obj.id},{$set:{qty:'' + num}});
                            callback(true)
                        }
                    }
                   db.close();
                })
            })
        })
    },

    buy:function(_collection,data, callback){
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
                    })
                }
                
            })
        })  
    }
}