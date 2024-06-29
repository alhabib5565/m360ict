import { Col, Row } from "antd";
import ProductDetailsCarousel from "./ProductDetailsCarousel";
import { productsApi } from "../../redux/api/productApi";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = productsApi.useGetProductByIdQuery(id);
  console.log(data);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Row>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <ProductDetailsCarousel
          images={data?.images}
          thumbnail={data?.thumbnail}
        />
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        right
      </Col>
    </Row>
  );
};

export default ProductDetails;
