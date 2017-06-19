import * as constants from '../../redux/commonConstant'

export function findpw(phone,findpwYzm){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'findpw',
        method: 'post',
        query: {phone,findpwYzm}
    }
}