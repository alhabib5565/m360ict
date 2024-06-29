import { Card, Col, Rate, Typography } from "antd";
import { TReview } from "../../types/product.type";

const { Paragraph, Text } = Typography;

type ReviewCardProps = {
  review: TReview;
};

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Col xs={{ span: 24 }} md={{ span: 8 }} style={{ marginBottom: "16px" }}>
      <Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <Text strong>{review.reviewerName}</Text>
          <Rate disabled value={review.rating} />
        </div>
        <Paragraph>{review.comment}</Paragraph>
        <Text type="secondary">
          {new Date(review.date).toLocaleDateString()}
        </Text>
      </Card>
    </Col>
  );
};

export default ReviewCard;
