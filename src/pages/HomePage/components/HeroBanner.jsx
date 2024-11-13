import { CloseCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Input,
  Row,
  Typography,
} from "antd";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "../Home.css";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";
const { Text, Title } = Typography;
const { RangePicker } = DatePicker;

const HeroBanner = () => {
  const navigate = useNavigate();
  const [searchFields, setSearchFields] = useState([{ id: 1, value: "" }]);
  const isMobile = useMediaQuery({
    query: "(min-width: 360px) and (max-width: 770px)",
  });
  const addSearchField = () => {
    setSearchFields([
      ...searchFields,
      { id: searchFields.length + 1, value: "" },
    ]);
  };
  const removeSearchField = (id) => {
    const updatedFields = searchFields.filter((field) => field.id !== id);
    setSearchFields(updatedFields);
  };
  const handleInputChange = (index, e) => {
    const updatedFields = [...searchFields];
    updatedFields[index].value = e.target.value;
    setSearchFields(updatedFields);
  };
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <div className="hero-intro hero-section">
          <div className="intro-para">
            <Title style={{ fontSize: "56px", color: "white" }}>
              Plan & book your next vacations <br />
              <TypeAnimation
                sequence={[
                  "with AI",
                  1000,
                  "with 1 all-in price",
                  1000,
                  "with discounts",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ color: "#FF846E" }}
              />
            </Title>
            <Text strong style={{ color: "white", fontSize: "16px" }}>
              Say goodbye to individual bookings on websites, get an all-in
              price for your private vacations today
            </Text>
            <Row style={{ color: "white", marginTop: "30px" }} gutter={[40, 0]}>
              <Col>
                <div>
                  <h1 style={{ fontSize: "32px", marginBottom: "5px" }}>
                    100+
                  </h1>
                  <p style={{ fontSize: "12px" }}>Trips Planned</p>
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    textAlign: "center",
                    borderInline: "2px solid white",
                    paddingInline: "20px",
                  }}
                >
                  <h1 style={{ fontSize: "32px", marginBottom: "5px" }}>80+</h1>
                  <p style={{ fontSize: "12px" }}>Booked Trips</p>
                </div>
              </Col>
              <Col>
                <div>
                  <h1 style={{ fontSize: "32px", marginBottom: "5px" }}>20+</h1>
                  <p style={{ fontSize: "12px" }}>Hours saved per trip</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="hero-planner hero-section">
          {isMobile ? (
            <Button></Button>
          ) : (
            <Card style={{ width: "420px" }}>
              <Title level={3}>Trip Planner</Title>
              <Text type="secondary" style={{ fontSize: "12px" }}>
                Enter destination (country, region, or city)
              </Text>
              <div>
                {searchFields.map((field, index) => (
                  <div
                    key={field.id}
                    style={{
                      marginBottom: "10px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Input
                      placeholder="Where to?"
                      value={field.value}
                      onChange={(e) => handleInputChange(index, e)}
                      style={{ width: "100%", height: "50px" }}
                    />
                    {searchFields.length > 1 && (
                      <CloseCircleOutlined
                        style={{
                          fontSize: "20px",
                          color: "gray",
                          marginLeft: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() => removeSearchField(field.id)}
                      />
                    )}
                  </div>
                ))}

                <Button
                  type="link"
                  icon={<PlusCircleOutlined />}
                  onClick={addSearchField}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "black",
                    fontSize: "16px",
                  }}
                >
                  Add Destination
                </Button>
                <div className="date-select">
                  <Text type="secondary" style={{ fontSize: "12px" }}>
                    Dates
                  </Text>{" "}
                  <br />
                  <RangePicker
                    style={{ width: "100%", height: "50px" }}
                  ></RangePicker>
                </div>

                <Row style={{ marginTop: "24px", gap: "10px" }}>
                  {/* <Checkbox></Checkbox>
                  <Text style={{ fontSize: "16px" }}>
                    Let AI create a first draft for you
                  </Text> */}
                </Row>
                <Button
                  onClick={() => {
                    navigate("/planning");
                  }}
                  size="large"
                  className="startplan-button"
                >
                  Start Planning
                </Button>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#6b7280",
                    marginTop: "20px",
                  }}
                >
                  {" "}
                  <span>
                    <a
                      href="www.youtube.com"
                      style={{
                        color: "black",
                        borderBottom: "1px solid black",
                      }}
                    >
                      Find traveller plan
                    </a>{" "}
                    &nbsp;Instead{" "}
                  </span>
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
