//处理 ajax 返回数据和一些状态管理
//发起 ajax 请求前 => show up loading
//ajax 完成之后 => loading hided $.get('url', function(response){})  => {status: true, data: [{}]}
// action => store = createStroe(reducer, 中间件) => reducer

import * as types from '../../redux/commonConstant'
import {combineReducers} from 'redux'

function cart(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.REQUEST:
            reState.loading = true
            break
        case types.SUCCESS:
        // console.log(action)
            if(action.payload.cart == 'cart'){
                reState.data = action.body
            }
            
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break
        case types.FAILURE:
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}

const cartReducer = combineReducers({
    cart
})

export default cartReducer
