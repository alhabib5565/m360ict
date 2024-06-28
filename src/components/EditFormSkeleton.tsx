import { Col, Row, Skeleton } from "antd";

const EditFormSkeleton = () => {
  return (
    <>
      {new Array(5).fill(null).map((_, index) => (
        <Row key={index} gutter={24} style={{ marginBottom: 30 }}>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <Skeleton.Input active={true} size={"default"} block={true} />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <Skeleton.Input active={true} size={"default"} block={true} />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <Skeleton.Input active={true} size={"default"} block={true} />
          </Col>
        </Row>
      ))}
      <Row justify={"end"}>
        <Skeleton.Button />
      </Row>
    </>
  );
};

export default EditFormSkeleton;
