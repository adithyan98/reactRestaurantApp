import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import {Row,Col} from 'react-bootstrap'
import { RestaurantsList } from '../actions/restaurantAction'
import { useDispatch,useSelector } from 'react-redux'
function Dashboard() {
    const [item,setItem] = useState([])

    // async function fetchData(){
    //     await fetch('/restaurants.json')
    //     .then((result) => {
    //         result.json()
    //         .then((data)=>{
    //             setItem(data.restaurants)
    //         })
    //     })
    // }
    const dispatch = useDispatch()

    const result = useSelector((state) => state.restaurantReducer)
    const {restaurant} = result
    console.log(restaurant);

    useEffect(()=>{
        // fetchData()
        dispatch(RestaurantsList())
    },[])
  return (
    <Row>
        {
            restaurant.map((items)=>(
                <Col sm={12} md={6} lg={4} xl={3}>
                <RestaurantCard data={items}/>
                </Col>
                ))
        }
    </Row>
  )
}

export default Dashboard