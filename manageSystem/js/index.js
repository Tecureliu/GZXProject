$(function(){
	$.get(erp.baseUrl + 'getsession',function(res){
		if(res.status){
			$('.user strong').text(res.data);
		}else{
			location.href = 'login.html';
		}
		
	})




	
	//弹出添加商品
	$('.btn_modle').click(function(){
		$('.container1').css({'display':'block'}).stop().animate({top:75},300);
		$('.box').css({'display':'block'}).stop().animate({top:75},300);
		$('.zhe').fadeIn(250);
		$('.btn-edit').css({'display':'none'});
		$('.btnq').css({'display':'block'});
		$('.Toptitle').text('添加商品');
	})
	//关闭窗口
	function close(){
		$('.container1').stop().animate({top:1000},300);
		$('.zhe').fadeOut(250);
		$('.box').stop().animate({top:1000},300);

		//清空输入框的值
		$('.goodname').val('');
		$('.old-price1').val('');
		$('.new-price1').val('');
		$('.bigkind1').val('');
		$('.smallkind1').val('');
		$('.sale1').val('');
		$('.origin1').val('');
		$('.sizeOne').val('');
		$('.sizeTwo').val('');
		$('.sizeThree').val('');
		$('.size1Price').val('');
		$('.size2Price').val('');
		$('.size3Price').val('');
		$('.Toptitle').text('');		
	}
	//g关闭添加商品的窗口
	$('.closed,.btnc').click(function(){
		close()
		$('.tips').css({'display':'none'});
	});

	//点击添加商品
	$('.btnq').click(function(e){
		var goodname = $('.goodname').val();
		var oldPrice = $('.old-price1').val();
		var newPrice = $('.new-price1').val();
		var bigKind = $('.bigkind1').val();
		var smallKind = $('.smallkind1').val();
		var sale = $('.sale1').val();
		var origin = $('.origin1').val();
		var size1 = $('.sizeOne').val();
		var size2 = $('.sizeTwo').val();
		var size3 = $('.sizeThree').val();
		var size1Price = $('.size1Price').val();
		var size2Price = $('.size2Price').val();
		var size3Price = $('.size3Price').val();
		var num = String(Math.floor(Math.random()*10000000000));
		// console.log($('.old-price1'))
		if(goodname=='' || sale ==''|| newPrice ==''|| bigKind ==''|| origin ==''|| size1Price ==''){
                	alert('商品名，销量，现价，大分类，产地，规格一价格为必填项');
                	return false;
                }
		$('form').ajaxSubmit({
			type: 'post',
			url: erp.baseUrl + 'upload',
			success:function(data){
				
               
                // console.log()
                if(data){
					var res = JSON.parse(data);
				}else{
					var res={};
				}
                
                // console.log(res);
                var ban = res.banner;
                var pho = res.photo;
                var banner = [];
                var photo = [];
                // console.log(pic);
                
               
                if(ban){
                	//获取轮播图名
	                ban.forEach(function(item){
	                	banner.push(item.filename);
	                });
                }else{
                	banner = null;
                }
                
                if(pho){
                	//获取详情图名
	                pho.forEach(function(item){
	                	photo.push(item.filename);
	                });
                }else{
                	photo = null;
                }
                // console.log(banner);
                banner = banner ? JSON.stringify(banner) : '';
                photo = photo ? JSON.stringify(photo) : '';
                console.log(banner,photo)
                $.post(erp.baseUrl + 'addGoods',{
					id:num,
					goodTitle:goodname,
					oldPrice:oldPrice,
					newPrice:newPrice,
					bigKind:bigKind,
					smallKind:smallKind,
					sale:sale,
					origin:origin,
					size1:size1,
					size2:size2,
					size3:size3,
					size1Price:size1Price,
					size2Price:size2Price,
					size3Price:size3Price,
					banner:banner,
					photo:photo
				},function(res){
					console.log(res);
					if(res.status){
						alert('添加商品成功！');
						location.href = 'index.html';
						close()
					}else{
						alert('商品已存在，请重新添加！')
					}
					
					
				});
				
            },
            error:function(XmlHttpRequest,textStatus,errorThrown){
                console.log(XmlHttpRequest);
                console.log(textStatus);
                console.log(errorThrown);
            }
		})
		e.preventDefault();
	})




	//获取数据库中已有商品  显示到页面
	$.get(erp.baseUrl + 'allGoods',function(response){
		// console.log(response);
		$('.list').html(response.map(function(item){
			// // try{
				item.banner = item.banner ? JSON.parse(item.banner):'';
				item.photo = item.photo ? JSON.parse(item.photo):'';
				
			// }
			// catch(e){
			// 	// console.log(e)
			// }
			// console.log(item.banner,item.photo)
			return `<ul class="ul1">
						<li>
							<input type="checkbox" class="check">
						</li>
						<li>
							<p class="img"><img src="../web/src/static/imgs/${item.banner[0]}" alt=""></p>
						</li>
						<li>
							<p class="title">${item.goodTitle}</p>
						</li>
						<li>
							
						</li>
						<li>
							<p class="old-price">${item.oldPrice}</p>
						</li>
						<li>
							<p class="new-price">${item.newPrice}</p>
						</li>
						<li>
							<p class="bigkind">${item.bigKind}</p>
						</li>
						<li>
							<p class="smallkind">${item.smallKind}</p>
						</li>
						<li>
							<p class="sale">${item.sale}</p>
						</li>
						<li>
							<p class="origin">${item.origin}</p>
						</li>
						<li>
							<p class="size1">${item.size1}</p>
						</li>
						<li>
							<p class="size2">${item.size2}</p>
						</li>
						<li>
							<p class="size3">${item.size3}</p>
						</li>
						<li>
							<p class="size1-price">${item.size1Price}</p>
						</li>
						<li>
							<p class="size2-price">${item.size2Price}</p>
						</li>
						<li>
							<p class="size3-price">${item.size3Price}</p>
						</li>
						<li>
							<p class="banner1"><img src="../web/src/static/imgs/${item.banner[0]}" alt=""></p>
						</li>
						<li>
							<p class="banner2"><img src="../web/src/static/imgs/${item.banner[1]}" alt=""></p>
						</li>
						<li>
							<p class="banner3"><img src="../web/src/static/imgs/${item.banner[2]}" alt=""></p>
						</li>
						<li>
							<p class="img1"><img src="../web/src/static/imgs/${item.photo[0]}" alt=""></p>
						</li>
						<li>
							<p class="img2"><img src="../web/src/static/imgs/${item.photo[1]}" alt=""></p>
						</li>
						<li>
							<p class="img3"><img src="../web/src/static/imgs/${item.photo[2]}" alt=""></p>
						</li>
						<li>
							<p class="img4"><img src="../web/src/static/imgs/${item.photo[3]}" alt=""></p>
						</li>
						<li>
							<p class="img5"><img src="../web/src/static/imgs/${item.photo[4]}" alt=""></p>
						</li>
						<li>
							<p class="img6"><img src="../web/src/static/imgs/${item.photo[5]}" alt=""></p>
						</li>
						<li>
							<p class="img7"><img src="../web/src/static/imgs/${item.photo[6]}" alt=""></p>
						</li>
						<li>
							<p class="img8"><img src="../web/src/static/imgs/${item.photo[7]}" alt=""></p>
						</li>
						<li>
							<span class="ID">${item.id}</span>
						</li>
						<li>
							<span class="edit"><i class="iconfont icon-xiugai"></i>编辑</span>
						</li>
						<li>
							<span class="cut"> <span class="iconfont icon-shanchu"></span>删除</span>
						</li>
						
					</ul>`
		}));

		//移除路径为空的图片
		$('.ul1 li p img').each(function(i,ele){
			if($(ele).attr('src') == '../web/src/static/imgs/undefined'){
				$(ele).remove();
				// console.log(1)
			}
		});


		buttonCss();
		edit();
		cut();

		
	})


	//按钮样式
	function buttonCss(){
		$('.cut').mouseenter(function(){
			$(this).css('background','#a12420');
			}).mouseleave(function(){
				$(this).css('background','#dd514c');
			});
		$('.edit').mouseenter(function(){
				$(this).css('background','#43a501');
			}).mouseleave(function(){
				$(this).css('background','#71C737');
				

		});
		$('.btn_search').mouseenter(function(){
				$(this).css('background','#359a35');
			}).mouseleave(function(){
				$(this).css('background','#5eb95e');
		});

			  
		$('.allCut').mouseenter(function(){
				$(this).css('background','rgb(206, 11, 4)');
			}).mouseleave(function(){
				$(this).css('background','#e23a34');
		});
		$('.btn_modle').mouseenter(function(){
				$(this).css('background','rgb(37, 113, 199)');
			}).mouseleave(function(){
				$(this).css('background','#2f7dd4');
		});

	}



	//单个商品点击删除
	function cut(){
			$('.cut').click(function(){

			var goodsId = $(this).parent('li').prevAll().find('.ID').text();
			// console.log(goodsId)
			$.post(erp.baseUrl + 'delGoods',{id:goodsId},function(res){
				console.log(res);
				if(res.status){
					alert(res.message);
				}else if(!res.status){
					alert(res.message);
					return false;
				}
			})
			$(this).parent('li').parent('ul').remove();
		});
	}

	



	//修改商品
	function edit(){
		$('.edit').click(function(){
			$('.container1').css({'display':'block'}).animate({top:75},300);
			$('.box').css({'display':'block'}).animate({top:75},300);
			$('.zhe').fadeIn(100);
			$('.Toptitle').text('编辑商品');
			$('.btnq').css({'display':'none'});
			$('.btn-edit').css({'display':'block'});
			$('.tips').css({'display':'block'});
			
			
			var goodsId = $(this).parent('li').prevAll().find('.ID').text();
			// console.log( goodsId)
			$.post(erp.baseUrl + 'editShowgoods',{id:goodsId},function(res){
				// console.log(res);
				var docs = res.data;
				docs.map(function(item){
					// console.log(item)
					$('.goodname').val(item.goodTitle);
					$('.old-price1').val(item.oldPrice);
					$('.new-price1').val(item.newPrice);
					$('.bigkind1').val(item.bigKind);
					$('.smallkind1').val(item.smallKind);
					$('.sale1').val(item.sale);
					$('.origin1').val(item.origin);
					$('.sizeOne').val(item.size1);
					$('.sizeTwo').val(item.size2);
					$('.sizeThree').val(item.size3);
					$('.size1Price').val(item.size1Price);
					$('.size2Price').val(item.size2Price);
					$('.size3Price').val(item.size3Price);
					var banner1 = item.banner;
					var photo1 = item.photo;
					




					$('.btn-edit').click(function(e){
						var goodname = $('.goodname').val();
						var oldPrice = $('.old-price1').val();
						var newPrice = $('.new-price1').val();
						var bigKind = $('.bigkind1').val();
						var smallKind = $('.smallkind1').val();
						var sale = $('.sale1').val();
						var origin = $('.origin1').val();
						var size1 = $('.sizeOne').val();
						var size2 = $('.sizeTwo').val();
						var size3 = $('.sizeThree').val();
						var size1Price = $('.size1Price').val();
						var size2Price = $('.size2Price').val();
						var size3Price = $('.size3Price').val();
						// console.log($('.old-price1'))
						if(goodname=='' || sale ==''|| newPrice ==''|| bigKind ==''|| origin ==''|| size1Price ==''){
				                	alert('商品名，销量，现价，大分类，产地，规格一价格为必填项');
				                	return false;
				                }
						$('form').ajaxSubmit({
							type: 'post',
							url: erp.baseUrl + 'upload',
							success:function(data){
								
				               
				                // console.log()
				                if(data){
									var res = JSON.parse(data);
								}else{
									var res={};
								}
				                
				                // console.log(res);
				                var ban = res.banner;
				                var pho = res.photo;
				                var banner = [];
				                var photo = [];
				                // console.log(pic);
				                
				               
				                if(ban){
				                	//获取轮播图名
					                ban.forEach(function(item){
					                	banner.push(item.filename);
					                });
				                }else{
				                	banner = null;
				                }
				                
				                if(pho){
				                	//获取详情图名
					                pho.forEach(function(item){
					                	photo.push(item.filename);
					                });
				                }else{
				                	photo = null;
				                }
				                console.log(goodsId);
				                banner = banner ? JSON.stringify(banner) : '';
				                photo = photo ? JSON.stringify(photo) : '';
				                console.log(banner1,photo1)
				                if(banner ==''){
				                	banner = banner1
				                }else{
				                	banner = banner 
				                }

								if(photo ==''){
				                	photo = photo1
				                }else{
				                	photo = photo 
				                }				                
				                // console.log(banner,photo)
				                $.post(erp.baseUrl + 'editGoods',{
									id:goodsId,
									goodTitle:goodname,
									oldPrice:oldPrice,
									newPrice:newPrice,
									bigKind:bigKind,
									smallKind:smallKind,
									sale:sale,
									origin:origin,
									size1:size1,
									size2:size2,
									size3:size3,
									size1Price:size1Price,
									size2Price:size2Price,
									size3Price:size3Price,
									banner:banner,
									photo:photo
								},function(res){
									console.log(res);
									if(res.status){
										alert('修改商品成功！')
										location.href = 'index.html';
									}else{
										alert('修改商品失败，请重新修改！')
									}
									
									
								});
								
				            },
				            error:function(XmlHttpRequest,textStatus,errorThrown){
				                console.log(XmlHttpRequest);
				                console.log(textStatus);
				                console.log(errorThrown);
				            }
						})
						e.preventDefault();
					})						

				});

	
			});
				
				

		})

	}

	//全选反选
	$(".allCheck").click(function () {
		// console.log($(this).prop("checked"))
		
		if($(this).prop("checked")){
			
			$(".check").each(function () {
				if ($(this).prop("checked")) {
					$(this).prop("checked", false);
				} 
				else {
					$(this).prop("checked", true);
				} 

			});
		
   		}else if($(this).prop("checked",false)){
   			$(".check").each(function () {
				if ($(this).prop("checked")) {
					$(this).prop("checked", false);
				} 
				else if($(this).prop("checked", false)){
					$(this).prop("checked", false);
				} 

			});

   		}
   	});
	$(".check").click(function () {
		$(".allCheck").prop("checked",false)

	})




	//批量删除
	$('.allCut').click(function(){
		var goodsId = $('.check').filter(':checked').parent('li').nextAll().find('.ID').text();
		// var goodsId = $(this).parent('li').prevAll().find('.ID').text();
		$('.check').filter(':checked').parent('li').parent('ul').remove();
		// goodsId.splice('')
		// var gArr = [];
		console.log(goodsId)
		// goodsId.each(function(idx,ele){
		// 		var gu = $(ele).parents('ul').attr('data-guid');
		// 		gArr.push(gu);
		// 	})
		// $.post(erp.baseUrl + 'delgoods',{id:goodsId},function(res){
		// 	console.log(res);
			
		// })
	});



		
	//时间显示
	function currentTime(){ 
		var d=new Date(),str=''; 
		str+=d.getFullYear()+'年'; 
		str+=d.getMonth() + 1+'月'; 
		str+=d.getDate()+'日'; 
		str+=d.getHours()+'时'; 
		str+=d.getMinutes()+'分'; 
		str+= d.getSeconds()+'秒'; 
		return str; 
	}
	setInterval(function(){$('#time').html(currentTime)},1000);



	//查找商品显示函数
	function show(){
		//输入为空的情况显示全部
		if($('.keywords').val().trim()==''){
				$.get(erp.baseUrl + 'allGoods',function(response){
				// console.log(response);
				$('.list').html(response.map(function(item){
					item.banner = item.banner ? JSON.parse(item.banner):'';
					item.photo = item.photo ? JSON.parse(item.photo):'';
					return `<ul class="ul1">
						<li>
							<input type="checkbox" class="check">
						</li>
						<li>
							<p class="img"><img src="../web/src/static/imgs/${item.banner[0]}" alt=""></p>
						</li>
						<li>
							<p class="title">${item.goodTitle}</p>
						</li>
						<li>
							
						</li>
						<li>
							<p class="old-price">${item.newPrice}</p>
						</li>
						<li>
							<p class="new-price">${item.oldPrice}</p>
						</li>
						<li>
							<p class="bigkind">${item.bigKind}</p>
						</li>
						<li>
							<p class="smallkind">${item.smallKind}</p>
						</li>
						<li>
							<p class="sale">${item.sale}</p>
						</li>
						<li>
							<p class="origin">${item.origin}</p>
						</li>
						<li>
							<p class="size1">${item.size1}</p>
						</li>
						<li>
							<p class="size2">${item.size2}</p>
						</li>
						<li>
							<p class="size3">${item.size3}</p>
						</li>
						<li>
							<p class="size1-price">${item.size1Price}</p>
						</li>
						<li>
							<p class="size2-price">${item.size2Price}</p>
						</li>
						<li>
							<p class="size3-price">${item.size3Price}</p>
						</li>
						<li>
							<p class="banner1"><img src="../web/src/static/imgs/${item.banner[0]}" alt=""></p>
						</li>
						<li>
							<p class="banner2"><img src="../web/src/static/imgs/${item.banner[1]}" alt=""></p>
						</li>
						<li>
							<p class="banner3"><img src="../web/src/static/imgs/${item.banner[2]}" alt=""></p>
						</li>
						<li>
							<p class="img1"><img src="../web/src/static/imgs/${item.photo[0]}" alt=""></p>
						</li>
						<li>
							<p class="img2"><img src="../web/src/static/imgs/${item.photo[1]}" alt=""></p>
						</li>
						<li>
							<p class="img3"><img src="../web/src/static/imgs/${item.photo[2]}" alt=""></p>
						</li>
						<li>
							<p class="img4"><img src="../web/src/static/imgs/${item.photo[3]}" alt=""></p>
						</li>
						<li>
							<p class="img5"><img src="../web/src/static/imgs/${item.photo[4]}" alt=""></p>
						</li>
						<li>
							<p class="img6"><img src="../web/src/static/imgs/${item.photo[5]}" alt=""></p>
						</li>
						<li>
							<p class="img7"><img src="../web/src/static/imgs/${item.photo[6]}" alt=""></p>
						</li>
						<li>
							<p class="img8"><img src="../web/src/static/imgs/${item.photo[7]}" alt=""></p>
						</li>
						<li>
							<span class="ID">${item.id}</span>
						</li>
						<li>
							<span class="edit"><i class="iconfont icon-xiugai"></i>编辑</span>
						</li>
						<li>
							<span class="cut"> <span class="iconfont icon-shanchu"></span>删除</span>
						</li>
						
							</ul>`
				}));
		//移除路径为空的图片
		$('.ul1 li p img').each(function(i,ele){
			if($(ele).attr('src') == '../web/src/static/imgs/undefined'){
				$(ele).remove();
				// console.log(1)
			}
		});

			})
				}else{//关键词输入不为空的情况
					var keyword = $('.keywords').val();
					console.log(keyword);
					$.post(erp.baseUrl + 'searchGoods',{
						keyword:keyword
					},function(response){
						var res = JSON.parse(response);
						// console.log(res);
						$('.list').html(res.map(function(item){
							item.banner = item.banner ? JSON.parse(item.banner):'';
							item.photo = item.photo ? JSON.parse(item.photo):'';
							return `<ul class="ul1">
										<li>
											<input type="checkbox" class="check">
										</li>
										<li>
											<p class="img"><img src="../web/src/static/imgs/${item.banner[0]}" alt=""></p>
										</li>
										<li>
											<p class="title">${item.goodTitle}</p>
										</li>
										<li>
											
										</li>
										<li>
											<p class="old-price">${item.newPrice}</p>
										</li>
										<li>
											<p class="new-price">${item.oldPrice}</p>
										</li>
										<li>
											<p class="bigkind">${item.bigKind}</p>
										</li>
										<li>
											<p class="smallkind">${item.smallKind}</p>
										</li>
										<li>
											<p class="sale">${item.sale}</p>
										</li>
										<li>
											<p class="origin">${item.origin}</p>
										</li>
										<li>
											<p class="size1">${item.size1}</p>
										</li>
										<li>
											<p class="size2">${item.size2}</p>
										</li>
										<li>
											<p class="size3">${item.size3}</p>
										</li>
										<li>
											<p class="size1-price">${item.size1Price}</p>
										</li>
										<li>
											<p class="size2-price">${item.size2Price}</p>
										</li>
										<li>
											<p class="size3-price">${item.size3Price}</p>
										</li>
										<li>
											<p class="banner1"><img src="../web/src/static/imgs/${item.banner[0]}" alt=""></p>
										</li>
										<li>
											<p class="banner2"><img src="../web/src/static/imgs/${item.banner[1]}" alt=""></p>
										</li>
										<li>
											<p class="banner3"><img src="../web/src/static/imgs/${item.banner[2]}" alt=""></p>
										</li>
										<li>
											<p class="img1"><img src="../web/src/static/imgs/${item.photo[0]}" alt=""></p>
										</li>
										<li>
											<p class="img2"><img src="../web/src/static/imgs/${item.photo[1]}" alt=""></p>
										</li>
										<li>
											<p class="img3"><img src="../web/src/static/imgs/${item.photo[2]}" alt=""></p>
										</li>
										<li>
											<p class="img4"><img src="../web/src/static/imgs/${item.photo[3]}" alt=""></p>
										</li>
										<li>
											<p class="img5"><img src="../web/src/static/imgs/${item.photo[4]}" alt=""></p>
										</li>
										<li>
											<p class="img6"><img src="../web/src/static/imgs/${item.photo[5]}" alt=""></p>
										</li>
										<li>
											<p class="img7"><img src="../web/src/static/imgs/${item.photo[6]}" alt=""></p>
										</li>
										<li>
											<p class="img8"><img src="../web/src/static/imgs/${item.photo[7]}" alt=""></p>
										</li>
										<li>
											<span class="ID">${item.id}</span>
										</li>
										<li>
											<span class="edit"><i class="iconfont icon-xiugai"></i>编辑</span>
										</li>
										<li>
											<span class="cut"> <span class="iconfont icon-shanchu"></span>删除</span>
										</li>
										
									</ul>`
						}));
					//移除路径为空的图片
					$('.ul1 li p img').each(function(i,ele){
						if($(ele).attr('src') == '../web/src/static/imgs/undefined'){
							$(ele).remove();
							// console.log(1)
						}
					});
					edit();
					cut();
					buttonCss()

			})
		}
	}
	//查找商品(点击触发)
	$('.btn_search').click(function(){
		show()
	});
	//查找商品(enter触发)
	$(".keywords").keydown(function (e) {
      if (e.which == 13) {
       show();
      }
    });

    //点击出现功能板块
    var flag=false;
	$('.user').click(function(){
		if(flag==false){
		$('.admin_set').slideDown(200);
		flag=true;
	}
		else if(flag==true){
		$('.admin_set').slideUp(200);
		flag=false;
		}
	});
	$('.user_mng').click(function(){
		$('.vip_mng').toggle();
		$(this).css('background-color','#ddd');
	});
	$('.user-close').click(function(){
		location.href = 'login.html';
		console.log(234)
	})

})