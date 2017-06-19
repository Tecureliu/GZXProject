import * as constants from '../../redux/commonConstant'

export function regist(phone, username, password){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'regist',
        method: 'post',
        query: {phone, username, password}
    }
}