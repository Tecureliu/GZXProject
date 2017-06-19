var DB = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult');
var userdb = require('../module/userdb.js');
var bodyParser = require('body-parser');


var urlencodedParser = bodyParser.urlencoded({ extended: false });
//如果要使用cookie，需要显式包含这个模块
var cookieParser = require('cookie-parser');
//如果要使用session，需要单独包含这个模块
var session = require('express-session');

exports.handle = function(app) {


//后台
//设置 session
    app.use(cookieParser());
    app.use(session({
        secret: '12345',//用来对session数据进行加密的字符串.这个属性值为必须指定的属性
        name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
        cookie: {maxAge: 1000*60*60*60 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
        resave: false,
        saveUninitialized: true,
    }))
    //后台登录路由
   
    app.post('/managerLogin',urlencodedParser,function(req,res){
        // res.setHeader('Access-Control-Allow-Origin','*');
        userdb.managerLogin('admin',req.body, function(data){
            if(data[0]){
                req.session.name = req.body.name;
                // console.log(req.session);
                res.send(ApiResult(true));
            } else {
                res.send(ApiResult(false, '无此用户'));
            }
        })
    })

    app.get('/getsession', function(req, res){
        res.setHeader('Access-Control-Allow-Origin','*');
        res.send(ApiResult(req.session.name != null, null, req.session.name));
    })  
    //后台登录路由
     app.post('/managerRegister',urlencodedParser,function(req,res){
        // res.setHeader('Access-Control-Allow-Origin','*');
        userdb.managerRegister('admin', req.body, 'name',function(data){
            console.log(data);
            if(!data[0]){
                res.send(ApiResult(true,'注册成功！'));
            } else {
                res.send(ApiResult(false, '注册失败，用户已存在！'));
            }
        })
    })



/***************************************分割线*************************************************/

//前端
app.post('/listing', urlencodedParser, function(request, response){
        if(!request.body || !request.body.list){
            response.send(ApiResult(false, '???'));
        }else {
            
            DB.showlist('Goods', {bigKind: request.body.list,num:request.body.num}, function(result){
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(!data[0]){
                        response.send(ApiResult(false, '数据不存在'));
                    }  else {
                        
                        var data = result.data;
                        var changeData;
                        var num = request.body.num;
                            for(var i=0;i<data.length;i++){
                            for(var j=i+1;j<data.length;j++){
                                if(num==1){
                                    if(Number(data[i].newPrice) > Number(data[j].newPrice)){
                                        changeData = data[i];
                                        data[i] = data[j];
                                        data[j] = changeData;
                                    }
                                }else if(num==2){
                                    if(Number(data[i].sale) < Number(data[j].sale)){
                                        changeData = data[i];
                                        data[i] = data[j];
                                        data[j] = changeData;
                                    }
                                }else{
                                    data = data
                                }
                            }
                        }
                        response.send(ApiResult(true,'拿到数据啦~',data));
                    }
                }
            })
        }
    });

    
    app.post('/login', urlencodedParser, function(request, response) {
        if (!request.body || !request.body.username) {
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if (!request.body || !request.body.password) {
            response.send(ApiResult(false, '密码不能为空！'));
        } else if(!request.body || !request.body.verificationCode){
            response.send(ApiResult(false, '验证码不能为空！'));
        } else {
            DB.get('account', { username: request.body.username }, function(result) {
                //console.log(result)
                if (!result.status) {
                    response.send(result);
                } else {
                    var data = result.data;
                    if (!data[0]) {
                        response.send(ApiResult(false, '用户名不存在！'));
                    } else if (data[0].password != request.body.password) {
                        response.send(ApiResult(false, '密码错误！'));
                    } else {
                        response.send(ApiResult(true,result));
                    }
                }
            })
        }
    });

    app.post('/regist', urlencodedParser, function(request, response) {
        // console.log(request.body)
        if (!request.body || !request.body.username) {
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if (!request.body || !request.body.password) {
            response.send(ApiResult(false, '密码不能为空！'));
        } else if (!request.body || !request.body.phone) {
            response.send(ApiResult(false, '手机号码不能为空！'));
        } else {
            delete request.body.repassword;
            DB.get('account', { phone: request.body.phone }, function(result) {
                if (!result.status) {
                    response.send(result);
                } else {
                    var data = result.data;
                    if (data[0]) {
                        response.send(ApiResult(false, '该手机号码已注册，请直接登录，或找回密码'));
                    } else {
                        DB.insert('account', request.body, function(insertResult) {
                            response.send(insertResult);
                        })
                    }
                }
            })
        }
    })
    app.post('/findpw',urlencodedParser, function(request, response){
        //console.log(request.body)
        if (!request.body || !request.body.phone) {
            response.send(ApiResult(false, '手机号码不能为空！'));
        } else if(!request.body || !request.body.findpwYzm){
            response.send(ApiResult(false, '验证码不能为空！'));
        }
        else{
            delete request.body.repassword;
            DB.findpw('account',request.body,'phone',function(data){
                if(data){
                    response.send(ApiResult(true, '找回成功,已发密码至邮箱','您的密码是：'+data.password));
                }else if(data == 0){
                    response.send(ApiResult(true, '找回失败','手机号码错误'));
                }else{
                    response.send(ApiResult(true, '找回失败','手机号码错误'));
                }
            })
        }
    })
    app.post('/resetLoginPw',urlencodedParser, function(request, response){
        //console.log(request.body)
        if (!request.body || !request.body.password) {
            response.send(ApiResult(false, '原密码不能为空'));
        } else if(!request.body || !request.body.resetpassword){
            response.send(ApiResult(false, '新密码不能为空'));
        }
        else{
            //delete request.body.repassword;
            DB.resetLoginPw('account',request.body,'phone',function(data){
                response.send(ApiResult(true, '修改成功','修改成功'));
            })
   
        }
    })
    
    //新增收货地址
    app.post('/addressMsg', urlencodedParser, function(request, response) {
        if (!request.body || !request.body.addressusername) {
            response.send(ApiResult(false, '用户名不能为空！',response));
        } else if (!request.body || !request.body.addressuserphone) {
            response.send(ApiResult(false, '手机号码不能为空！',response));
        } else if(!request.body || request.body.addresssheng == '-1'){
            response.send(ApiResult(false, '省不能为空！',response));
        } else if(!request.body || request.body.addressusercity == '-1'){
            response.send(ApiResult(false, '市不能为空！',response));
        } else if(!request.body || request.body.addressuserqu == '-1'){
            response.send(ApiResult(false, '区不能为空！',response));
        } else if(!request.body || !request.body.addressuseraddress){
            response.send(ApiResult(false, '详细地址不能为空！',response));
        }else {
            //console.log(request.body.phone);
            DB.get('accountaddress', { phone: request.body.phone }, function(result) {
                //console.log(result)
                if (!result.status) {
                    response.send(result);
                } else {
                    var data = result.data;
                    //console.log(request.body)
                    DB.insert('accountaddress', request.body, function(insertResult) {
                        response.send(insertResult);
                    })
                }
            })
        }
    });
    //读取要修改的地址信息
    app.post('/addressNsNowRead',urlencodedParser, function(request, response){
        if (!request.body || !request.body.locationCs) {
            response.send(ApiResult(false, '没有找到该地址'));
        } else {
            DB.get('accountaddress', { myDate: request.body.locationCs }, function(result) {
                //console.log(result)
                if (!result.status) {
                    response.send(result);
                } else {
                    var data = result.data;
                    response.send(ApiResult(true,result));
                }
            })
        }
    })
    //修改收货地址有默认
    app.post('/addressMsgNowDefault',urlencodedParser, function(request, response){
        //console.log(request.body)
        if (!request.body || !request.body.addressusername) {
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if (!request.body || !request.body.addressuserphone) {
            response.send(ApiResult(false, '手机号码不能为空！'));
        } else if(!request.body || request.body.addresssheng == '-1'){
            response.send(ApiResult(false, '省不能为空！'));
        } else if(!request.body || request.body.addressusercity == '-1'){
            response.send(ApiResult(false, '市不能为空！'));
        } else if(!request.body || request.body.addressuserqu == '-1'){
            response.send(ApiResult(false, '区不能为空！'));
        } else if(!request.body || !request.body.addressuseraddress){
            response.send(ApiResult(false, '详细地址不能为空！'));
        }else {
            //delete request.body.repassword;
            console.log(111)
            //console.log(request.body)
            DB.addressMsgNowDefault('accountaddress',request.body,'myDate',function(data){
                response.send(ApiResult(true, '修改成功',data));
            })
   
        }
    })

    //修改地址没有默认
    app.post('/addressMsgNowNoDefault',urlencodedParser, function(request, response){
        //console.log(request.body)
        if (!request.body || !request.body.addressusername) {
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if (!request.body || !request.body.addressuserphone) {
            response.send(ApiResult(false, '手机号码不能为空！'));
        } else if(!request.body || request.body.addresssheng == '-1'){
            response.send(ApiResult(false, '省不能为空！'));
        } else if(!request.body || request.body.addressusercity == '-1'){
            response.send(ApiResult(false, '市不能为空！'));
        } else if(!request.body || request.body.addressuserqu == '-1'){
            response.send(ApiResult(false, '区不能为空！'));
        } else if(!request.body || !request.body.addressuseraddress){
            response.send(ApiResult(false, '详细地址不能为空！'));
        }else {
            //delete request.body.repassword;
            //console.log(111)
            //console.log(request.body)
            DB.addressMsgNowNoDefault('accountaddress',request.body,'myDate',function(data){
                response.send(ApiResult(true, '修改成功',data));
            })
   
        }
    })


    //读取当前用户地址
    app.post('/address', urlencodedParser, function(request, response) {
        if (!request.body || !request.body.phone) {
            response.send(ApiResult(false, '没有找到当前用户手机'));
        }else {
            DB.get('accountaddress', { phone: request.body.phone }, function(result) {
                //console.log(result)
                if (!result.status) {
                    response.send(result);
                } else {
                    var data = result.data;
                    if (!data[0]) {
                        response.send(ApiResult(false, '您还没有地址'));
                    }  else {
                        response.send(ApiResult(true,result));
                    }
                }
            })
        }
    });


    //addressMsgSetDefault  addressuseraddressDefault
    //设置默认
    app.post('/addressMsgDefault', urlencodedParser, function(request, response) {
        // console.log(!request.body || request.body.addressusername)

        if (!request.body || !request.body.addressusername) {   
            response.send(ApiResult(false, '收件人姓名不能为空！'));
        } else if (!request.body || !request.body.addressuserphone) {
            response.send(ApiResult(false, '手机号码不能为空！'));
        } else if(!request.body || request.body.addresssheng == '-1'){
            response.send(ApiResult(false, '省不能为空！'));
        } else if(!request.body || request.body.addressusercity == '-1'){
            response.send(ApiResult(false, '市不能为空！'));
        } else if(!request.body || request.body.addressuserqu == '-1'){
            response.send(ApiResult(false, '区不能为空！'));
        } else if(!request.body || !request.body.addressuseraddress){
            response.send(ApiResult(false, '详细地址不能为空！'));
        }else {
            //console.log(321)
            //console.log(request.body.phone)
            DB.addressDefault('accountaddress', request.body, function(result) {
                response.send(ApiResult(true,null,result))
                
            })
        }
    });
    app.post('/addressMsgNoDefault', urlencodedParser, function(request,response){
        if (!request.body || !request.body.phone) {
            response.send(ApiResult(false, '没有找到当前用户手机'));
        } else if (!request.body || !request.body.addressuserphone) {
            response.send(ApiResult(false, '手机号码不能为空！'));
        } else if(!request.body || !request.body.addresssheng == '-1'){
            response.send(ApiResult(false, '省不能为空！'));
        } else if(!request.body || !request.body.addressusercity == '-1'){
            response.send(ApiResult(false, '市不能为空！'));
        } else if(!request.body || !request.body.addressuserqu == '-1'){
            response.send(ApiResult(false, '区不能为空！'));
        } else if(!request.body || !request.body.addressuseraddress){
            response.send(ApiResult(false, '详细地址不能为空！'));
        }else {
            //console.log(request.body.phone)
            DB.addressNoDefault('accountaddress', request.body, function(result) {
                if(result[0]){
                    response.send(ApiResult(true,null,result));
                }else{
                     response.send(ApiResult(true,null,result));
                }
                
            })
        }
    })


    //详情页地址插入
    app.post('/orderDetail', urlencodedParser, function(request, response) {
        if (!request.body || !request.body.phone) {
            response.send(ApiResult(false, '没有找到当前用户手机'));
        }else {
            DB.get('accountaddress', { phone: request.body.phone }, function(result) {
                //console.log(result)
                if (!result.status) {
                    response.send(result);
                } else {
                    var data = result.data;
                    if (!data[0]) {
                        response.send(ApiResult(false, '您还没有地址'));
                    }  else {
                        response.send(ApiResult(true,result));
                    }
                }
            })
        }
    });
    
    app.post('/fetchGoods',urlencodedParser, function(request, response){
        // console.log(222)
        
        DB.fetchgoods('Goods',request.body,function(data){
            response.send(ApiResult(true, '获取成功',data));
        })
   
        
    })

    app.post('/getcartgoods',urlencodedParser, function(request, response){
     
        DB.getcartgoods('usercart',request.body,"phone",function(data){
            response.send(ApiResult(true, '获取成功',data));
        })
   
        
    })


    app.post('/delcartgoods',urlencodedParser, function(request, response){
        
        DB.delcartgoods('usercart',request.body,"id",function(data){
            response.send(ApiResult(true, '删除成功',data));
        })
   
        
    })

    app.post('/updateqty',urlencodedParser, function(request, response){
        // console.log(response)
        DB.updateqty('usercart',request.body,"id",function(data){
            response.send(ApiResult(true, '更新成功'));

        })
   
        
    })

    app.post('/addOrders',urlencodedParser, function(request, response){
        // console.log(response)
        DB.addOrders('orders',request.body,function(data){
            response.send(ApiResult(true, '添加成功'));

        })
   
        
    })

    app.post('/addItem',urlencodedParser,function(request,response){
        // console.log(444)
        DB.addItem('usercart',request.body,function(data){
            data ? response.send(ApiResult(true)) : response.send(ApiResult(false));
            
        })
    })

        //订单页订单清单读取
    app.post('/ordersCar', urlencodedParser, function(request, response) {
        if (!request.body || !request.body.phone) {
            response.send(ApiResult(false, '没有找到当前用户手机'));
        }else {
            DB.get('usercart', { phone: request.body.phone }, function(result) {
                //console.log(result)
                if (!result.status) {
                    response.send(result);
                } else {
                    var data = result.data;
                    if (!data[0]) {
                        response.send(ApiResult(false, '您还没有地址'));
                    }  else {
                        response.send(ApiResult(true,result));
                    }
                }
            })
        }
    });

    app.post('/buy',urlencodedParser,function(request,response){
        // console.log(444)
        DB.buy('Goods',request.body,function(data){
             response.send(ApiResult(true, '获取成功',data));
            
        })
    })



}
