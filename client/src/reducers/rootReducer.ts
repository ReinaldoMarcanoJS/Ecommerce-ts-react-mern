import { combineReducers } from "redux";
import authReducer from "../slices/auth.slice"
import uiReducer from "../slices/ui.slice"
import productReducer from "../slices/products.slice"


const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    products: productReducer
})
export type IRootState = ReturnType<typeof rootReducer>
export default rootReducer