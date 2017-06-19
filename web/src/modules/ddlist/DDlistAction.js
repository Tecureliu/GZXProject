import * as types from '../../redux/commonConstant'

export function change(change){
    console.log(change)
    return {
        types: [types.REQUEST, types.SUCCESS, types.FAILURE],
        path: 'change',
        method: 'post',
        query:{change},
        dd:dd
    }
}

export function addItem(obj){
    // console.log(111);
    return {
        types: [types.REQUEST,types.SUCCESS,types.FAILURE],
        path: 'addItem',
        method: 'post',
        query: obj
    }
    
}


// export function login(username, password){
//     return {
//         type: 'aa'
//     }
// }
        // types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        // path: 'login', 这个是api
        // method: 'post',这个是请求
        // query: {username, password}这个是参数