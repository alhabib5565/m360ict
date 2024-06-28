// import { useState } from "react";
import { Pagination, Space, Table, Tag } from "antd";
import type { PaginationProps, TableProps } from "antd";
import { productsApi } from "../../redux/api/productApi";
import { useState } from "react";

type ColumnsType<T extends object> = TableProps<T>["columns"];

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Product Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags: string[]) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
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
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
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
