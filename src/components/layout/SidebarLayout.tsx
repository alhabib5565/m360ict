import { Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
import { sidebarItemGenerator } from "../../utils/sidebarItemGenerator";
import { paths } from "../../routes/paths";

const { Header, Content, Sider } = Layout;

const SidebarLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100%" }}>
      <Sider
        style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" items={sidebarItemGenerator(paths)} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SidebarLayout;
