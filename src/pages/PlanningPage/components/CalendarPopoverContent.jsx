import React, { useState } from "react";
import {
  CarOutlined,
  CoffeeOutlined,
  CompassOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  HomeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Drawer, Rate, Row, Select, Typography } from "antd";
import Pic1 from '../../../Images/3627bbd4ddb75c42e6c4a051c20a9dee31f1ea11.jpeg';
import Pic2 from '../../../Images/4687fdc62412de5d7e3b9df04cfdc7e75d5bd205.jpeg';
import Pic3 from '../../../Images/5df0d064e0a6e595cbabc20ed70615539d0a5061.jpeg';
import Pic4 from '../../../Images/6469bdb552eff4ad51943c6c10396d6cee97342f.jpeg';
import Pic5 from '../../../Images/ec287bd6bd12f315d1122c0f6114b58ba650097c.jpeg';


const { Text } = Typography;

const { Title } = Typography;
const accommodations = [
  {
    id: 1,
    title: "Can't find what you need?",
    subtitle: "Add custom accommodation",
    // imageUrl: customPic,
  },
  {
    id: 2,
    title: "One King West Hotel & Residence",
    stars: 4,
    pricePerNight: 292,
    total: 1751,
    imageUrl: Pic1,
  },
  {
    id: 3,
    title: "Executive Hotel Cosmopolitan",
    stars: 4,
    pricePerNight: 214,
    total: 1280,
    imageUrl: Pic2,
  },
  {
    id: 4,
    title: "Fairmont Royal York Hotel",
    stars: 4,
    pricePerNight: 210,
    total: 1256,
    imageUrl: Pic3,
  },
  {
    id: 5,
    title: "Town Inn Suites Hotel",
    stars: 3,
    pricePerNight: 131,
    total: 786,
    imageUrl: Pic4,
  },
  {
    id: 6,
    title: "GLOBALSTAY. Gorgeous Apartments in the Heart of Toronto...",
    stars: 5,
    pricePerNight: 161,
    total: 965,
    imageUrl: Pic5,
  },
];



const CalendarPopoverContent = ({ onAddAccommodation }) => {
  const handleAdd = (accommodation) => {
    onAddAccommodation(accommodation);
  };
  const HoverableRow = ({ icon, title, description, color }) => {
    const [hover, setHover] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const style = {
      marginBottom: 10,
      backgroundColor: hover ? "#f0f0f0" : "transparent",
      cursor: "pointer",
      color: hover ? "#333" : "#888",
    };
    const AccommodationCard = ({
      id,
      title,
      stars,
      pricePerNight,
      total,
      imageUrl,
      onAdd,
    }) => {
      return (
        <Card
          hoverable
          style={{
            width: 270,
            height: 300,
            position: "relative",
            marginBottom: 20,
          }}
          cover={
            <div style={{ position: "relative" }}>
              <img
                alt={title}
                src={imageUrl}
                style={{ width: "100%", height: "60%" }}
              />
              <Button
              key={id}
                style={{
                  position: "absolute",
                  right: 10,
                  top: 10,
                  borderRadius: "50%",
                  padding: "6px",
                  backgroundColor: "white",
                  border: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
                icon={<PlusOutlined />}
                onClick={onAdd}
              />
            </div>
          }
        >
          <Card.Meta
            title={
              <div>
                <strong>{title}</strong> - {stars} stars
              </div>
            }
            description={
              <>
                <Rate allowHalf disabled defaultValue={stars} />
                <div
                  style={{
                    color: "#595959",
                    fontSize: "12px",
                    marginTop: "5px",
                  }}
                >
                  4-star hotel
                </div>
                <div
                  style={{
                    color: "#595959",
                    fontSize: "12px",
                    marginTop: "5px",
                  }}
                >
                  Starting USD {pricePerNight} / night - Total USD {total}
                </div>
              </>
            }
          />
        </Card>
      );
    };

    return (
      <Row
        align="middle"
        style={style}
        onClick={() => {
          setOpenDrawer(true);
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {React.createElement(icon, { style: { color, marginRight: 8 } })}
        <Text strong>{title}</Text>
        <Text style={{ marginLeft: "auto", color: style.color }}>
          {description}
        </Text>
        <Drawer
          title="Add Accomodation"
          closeIcon={false}
          width={900}
          headerStyle={{ borderBottom: "0px" }}
          placement={"right"}
          onClose={() => {
            setOpenDrawer(false);
          }}
          open={openDrawer}
          key={"right"}
        >
          <Row>
            <Col>
              <Select
                style={{ width: 300, height: "70px" }}
                placeholder="Where to?"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Select.Option value="toronto">
                  Toronto, Ontario, Canada
                </Select.Option>
                <Select.Option value="vancouver">
                  Vancouver, British Columbia, Canada
                </Select.Option>
                <Select.Option value="montreal">
                  Montreal, Quebec, Canada
                </Select.Option>
              </Select>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            {accommodations.map((accommodation) => (
              <AccommodationCard
                key={accommodation.id}
                title={accommodation.title}
                subtitle={accommodation.subtitle}
                stars={accommodation.stars}
                pricePerNight={accommodation.pricePerNight}
                total={accommodation.total}
                imageUrl={accommodation.imageUrl}
                onAdd={() => handleAdd(accommodation)}
              />
            ))}
          </div>
        </Drawer>
      </Row>
    )  };
  return (
    <div style={{ width: 300 }}>
      <Text strong>Add to trip</Text>
      <div style={{ marginTop: 16 }}>
        <HoverableRow
          icon={HeartOutlined}
          title="Experiences"
          description="Tours, Cruises, Workshops..."
          color="#9B51E0"
        />
        <HoverableRow
          icon={HomeOutlined}
          title="Accommodation"
          description="Hotels, Villas, Homestays..."
          color="#4285F4"
        />
        <HoverableRow
          icon={EnvironmentOutlined}
          title="Places"
          description="Streets, Landmarks, Shops..."
          color="#34A853"
        />
        <HoverableRow
          icon={CarOutlined}
          title="Transportation"
          description="Trains, Flights, Buses..."
          color="#EA4335"
        />
        <HoverableRow
          icon={CoffeeOutlined}
          title="Food & Beverage"
          description="Restaurants, Cafes, Bars..."
          color="#FBBC05"
        />
        <HoverableRow
          icon={CompassOutlined}
          title="Featured Itineraries"
          description="See suggestions from others"
          color="#0E66C9"
        />
      </div>
    </div>
  );
};

export default CalendarPopoverContent;
