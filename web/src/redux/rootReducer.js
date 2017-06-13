import login from '../modules/login/LoginReducer'
import index from '../modules/index/IndexReducer'
import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    login,
    router,
    index
})

export default rootReducer