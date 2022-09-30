import React from 'react'
import { useEffect , useState} from 'react'
import {useParams} from 'react-router-dom'
import {Row, Col , Image, ListGroup} from 'react-bootstrap'
function RestaurantDetails() {
  const params = useParams()
  console.log(params.id);
  const [items,setItem] = useState([])

  async function fetchData(){
      await fetch('/restaurants.json')
      .then((result) => {
          result.json()
          .then((data)=>{
              setItem(data.restaurants)
          })
      })
  }
  useEffect(()=>{
      fetchData()
  },[])
  const restDetails = items.find((item) =>(
    item.id == params.id
  ))
  console.log(restDetails);
  return (
    <div>
      {
        restDetails?(
          <Row>
            <Col md={5}>
            <Image className='m-5' style={{width:"75%"}} src={restDetails.photograph} fluid></Image>
            </Col>
            <Col md={3}>
            <h3 className='my-5'>{restDetails.name}</h3>
            <h4>Cuisine:{restDetails.cuisine_type}</h4>
            <h6>Near:{restDetails.neighborhood}</h6>
            <p>Address:{restDetails.address}</p>
            </Col>
            <Col md={3}>
            <ListGroup className='m-5' style={{width:"75%"}}><h3>Working Hours</h3>
            <ListGroup.Item>Monday:{restDetails.operating_hours.Monday}</ListGroup.Item>
            <ListGroup.Item>Tuesday:{restDetails.operating_hours.Tuesday}</ListGroup.Item>
            <ListGroup.Item>Wednesday:{restDetails.operating_hours.Wednesday}</ListGroup.Item>
            <ListGroup.Item>Thursday:{restDetails.operating_hours.Thursday}</ListGroup.Item>
            <ListGroup.Item>Friday:{restDetails.operating_hours.Friday}</ListGroup.Item>
            <ListGroup.Item>Saturday:{restDetails.operating_hours.Saturday}</ListGroup.Item>
            <ListGroup.Item>Sunday:{restDetails.operating_hours.Sunday}</ListGroup.Item>
            </ListGroup>
            </Col>
          </Row>
        ):''
      }
    </div>
  )
}

export default RestaurantDetails