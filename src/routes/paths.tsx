import EditProduct from "../pages/products/EditProduct";
import ProductDetails from "../pages/products/ProductDetails";
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
    path: "productDetails/:id",
    element: <ProductDetails />,
  },
  {
    path: "/productEdit/:id",
    element: <EditProduct />,
  },
];
