import {SUCCESS,FAIL} from '../constants/restaurantConstants'

export const RestaurantsListReducers = (state ={restaurant:[]},action) => {

    switch(action.type){

        case SUCCESS:
            return {restaurant:action.payload}

        case FAIL:
            return {restaurant:action.error}

        default:
            return state
    
    }

}
