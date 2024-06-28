import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";
import { productsApi } from "../../redux/api/productApi";
import { useParams } from "react-router-dom";
import EditFormSkeleton from "../../components/EditFormSkeleton";
import { TCategory, TProduct } from "../../types/product.type";

const EditProduct = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const {
    data: productData,
    isLoading,
    isFetching,
  } = productsApi.useGetProductByIdQuery(id);
  const { data: categoryData, isLoading: categoryLoading } =
    productsApi.useGetCategoriesQuery({});
  const categoryOption = categoryData?.map((item: TCategory) => ({
    value: item.slug,
    label: item.name,
  }));

  const onFinish = (value: Partial<TProduct>) => {
    console.log(value);
  };

  if (isLoading || isFetching) return <EditFormSkeleton />;
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={productData}
    >
      {/* title, brand & category */}
      <Row gutter={24}>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label="Brand" name="brand">
            <Input />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label="Category" name="category">
            <Select
              options={categoryOption}
              disabled={categoryLoading}
              showSearch
            />
          </Form.Item>
        </Col>
      </Row>

      {/* price, discountPercentage, and stock */}
      <Row gutter={24}>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label="Price" name="price">
            <InputNumber style={{ width: "100%" }} min={0} step={0.01} />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label="Discount Percentage" name="discountPercentage">
            <InputNumber
              style={{ width: "100%" }}
              min={0}
              max={100}
              step={0.01}
            />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label="Stock" name="stock">
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      {/* dimensions */}
      <Row gutter={24}>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label="Dimensions (Width)" name={["dimensions", "width"]}>
            <InputNumber style={{ width: "100%" }} min={0} step={0.01} />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item
            label="Dimensions (Height)"
            name={["dimensions", "height"]}
          >
            <InputNumber style={{ width: "100%" }} min={0} step={0.01} />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label="Dimensions (Depth)" name={["dimensions", "depth"]}>
            <InputNumber style={{ width: "100%" }} min={0} step={0.01} />
          </Form.Item>
        </Col>
      </Row>

      {/* sku, weight & minimum order quantity */}
      <Row gutter={24}>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label="SKU" name="sku">
            <Input />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label="Weight" name="weight">
            <InputNumber style={{ width: "100%" }} min={0} step={0.01} />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label="Minimum Order Quantity" name="minimumOrderQuantity">
            <InputNumber style={{ width: "100%" }} min={1} />
          </Form.Item>
        </Col>
      </Row>

      {/* information */}
      <Row gutter={24}>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label="Warranty Information" name="warrantyInformation">
            <Input />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label="Shipping Information" name="shippingInformation">
            <Input />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item label="Availability Status" name="availabilityStatus">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col xs={{ span: 24 }}>
          <Form.Item label="Description" name="description">
            <Input.TextArea rows={4} />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Product
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EditProduct;
