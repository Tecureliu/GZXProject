import { SHOWCITYLIST,HIDECITYLIST,RECEIVE_CITY_LIST,SELECTCITYLIST } from './cityConstant';

// 初始化state数据
const initialState = {
    cityListState:false,
    cityName: '北京',
    cityCode:'110100',
    cityList: []
}

// 通过dispatch action进入
export default function movie(state = initialState, action) {
	let reState = JSON.parse(JSON.stringify(state));
    // 根据不同的action type进行state的更新
    switch(action.type) {
        case SHOWCITYLIST:
        	reState.cityListState = true;
            break;
        case HIDECITYLIST:
        	reState.cityListState = false;
            break;
        case RECEIVE_CITY_LIST:
        	reState.cityList = action.cityList;
            break;
        case SELECTCITYLIST:
        	console.log(action.cityName)
        	reState.cityName = action.cityName;
        	reState.cityCode = action.cityCode;
    }
    return reState;
}