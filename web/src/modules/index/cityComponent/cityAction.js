import { SHOWCITYLIST,HIDECITYLIST,RECEIVE_CITY_LIST,SELECTCITYLIST } from './cityConstant';
import fetch from 'isomorphic-fetch'
//展示城市列表
export function showCityList(){
  return {
    type:SHOWCITYLIST
  }
}
//隐藏城市列表
export function hideCityList(){
  return {
    type:HIDECITYLIST
  }
}
//选择城市
export function citySelected(item){
  return {
    type:SELECTCITYLIST,
    cityName:item.regionName,
    cityCode:item.cityCode
  }
}

// 接收issues
function receiveCityList(data) {

  return {
    type: RECEIVE_CITY_LIST,
    cityList: data
  };
}
//点击获取城市列表
export function fetchCityList(){

  return dispatch => {
    //dispatch(requestIssues(filter, perPage));
    return fetch('./cityList.json')
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        dispatch(receiveCityList(data.data.returnValue));
      }
      )
      .catch(e => {});
  };
}
