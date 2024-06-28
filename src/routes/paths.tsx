import ProductDetails from "../pages/home/ProductDetails";
import EditProduct from "../pages/products/EditProduct";
import Products from "../pages/products/Products";

export type TPahts = {
  name?: string;
  path: string;
  element: JSX.Element;
};

export const paths: TPahts[] = [
  {
    name: "Product List",
    path: "/products",
    element: <Products />,
  },
  {
    path: "/:id",
    element: <ProductDetails />,
  },
  {
    path: "/product/:id",
    element: <EditProduct />,
  },
];
