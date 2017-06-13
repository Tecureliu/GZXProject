
import React, {Component} from 'react'
import TabController from '../tab/tab'
import '../../static/styles/common.scss'
import './DDlist.scss'



export default class DDlistComponent extends React.Component {
    
    constructor(poprs){
        super(poprs)
        
        this.state = {};
        // console.log(poprs);
    
    }
    changegreen(){
    //  var green = 'green';
    // this.setState({bg: 'green'})
    }
        
    render(){
        
        return(
            <div className="ddlist">
                <div className="lb-1">
                <ul className="lb-ul">
                    <TabController>
                   <li  name="默认">123</li> 
                   <li  name="价格"></li>
                   <li  name="热销" ></li>
                   </TabController>
                </ul>
                </div>
                <div className="bal"></div>
                <div className="goods">
                <ul className="sp-list">
                <li className="sp-li">
                <div className="god-img">
                    <a href="#/carlist">
                    <img src={require('../../static/imgs/1.jpg')} alt=""/></a>        
                </div>
                <span className="sp-name">123</span>
                <span className="sp-price">
                ￥<span>123</span><span>(150g/袋)</span>    
                </span>
                <i className="iconfont icon-gouwuche carlist"></i>
                </li>
                </ul>
                </div>
                
            </div>
        )
    }
}




// export default class DDlistComponent extends Component {
//     constructor(props){
//         super(props);
//         this.state = {

//         };
//     }

//     render(){
//         return (
//             <TabController>
//                 <div name="one">
                    
//                 </div>
//                 <div name="two">
                    
//                 </div>
//                 <div name="three">
                    
//                 </div>
//             </TabController>
//         );
//     }
// }