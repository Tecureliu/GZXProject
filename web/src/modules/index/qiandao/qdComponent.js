import React, {Component} from 'react'
import {Link} from 'react-router'
import './qd.scss'
import '../../../static/font/iconfont.css'

class QdComponent extends Component{
	constructor(props){
        super(props)
    }
    render(){
    	return (
    		<div>
    			<Link to="/index">
    				<div className="back">
	    				<i className="iconfont icon-fanhui"></i>
	    			</div>
    			</Link>
    			
	    		
    		</div>
    	)
    }
}
export default QdComponent
// <div className=" wrap floatimg">
//     <img src={require('../../../static/images/qiandao_01.png')}/>
//     <div className="tableblock dayshow">
//         <p style="height: 47px;" id="noLogin">
//             <a ><img src={require('../../../static/images/btn_login.png')} style="width:37%; display:inline; float:none;"></a>
//         </p>
//     <p style="display: none; height: 47px;" id="IsLogin">  <img src={require('../../../static/images/icon_edit.png')} style="width:5%;" className="icon"/> <strong id="signDay"> 连续签到 第2天 </strong> </p></div>
//     <div className="circleshow" style="height: 137px;">
//         <a className=" circle circle1">
//             <img src={require('../../../static/images/coin_01.png')}/><br/> 第1天  <!--点亮coin_07.png-->
//         </a>
//         <a className=" circle circle2">
//             <img src={require('../../../static/images/coin_02.png')}/><br/> 第2天  <!--点亮coin_08.png-->
//         </a>
//         <a className=" circle circle3">
//             <img src={require('../../../static/images/coin_03.png')}/><br/> 第3天  <!--点亮coin_09.png-->
//         </a>
//         <a className=" circle circle4">
//             <img src={require('../../../static/images/coin_04.png')}/><br/> 第4天  <!--点亮coin_10.png-->
//         </a>
//         <a className=" circle circle5">
//             <img src={require('../../../static/images/coin_05.png')}/><br/> 第5天  <!--点亮coin_11.png-->
//         </a>
//         <a className=" circle circle6">
//             <img src={require('../../../static/images/coin_06.png')}/><br/> 第6天  <!--点亮coin_12.png  后面都是coin_12.png-->
//         </a>
//         <a className=" circle circle7">
//             <img src={require('../../../static/images/coin_06.png')}/><br/> 第7天
//         </a>
//         <a className=" circle circle8">
//             <img src={require('../../../static/images/coin_06.png')}/>
//         </a>
//         <a className="circle8_words"> 第8天  </a>
//         <a className=" circle circle9">
//             <img src={require('../../../static/images/coin_06.png')}/><br/> 第9天
//         </a>
//         <a className=" circle circle10">
//             <img src={require('../../../static/images/coin_06.png')}/><br/> 第10天
//         </a>
//         <a className=" circle circle11">
//             <img src={require('../../../static/images/coin_06.png')}/><br/> 第11天
//         </a>
//         <a className=" circle circle12">
//             <img src={require('../../../static/images/coin_06.png')}/><br/> 第12天
//         </a>
//         <a className=" circle circle13">
//             <img src={require('../../../static/images/coin_06.png')}/><br/> 第13天
//         </a>
//         <a className=" circle circle14">
//             <img src={require('../../../static/images/coin_06.png')}/><br/> 第14天
//         </a>
//         <a className=" circle circle15">
//             <img src={require('../../../static/images/coin2.png">')}/></a>
//         <a className="circle15_words"> 第15天  </a>
//     </div>
//     <img src={require('../../../static/images/qiandao_04.')}/>
//    <img src={require('../../../static/images/qiandao_05.jpg')} style="" id="img1"/>
//     <img src={require('../../../static/images/qiandao_05a.jpg')}  style="display:none" id="img2"/>
//     <img src={require('../../../static/images/qiandao_06.jpg')}/>
//     <div className="tableblock">
//         <p className="coinsnum"> <strong id="ubCount" style="display: none;">我的悠币：0000</strong> </p>
//     </div>
//     <div className="col2">
//         <a onclick="changeCoupon(this)" name="500悠币兑换5元" cid="f6d88bfa-928b-4e4a-9d35-0a1428ea2496">
//             <img src={require('../../../static/images/qd5.jpg')}/>
//         </a>
//         <a onclick="changeCoupon(this)" name="1000悠币兑换10元" cid="f5138f21-b9e2-463f-af50-144de2b3f9cd">
//             <img src={require('../../../static/images/qd10.jpg')}/>
//         </a>
//     </div>
//     <div className="tableblock">
//         <p className="tipswords"> <strong> 一笔订单仅限使用一张优惠券，优惠券间不可以叠加使用 </strong> </p>
//     </div>


//     <img src={require('../../../static/images/qiandao_09.')}/>
//     <img src={require('../../../static/images/qiandao_10.')}/>



//     <div className=" duihuanlist2">
//         <strong className="tt2"> 签到有礼： </strong>
//         <ul className=" list2">
//             <li> 每个账户每天可签到一次，首日签到可领50个悠币，连续第二天可领60个悠币，第三天70个悠币，最多每天可获得100个悠币，连续签满15天后，可重新开始签到 </li>
//             <li> 连续签到满15天可获得神秘礼物一份 </li>
//             <li> 优惠券自动绑定至会员账户，有效期：成功领取后5天内有效 </li>
//             <li> 活动期间遇到疑问，可拨打客服热线400-000-7788；周一至周日9:00-21:00 </li>
//         </ul>

//         <strong className="tt2"> 悠币兑换： </strong>
//         <ul className=" list2">
//             <li> 消耗一定数量的悠币可兑换相应档位的优惠券，每档优惠券不限兑换次数，优惠券数量有限，兑完即止 </li>
//             <li> 悠币兑换优惠券自动绑定至会员账户，结算时下拉选择相应优惠券即可使用 </li>
//             <li> 悠币兑换优惠券有效期：成功兑换起5天内有效 </li>
//             <li> 每张优惠券仅限使用一次，悠币兑换优惠券不可与其他优惠券叠加使用 </li>
//             <li> 悠币兑换优惠券后概不退换，使用悠币兑换的优惠券订单如发生退货，恕不返还优惠券和悠币 </li>
//         </ul>

//     </div>

//     <img src={require('../../../static/images/qiandao_11.')}/>
// </div>
