import React, { Component } from 'react';
import * as cityActions from './cityAction'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import './city.scss'

class CityComponent extends Component {
  constructor(props) {
    super(props);
    //this.selectCity = this.selectCity.bind(this);
  }
  componentWillMount() {
    // console.log(this.props)
  	this.props.fetchCityList()
    
  }
  selectCity(item){
  	this.props.citySelected(item);
  	this.props.hideCityList();
  }
  render() {
  	// if(!!this.isFetch){
  	// 	return;
  	// }
    // console.log(this.props) 
    // console.log(this.props)
    return (
      
      <div className="cityLayer">
        <div className="city-title">选择城市
        	<Link to="/index"><span className="closeCity" onClick={()=>{this.props.hideCityList()}}>×</span></Link>
        </div>
        <div className="city-list">
        	<div className="city-category" id="当前">
        		<h3>当前</h3>
        		<ul>
					<li onClick={()=>{this.props.hideCityList()}}>{this.props.cityName}</li>
        		</ul>
        	</div>
        	<div className="city-category" id="GPS">
        		<h3>GPS</h3>
        		<ul>
					<li>定位中...</li>
        		</ul>
        	</div>
        	{
        		Object.keys(this.props.cityList).map((t,i)=>{
        			return  <div className="city-category" id={t}>
				        		<h3>{t}</h3>
				        		<ul>
				        			{
        								this.props.cityList[t].map((item,index)=>{
        									return <Link to="/index"><li key={item.cityCode} onClick={this.selectCity.bind(this,item)} >{item.regionName}</li></Link>
        								})
				        			}
				        		</ul>
				        	</div>
        		})
        	}
        </div>
        <div className="city-index">
        	<ul>
        		<li>
        			<a href="#当前">当前</a>
        		</li>
        		{
        			Object.keys(this.props.cityList).map((t,i)=>{
        				return <li>
        					<a href={'#'+t}>{t}</a>
        				</li>
        			})	
        		}
        	</ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cityCode:state.city.cityCode,
    cityListState:state.city.cityListState,
    cityList:state.city.cityList,
    cityName:state.city.cityName
  }
}

export default connect(mapStateToProps,cityActions)(CityComponent)
// export default CityComponent