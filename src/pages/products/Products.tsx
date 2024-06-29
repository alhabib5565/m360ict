// import { useState } from "react";
import { Button, Image, Pagination, Space, Table, Tag } from "antd";
import type { PaginationProps, TableProps } from "antd";
import { productsApi } from "../../redux/api/productApi";
import { useState } from "react";
import { Link } from "react-router-dom";

type ColumnsType<T extends object> = TableProps<T>["columns"];

interface DataType {
  key: string;
  name: string;
  age: number;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 100,
  },
  {
    title: "Thumbnail",
    dataIndex: "thumbnail",
    key: "thumbnail",
    width: 150,
    render: (thumbnail) => {
      return (
        <Image
          style={{
            width: 50,
          }}
          src={thumbnail}
        />
      );
    },
  },
  {
    title: "Product Title",
    dataIndex: "title",
    key: "title",
  },

  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags: string[]) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 6 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    align: "right",
    width: 100,
  },
  {
    title: "Action",
    key: "action",
    render: (row) => {
      return (
        <Space size="middle">
          <Link to={`/productEdit/${row.id}`}>
            <Button>Edit</Button>
          </Link>
          <Link to={`/productDetails/${row.id}`}>
            <Button>View Details</Button>
          </Link>
        </Space>
      );
    },
  },
];

const Products = () => {
  const [page, setPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(20);
  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    setPage(pageNumber);
  };

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (_, size) => {
    setItemsPerPage(size);
    setPage(1);
  };

  const { data, isLoading } = productsApi.useGetProductsQuery({
    skip: (page - 1) * itemsPerPage,
    limit: itemsPerPage,
  });
  return (
    <div>
      <Table
        // sticky
        scroll={{ y: 500 }}
        loading={isLoading}
        columns={columns}
        dataSource={data?.products}
        pagination={false}
      />
      <Space
        style={{
          display: "flex",
          justifyContent: "end",
          marginTop: 10,
        }}
      >
        <Pagination
          total={data?.total || 0}
          current={page}
          pageSize={itemsPerPage}
          showSizeChanger
          onChange={onChange}
          onShowSizeChange={onShowSizeChange}
        />
      </Space>
    </div>
  );
};

export default Products;
