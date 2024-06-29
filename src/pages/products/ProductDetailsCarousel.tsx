import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { TProduct } from "../../types/product.type";

type TProductDetailsCarouselProp = Pick<TProduct, "images" | "thumbnail">;

const ProductDetailsCarousel = ({
  thumbnail,
  images,
}: TProductDetailsCarouselProp) => {
  const [activeImage, setActiveImage] = useState(0);
  const dragX = useMotionValue(0);
  const allImages = [thumbnail, ...images];

  const previousImage = () => {
    setActiveImage((prev) =>
      activeImage === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setActiveImage((prev) =>
      activeImage === allImages.length - 1 ? 0 : prev + 1
    );
  };

  // handle drag
  const DRAG = 50;
  const onDragEnd = () => {
    const x = dragX.get();

    if (x >= DRAG && activeImage > 0) {
      setActiveImage((prev) => prev - 1);
    } else if (x <= DRAG && allImages.length - 1 > activeImage) {
      setActiveImage((prev) => prev + 1);
    }
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 400,
          border: "1px solid #999",
          overflow: "hidden",
          borderRadius: "4px",
        }}
        // className="relative w-full h-[300px] lg:h-[400px] border rounded-md overflow-hidden"
      >
        <motion.div
          drag="x"
          onDragEnd={onDragEnd}
          style={{ x: dragX, height: "100%", width: "100%", display: "flex" }}
          animate={{ translateX: `-${activeImage * 100}%` }}
          dragConstraints={{ left: 0, right: 0 }}
          // className="w-full h-full flex"
        >
          {allImages.map((img, index) => (
            <div
              style={{
                backgroundImage: `url(${img})`,
                width: "100%",
                height: "auto",
                flexShrink: 0,
                cursor: "grab",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              key={index}
            ></div>
          ))}
        </motion.div>
        <div>
          <Button
            onClick={previousImage}
            style={{
              position: "absolute",
              top: "50%",
              left: 5,
              transform: "translateY(-50%)",
            }}
            icon={<LeftOutlined />}
            type="primary"
            size="large"
            shape="circle"
          />
          <Button
            onClick={nextImage}
            style={{
              position: "absolute",
              top: "50%",
              right: 5,
              transform: "translateY(-50%)",
            }}
            icon={<RightOutlined />}
            type="primary"
            size="large"
            shape="circle"
          />
        </div>
      </div>
      <div
        // className="flex items-center gap-1 mt-2"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          marginTop: 8,
        }}
      >
        {allImages.map((img, index) => (
          <Button
            style={{
              height: "60px",
              border: "2px solid #999",
              borderRadius: "4px",
              position: "relative",
              transition: "opacity 0.3s",
              opacity: index === activeImage ? 1 : 0.5,
            }}
            onClick={() => setActiveImage(index)}
            key={index}
          >
            <img
              src={img}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 4,
              }}
            />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsCarousel;
