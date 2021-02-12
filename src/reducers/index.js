import { combineReducers } from 'redux'
import userReducer from './user.reducer'
import { productDetailsReducer, productListReducer } from './product.reducer'

const rootReducer = combineReducers({
    user: userReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
})

export default rootReducer