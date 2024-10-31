import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Col, List, Row, Select, Typography } from "antd";
import React from "react";
import { Circle } from "react-feather";

const { Text } = Typography;

const DrawerContent = () => {
  const data = [
    { color: "#4285F4", category: "Accommodations", amount: "$0.00" },
    { color: "#EA4335", category: "Food & Beverages", amount: "$0.00" },
    { color: "#FBBC05", category: "Transportations", amount: "$0.00" },
    { color: "#34A853", category: "Places", amount: "$0.00" },
    { color: "#9B51E0", category: "Experiences", amount: "$0.00" },
  ];
  return (
    <div className="drawer-content-container">
      <div>
        <h4 className="your-expenses">Your expenses</h4>
        <h3 className="expenses-price">$0.00</h3>
      </div>
      <div className="custom-package">
        <p className="custom-pack-para">
          Need last-minute help? Let us design a custom travel package tailored
          to your budget in <span>less than 48 hours</span> + exclusive deals
          too!
        </p>
        <Button size="large" className="interested-btn">
          I'm interested
        </Button>
      </div>
      <Row style={{ gap: "0.75em" }}>
        <canvas
          role="img"
          height="176"
          width="176"
          className="canvas-circle"
        ></canvas>
        <div className="detail-list">
          <p>
            Details <InfoCircleOutlined color="" />
          </p>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item style={{ borderBottom: "0px" }}>
                <List.Item.Meta
                  avatar={<Circle size={12} color={item.color} />}
                  title={<Text>{item.category}</Text>}
                />
                <Text>{item.amount}</Text>
              </List.Item>
            )}
          />
        </div>
      </Row>
      <div>
        <Row style={{ justifyContent: "space-between" }}>
          <Col>
            <p className="expenses-breakdown">Expenses breakdown</p>
            <p>1 traveller</p>
          </Col>
          <Col>
            <Row style={{alignItems:"center"}}>
              <p>Sort:</p>
              <Select style={{width:"140px", border:"0px"}} placeholder="Category"></Select>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DrawerContent;
