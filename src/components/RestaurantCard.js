import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function RestaurantCard({data}) {
  return (
    <Link style={{textDecoration:'none' , color:'white'}} to={`/restaurant-detail/${data.id}`}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={data.photograph} />
    <Card.Body>
      <Card.Title>{data.name}</Card.Title>
      <Card.Text>
        <p>Cuisine:{data.cuisine_type}</p>
      </Card.Text>
      <Card.Text>
        <p>{data.neighborhood}</p>
      </Card.Text>
    </Card.Body>
  </Card>
  </Link>
  )
}

export default RestaurantCard