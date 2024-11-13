import React from "react";
import "../Home.css";
import { Button, Col, Input, Row, Select, Typography, Collapse } from "antd";
import Visa from "../../../Images/visa.svg";
import Mastercard from "../../../Images/mastercard.svg";
import Paypal from "../../../Images/paypal.svg";
import Logo from "../../../Images/logo.svg";
import Icon from "../../../Layout/components/Icon";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  PinterestOutlined,
  TikTokOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
const { Text, Title } = Typography;

const { Panel } = Collapse;

const HomeFooter = () => {
  const isMobile = useMediaQuery({
    query: "(min-width: 360px) and (max-width: 770px)",
  });
  const isMediumScreen = useMediaQuery({
    minDeviceWidth: 770,
    maxDeviceWidth: 1220,
  });
  return (
    <footer className="footer">
      <div className="footer-content">
        {isMobile ? (
          <div className="customer-support">
            <Col>
              <Title level={4}>24/7 Customer Support</Title>
              <Text>
                Our team of experienced specialists have travelled to hundreds
                of countries around the world and have decades of experience.
                Contact us if you face any issues before, during, or after your
                trip.
              </Text>
            </Col>

            <Button className="contact-us-btn">Contact Us</Button>
          </div>
        ) : (
          <Row
            style={{ justifyContent: "space-between", marginBottom: "32px" }}
            className="customer-support"
          >
            <Col span={14}>
              <Title level={4}>24/7 Customer Support</Title>
              <Text>
                Our team of experienced specialists have travelled to hundreds
                of countries around the world and have decades of experience.
                Contact us if you face any issues before, during, or after your
                trip.
              </Text>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              span={6}
            >
              <Button className="contact-us-btn">Contact Us</Button>
            </Col>
          </Row>
        )}
        {isMobile ? (
          <>
            <Collapse>
              <Panel header="ABOUT US" key="1">
                <p>Who we are</p>
                <p>How It Works</p>
                <p>Privacy Policy</p>
                <p>Term of use</p>
                <p>Contact Us & FAQ</p>
              </Panel>
              <Panel header="HELP CENTER" key="2">
                <p>FAQs</p>
                <p>Support Services</p>
                <p>Payment Issues</p>
                <p>Booking Guidelines</p>
                <p>Report a Problem</p>
              </Panel>
              <Panel header="JOIN US" key="3">
                <p>Sign up as an Agency</p>
                <p>Benefits</p>
                <p>Community Guidelines</p>
                <p>Partner Programs</p>
                <p>Support for Partners</p>
              </Panel>
            </Collapse>
            <p
              style={{
                color: "#00000073",
                marginTop: "20px",
                paddingInline: "20px",
              }}
            >
              Payment Method
            </p>
            <Row style={{ gap: "16px", marginBottom: "20px" }}>
              <img src={Visa} alt="" />
              <img src={Mastercard} alt="" />
              <img src={Paypal} alt="" />
            </Row>
            <Col style={{ paddingInline: "15px" }}>
              <img src={Logo} style={{ marginBottom: "8px" }} alt="" />
              <Text type="secondary">
                Sign up for the latest news, current offers travel content here
              </Text>
              <Input
                className="subscribe-input"
                placeholder="Your email"
                suffix={<Button className="subscribe-button">Subscribe</Button>}
              ></Input>
              <div className="icon-list">
                <Icon>
                  <TikTokOutlined></TikTokOutlined>
                </Icon>
                <Icon>
                  <FacebookOutlined></FacebookOutlined>
                </Icon>
                <Icon>
                  <InstagramOutlined></InstagramOutlined>
                </Icon>
                <Icon>
                  <PinterestOutlined></PinterestOutlined>
                </Icon>
                <Icon>
                  <LinkedinOutlined></LinkedinOutlined>
                </Icon>
                <Icon>
                  <WhatsAppOutlined></WhatsAppOutlined>
                </Icon>
                <Icon>
                  <YoutubeOutlined></YoutubeOutlined>
                </Icon>
              </div>
              <p style={{ color: "#00000073" }}>
                © 2021 - 2024 Holicay. All Rights Reserved.
              </p>
            </Col>
          </>
        ) : (
          <Row className="footer-row">
            <Col style={{ paddingInline: "15px" }} span={6} md={7}>
              <img src={Logo} style={{ marginBottom: "8px" }} alt="" />
              <Text type="secondary">
                Sign up for the latest news, current offers travel content here
              </Text>
              <Input
                className="subscribe-input"
                placeholder="Your email"
                suffix={<Button className="subscribe-button">Subscribe</Button>}
              ></Input>
              <div className="icon-list">
                <Icon>
                  <TikTokOutlined></TikTokOutlined>
                </Icon>
                <Icon>
                  <FacebookOutlined></FacebookOutlined>
                </Icon>
                <Icon>
                  <InstagramOutlined></InstagramOutlined>
                </Icon>
                <Icon>
                  <PinterestOutlined></PinterestOutlined>
                </Icon>
                <Icon>
                  <LinkedinOutlined></LinkedinOutlined>
                </Icon>
                <Icon>
                  <WhatsAppOutlined></WhatsAppOutlined>
                </Icon>
                <Icon>
                  <YoutubeOutlined></YoutubeOutlined>
                </Icon>
              </div>
              <p style={{ color: "#00000073" }}>
                © 2021 - 2024 Holicay. All Rights Reserved.
              </p>
            </Col>
            <Col style={{ paddingInline: "15px" }} span={4} md={4}>
              <Title className="footer-titles" level={5}>
                ABOUT US
              </Title>
              <Col className="footer-cols">
                <p>Who we are</p>
                <p>How It Works</p>
                <p>Privacy Policy</p>
                <p>Term of use</p>
                <p>Contact Us & FAQ</p>
              </Col>
            </Col>
            <Col
              className="footer-titles"
              style={{ paddingInline: "15px" }}
              span={4}
            >
              <Title className="footer-titles" level={5}>
                Explore Itineraries
              </Title>
              <Col className="footer-cols">
                <p>Product Guides</p>
                <p>Travel Guides</p>
              </Col>
            </Col>
            <Col
              className="footer-titles"
              style={{ paddingInline: "15px" }}
              span={4}
            >
              <Title className="footer-titles" level={5}>
                Join Us
              </Title>
              <Col className="footer-cols">
                <p>Sign up as an Agency</p>
              </Col>
            </Col>
            <Col
              className="footer-titles"
              style={{ paddingInline: "15px" }}
              span={5}
              md={5}
            >
              <Title className="footer-titles" level={5}>
                Site / Currency
              </Title>
              <Select
                style={{ height: "40px", width: "100%", marginBottom: "30px" }}
              >
                <Select.Option>$ United States Dollar</Select.Option>
              </Select>
              <p style={{ color: "#00000073" }}>Payment Method</p>
              {isMediumScreen ? (
                <Col>
                  {" "}
                  <img src={Visa} alt="" />
                  <img src={Mastercard} alt="" />
                  <img src={Paypal} alt="" />
                </Col>
              ) : (
                <Row style={{ gap: "16px", marginTop: "16px" }}>
                  <img src={Visa} alt="" />
                  <img src={Mastercard} alt="" />
                  <img src={Paypal} alt="" />
                </Row>
              )}
            </Col>
          </Row>
        )}
      </div>
    </footer>
  );
};

export default HomeFooter;
