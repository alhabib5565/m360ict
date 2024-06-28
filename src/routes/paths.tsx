import Products from "../pages/products/Products";

export type TPahts = {
  name: string;
  path: string;
  element: JSX.Element;
};

export const paths: TPahts[] = [
  {
    name: "Product List",
    path: "/products",
    element: <Products />,
  },
];
