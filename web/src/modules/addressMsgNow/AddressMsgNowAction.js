import * as constants from '../../redux/commonConstant'

export function addressMsgDq(locationCs){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'addressNsNowRead',
        method: 'post',
        query: {locationCs}
    }
}
//locationCs

export function addressMsgDqDefault(addressusername, addressuserphone, phone, addresssheng, addressusercity, addressuserqu, addressuseraddress, addressuseraddresslx, myDate, addressuseraddressDefault){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'addressMsgNowDefault',
        method: 'post',
        query: {addressusername, addressuserphone, phone, addresssheng, addressusercity, addressuserqu, addressuseraddress, addressuseraddresslx, myDate, addressuseraddressDefault}
    }
}


export function addressMsgDqNoDefault(addressusername, addressuserphone, phone, addresssheng, addressusercity, addressuserqu, addressuseraddress, addressuseraddresslx, myDate, addressuseraddressDefault){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'addressMsgNowNoDefault',
        method: 'post',
        query: {addressusername, addressuserphone, phone, addresssheng, addressusercity, addressuserqu, addressuseraddress, addressuseraddresslx, myDate, addressuseraddressDefault}
    }
}