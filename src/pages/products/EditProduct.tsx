import { Button, Col, Form, Input, InputNumber, Row } from "antd";
import { productsApi } from "../../redux/api/productApi";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const { data } = productsApi.useGetProductByIdQuery(id);
  console.log(data);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (value: any) => {
    console.log(value);
  };
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        title: "Essence Mascara Lash Princess",
        description:
          "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
        category: "beauty",
        price: 9.99,
        discountPercentage: 7.17,
        stock: 5,
        brand: "Essence",
        sku: "RCH45Q1A",
        weight: 2,
        dimensions: {
          width: 23.17,
          height: 14.43,
          depth: 28.01,
        },
        warrantyInformation: "1 month warranty",
        shippingInformation: "Ships in 1 month",
        availabilityStatus: "Low Stock",
        minimumOrderQuantity: 24,
      }}
    >
      {/* title, brand & category */}
      <Row gutter={8}>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Form.Item
            label="Brand"
            name="brand"
            rules={[{ required: true, message: "Please input the brand!" }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please input the category!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      {/* price, discountPercentage, and stock */}
      <Row gutter={8}>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Form.Item label="Price" name="price">
            <InputNumber style={{ width: "100%" }} min={0} step={0.01} />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Form.Item label="Discount Percentage" name="discountPercentage">
            <InputNumber
              style={{ width: "100%" }}
              min={0}
              max={100}
              step={0.01}
            />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Form.Item label="Stock" name="stock">
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      {/* dimensions */}
      <Row gutter={8}>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Form.Item label="Dimensions (Width)" name={["dimensions", "width"]}>
            <InputNumber style={{ width: "100%" }} min={0} step={0.01} />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Form.Item
            label="Dimensions (Height)"
            name={["dimensions", "height"]}
          >
            <InputNumber style={{ width: "100%" }} min={0} step={0.01} />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Form.Item label="Dimensions (Depth)" name={["dimensions", "depth"]}>
            <InputNumber style={{ width: "100%" }} min={0} step={0.01} />
          </Form.Item>
        </Col>
      </Row>

      {/* sku, weight & minimum order quantity */}
      <Row gutter={8}>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Form.Item label="SKU" name="sku">
            <Input />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Form.Item label="Weight" name="weight">
            <InputNumber style={{ width: "100%" }} min={0} step={0.01} />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Form.Item label="Minimum Order Quantity" name="minimumOrderQuantity">
            <InputNumber style={{ width: "100%" }} min={1} />
          </Form.Item>
        </Col>
      </Row>

      {/* information */}
      <Row gutter={8}>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Form.Item label="Warranty Information" name="warrantyInformation">
            <Input />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Form.Item label="Shipping Information" name="shippingInformation">
            <Input />
          </Form.Item>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
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
