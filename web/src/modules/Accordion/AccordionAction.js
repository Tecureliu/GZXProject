import * as constants from '../../redux/commonConstant'

export function listing(list,num,dd){
    console.log(list,num)
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'listing',
        method: 'post',
        query:{list,num},
        dd:dd
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