import { Row, Col } from 'react-bootstrap'
import LoadingBox from '../components/LoadingBox/LoadingBox'
import MessageBox from '../components/LoadingBox/MessageBox'
import { ApiError } from '../types/ApiError'
import { getError } from '../utils'
import ProductItem from '../components/Product/ProductItem'
import { Helmet } from 'react-helmet-async'
import { useGetProductsQuery } from '../hooks/productHooks'

const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>Ecommerce Website</title>
      </Helmet>
      {products!.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  )
}

export default HomePage
