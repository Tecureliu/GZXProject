//处理 ajax 返回数据和一些状态管理
//发起 ajax 请求前 => show up loading
//ajax 完成之后 => loading hided $.get('url', function(response){})  => {status: true, data: [{}]}
// action => store = createStroe(reducer, 中间件) => reducer

import * as types from '../../redux/commonConstant'

export default function(state = { loading: false ,address:''}, action) {
    //console.log(action.body)
    let reState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case types.REQUEST:
            reState.istrue = false
            reState.loading = true
            break
        case types.SUCCESS:
            reState.loading = true
            // console.log(action.body)
            if(action.body.message.data){
                reState.istrue = true
                reState.address = action.body
                reState.loading = false
            }else if(action.body.message == '您还没有地址'){
                reState.loading = false
            }
            break
        case types.FAILURE:
            reState.istrue = false
            reState.error = action.error
            reState.loading = false
            break
    }
    //console.log(reState, action)
    return reState;
}