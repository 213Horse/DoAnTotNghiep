import {
  DollarOutlined,
  DownOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MenuOutlined,
  PinterestOutlined,
  ProfileOutlined,
  TikTokOutlined,
  UserOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Input,
  Layout,
  Menu,
  Row,
  Select,
  Typography,
} from "antd";
import Search from "antd/es/transfer/search";
import React, { useState } from "react";
import "./DefaultLayout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../Images/logo.svg";
import { useMediaQuery } from "react-responsive";

const { Content } = Layout;
const { Item } = Menu;
const { Text, Title } = Typography;



const DefaultLayout = ({ children }) => {
  const [currency, setCurrency] = useState("CNY");  // Default or retrieved from a global state or props

    const handleMenuClick = (e) => {
        setCurrency(e.key);
        console.log('Selected Currency:', e.key);
    };
  const isMobile = useMediaQuery({
    query: "(min-width: 360px) and (max-width: 770px)",
  });
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname === "/planning");
  const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="AUD">AUD - Australian dollar</Menu.Item>
        <Menu.Item key="CNY">CNY - Chinese yuan</Menu.Item>
        <Menu.Item key="USD">USD - United States dollar</Menu.Item>
        <Menu.Item key="GBP">GBP - British pound</Menu.Item>
        <Menu.Item key="HKD">HKD - Hong Kong dollar</Menu.Item>
        <Menu.Item key="EUR">EUR - Euro</Menu.Item>
        <Menu.Item key="CAD">CAD - Canadian dollar</Menu.Item>
        <Menu.Item key="SGD">SGD - Singapore dollar</Menu.Item>
        <Menu.Item key="CHF">CHF - Swiss franc</Menu.Item>
    </Menu>
  );
  return (
    <Layout>
      <header className="header">
        <Row
          className={`header-content ${
            location.pathname === "/planning" ? "planner" : ""
          }`}
        >
          <Row className="left-header">
            <img
              onClick={() => {
                navigate("/");
              }}
              src={Logo}
              alt=""
            />
            {isMobile ? (
              ""
            ) : (
              <Menu mode="horizontal">
                <Menu.Item>Travel Intineraries</Menu.Item>
                <Menu.Item>Find a planner</Menu.Item>
              </Menu>
            )}
          </Row>

          <Row className="right-header">
            {location.pathname === "/planning" ? (
              <>
              <Dropdown overlay={menu}>
            <Button style={{ width: '100%' }}>
                {currency} <DownOutlined />
            </Button>
        </Dropdown>
                <div className="avatar-container">
                  <Avatar
                    className="login-avatar"
                    icon={
                      <UserOutlined
                        style={{
                          color: "black",
                          border: "2px solid black",
                          borderRadius: "50%",
                        }}
                      />
                    }
                  ></Avatar>
                </div>
              </>
            ) : (
              <>
                {" "}
                <Search placeholder="Search Destination"></Search>
                {isMobile ? (
                  <MenuOutlined></MenuOutlined>
                ) : (
                  <>
                    <Button className="plan-button">Plan a trip</Button>
                    <div className="avatar-container">
                      <Avatar
                        className="login-avatar"
                        icon={
                          <UserOutlined
                            style={{
                              color: "black",
                              border: "2px solid black",
                              borderRadius: "50%",
                            }}
                          />
                        }
                      ></Avatar>
                    </div>
                  </>
                )}
              </>
            )}
          </Row>
        </Row>
      </header>
      <Content
        style={{
          background: "white",
        }}
      >
        {children && children}
      </Content>

      <div className="fixed-logo">
        <WhatsAppOutlined></WhatsAppOutlined>
      </div>
    </Layout>
  );
};

export default DefaultLayout;
