import React from "react";
import "../PlanningPage.css";
import {
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Space,
  Splitter,
  Typography,
} from "antd";
const { Title, Text } = Typography;
const { TextArea } = Input;

const PlanModalContent = () => {
  return (
    <div className="purchase-content">
      <h2 className="purchase-title">
        Get a price estimate for this itinerary as a private vacation
      </h2>
      <p className="purchase-description" type="secondary">
        We'll get back to you with an all-in price and availability within 24
        hours. Get discounts when you book more services or with more people.
      </p>
      <Form layout="vertical">
        <DatePicker
          placeholder="Add date"
          style={{ height: "50px", width: "100%" }}
        ></DatePicker>
        <Select
          style={{ height: "50px", width: "100%", marginTop: "30px" }}
          placeholder="1 traveller"
        ></Select>
        <Form.Item
          label={
            <span style={{ fontSize: "12px", color: "#212b36" }}>Name</span>
          }
          required
        >
          <Input className="planning-input" placeholder="Enter your name"></Input>
        </Form.Item>
        <Form.Item
          label={
            <span style={{ fontSize: "12px", color: "#212b36" }}>Email</span>
          }
          required
        >
          <Input className="planning-input" placeholder="Enter your email"></Input>
        </Form.Item>
        <Form.Item
          label={
            <span style={{ fontSize: "12px", color: "#212b36" }}>
              Phone Number
            </span>
          }
          required
        >
          <Row>
            <Select  className="planning-input"></Select>
            <Input
            className="planning-input"
              style={{
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",
              }}
              placeholder="Enter your phone number"
            ></Input>
          </Row>
        </Form.Item>
        <Form.Item label="Message" required>
          <TextArea
            style={{
              width: "100%",
              background: "white",
              border: "1px solid #c4cdd5",
              fontSize: "16px",
              fontWeight: "400",
            }}
            showCount
            maxLength={1000}
            placeholder="Leave a message for our concierge team"
          />
        </Form.Item>
        <Divider style={{ marginTop: "30px" }}></Divider>
        <p>Tell us what we should include in our price</p>
        <p>
          You'll get an all-in bulk price for the services you indicate here.
          The bigger the group, the better the price.
        </p>
        <Row>
          <Col>
            <Checkbox className="planning-checkbox">Accomodation</Checkbox>
            <Checkbox className="planning-checkbox">Flight</Checkbox>
          </Col>
          <Col>
            <Checkbox className="planning-checkbox">Private driver and tour guide</Checkbox>
            <Checkbox className="planning-checkbox">Admission Ticket</Checkbox>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default PlanModalContent;
