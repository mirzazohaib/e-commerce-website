import React from 'react'
import { Badge, Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import Rating from '../components/Rating'
import { ApiError } from '../types/ApiError'
import { getError } from '../utils'
import { Helmet } from 'react-helmet-async'
import { useEffect, useReducer } from 'react'
import { Product } from '../types/Product'
import axios from 'axios'

type State = {
  products: Product[]
  loading: boolean
  error: string
}

type Action =
  | { type: 'FETCH_REQUEST' }
  | {
      type: 'FETCH_SUCCESS'
      payload: Product[]
    }
  | { type: 'FETCH_FAIL'; payload: string }

const initialState: State = {
  products: [],
  loading: true,
  error: ''
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const ProductPage = () => {
  const [{ loading, error, products }, dispatch] = useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  )

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const result = await axios.get('/products.json')
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err as ApiError) })
      }
    }
    fetchData()
  }, [])

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : error ? (
    <MessageBox variant="danger">Product Not Found</MessageBox>
  ) : (
    <Row>
      {products.map((product) => (
        <>
          <Col key={product.slug} md={6}>
            <img className="large" src={product.image} alt={product.name}></img>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Helmet>
                  <title>{product.name}</title>
                </Helmet>
                <h1>{product.name}</h1>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
              </ListGroup.Item>
              <ListGroup.Item>Price : €{product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description:
                <p>{product.description}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>€{product.price}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? (
                          <Badge bg="success">In Stock</Badge>
                        ) : (
                          <Badge bg="danger">Unavailable</Badge>
                        )}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <div className="d-grid">
                        <Button variant="primary">Add to Cart</Button>
                      </div>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </>
      ))}
    </Row>
  )
}
export default ProductPage
