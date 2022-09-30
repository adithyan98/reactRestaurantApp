import axios from "axios";
import { SUCCESS, FAIL } from '../constants/restaurantConstants'


export const RestaurantsList = () => async (dispatch) => {

    try {
        const { data } = await axios.get('/restaurants.json')
        console.log(data);
        dispatch({
            type: SUCCESS, payload: data.restaurants
        })
    }
    catch (error) {
        dispatch({
            type:FAIL , error:error
        })
    }
}