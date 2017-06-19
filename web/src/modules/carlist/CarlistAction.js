import * as constants from '../../redux/commonConstant'

export function change(list){
    console.log(list)
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'findlisting',
        method: 'post',
        query:{list}
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