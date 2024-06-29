import { Button, Col, Flex, Radio, Rate, Row, Tag } from "antd";
import { Divider } from "antd";
import ProductDetailsCarousel from "./ProductDetailsCarousel";
import { productsApi } from "../../redux/api/productApi";
import { useParams } from "react-router-dom";
import { TProduct } from "../../types/product.type";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ReviewCard from "./ReviewCard";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = productsApi.useGetProductByIdQuery(id);
  console.log(data);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  const {
    title,
    brand,
    description,
    price,
    rating,
    reviews,
    availabilityStatus,
    sku,
  } = data as TProduct;
  return (
    <>
      <Row gutter={24}>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <ProductDetailsCarousel
            images={data?.images}
            thumbnail={data?.thumbnail}
          />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Flex vertical>
            <p style={{ margin: 0, fontWeight: 600, color: "#4096FF" }}>
              {brand}
            </p>
            <h2 style={{ margin: "10px 0px" }}>{title}</h2>
            <Flex gap={6}>
              <Rate style={{ height: 10 }} disabled value={rating} />
              <span>Reviews({reviews.length})</span>
            </Flex>
          </Flex>

          <Flex style={{ marginTop: "30px" }} vertical gap={10}>
            <h1 style={{ margin: 0 }}>${price}</h1>
            <Flex gap={10}>
              <span>SKU: {sku}</span>
              <Tag color="blue">{availabilityStatus}</Tag>
            </Flex>
            <p
              style={{
                marginTop: 0,
                fontWeight: 600,
                color: "#999",
                fontSize: 16,
              }}
            >
              {description}
            </p>
          </Flex>
          <Flex style={{ marginTop: "30px" }} gap={16}>
            <Button>Buy Now</Button>
            <Button type="primary" style={{ width: "50%" }}>
              Add To Cart
            </Button>

            <Radio.Group>
              <Radio.Button>
                <PlusOutlined />
              </Radio.Button>
              <Radio.Button>0</Radio.Button>
              <Radio.Button>
                <MinusOutlined />
              </Radio.Button>
            </Radio.Group>
          </Flex>
        </Col>
      </Row>
      <Divider />
      <div style={{ marginTop: "50px" }}>
        <span>Reviews({reviews.length})</span>
        <Row gutter={24} style={{ marginTop: "10px" }}>
          {reviews.map((review) => (
            <ReviewCard key={data.id} review={review} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default ProductDetails;
