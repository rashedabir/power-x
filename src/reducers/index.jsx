import { combineReducers } from "redux"
import { viewOfferReducer } from "./offerReducer"

const reducers = combineReducers({
    offers: viewOfferReducer,
})

export default reducers;