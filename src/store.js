import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { RestaurantsListReducers } from "./reducers/restaurantReducers";

const reducers = combineReducers({

    restaurantReducer:RestaurantsListReducers

})

const middleware = [thunk]

const store = createStore(reducers,applyMiddleware(...middleware))

export default store