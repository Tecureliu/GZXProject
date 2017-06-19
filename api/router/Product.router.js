/*
	产品路由控制
 */
var db = require('../module/productdb.js');
var ApiResult = require('../module/ApiResult.js');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

exports.handle = function(app){
	

	//后台
	app.get('/allGoods',function(req,res){
		// res.setHeader('Access-Control-Allow-Origin','*');
		db.allGoods('Goods', res);
		
	})
	app.post('/searchGoods',urlencodedParser,function(req,res){
		// res.setHeader('Access-Control-Allow-Origin','*');
		db.searchGoods('Goods', req.body,res);

	})
	app.post('/addGoods',urlencodedParser,function(req,res){
		// res.setHeader('Access-Control-Allow-Origin','*');
		db.addGoods('Goods', req.body, 'goodTitle', function(data){
			if(!data.length){
				res.send(ApiResult(true,'插入成功'));
			}else{
				res.send(ApiResult(false,'插入失败'));
			}
		});
	});
	app.post('/editGoods',urlencodedParser,function(req,res){
		// res.setHeader('Access-Control-Allow-Origin','*');
		db.editGoods('Goods', req.body,function(data){
			if(data.length){
				res.send(ApiResult(true,'修改成功'));
			}else{
				res.send(ApiResult(false,'修改失败'));
			}
		});

	})
	app.post('/delGoods',urlencodedParser,function(req,res){
		// res.setHeader('Access-Control-Allow-Origin','*');
		db.delGoods('Goods', req.body, function(data){
			if(data.length){
				res.send(ApiResult(true,'删除成功',data));
			}else{
				res.send(ApiResult(false,'删除失败'));
			}
		});
	});

	app.post('/editShowgoods',urlencodedParser,function(req,res){
		// res.setHeader('Access-Control-Allow-Origin','*');
		db.editShowgoods('Goods', req.body, function(data){
			if(data.length){
				res.send(ApiResult(true,'获取成功',data));
			}
		});
	});
}

var multer = require ('multer');


var storage = multer.diskStorage({  
  destination: function (req, file, cb) {  
    cb(null, '../web/src/static/imgs')  
  },  
  filename: function (req, file, cb) {  
      var fileFormat = (file.originalname).split(".");
      cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);    
  }  
}) 

var upload = multer({ storage: storage });

exports.photo = function(app){
	app.post('/upload', upload.fields([{name:'picture',acount:2},{name:'banner',acount:4},{name:'photo',acount:18}]), function(req, res) {
		res.setHeader('Access-Control-Allow-Origin','*');
		// console.log(req.files);  
		// console.log(req.body); 	 	
	 	res.send(JSON.stringify(req.files)); 
	});
}