import { CarOutlined, CoffeeOutlined, CompassOutlined, EnvironmentOutlined, HeartOutlined, HomeOutlined } from '@ant-design/icons';
import { Row, Typography } from 'antd';
import React from 'react';
const { Text } = Typography;

const CalendarPopoverContent = () => {
    return (
        <div style={{ width: 300 }}>
        <Text strong>Add to trip</Text>
        <div style={{ marginTop: 16 }}>
          <Row align="middle" style={{ marginBottom: 10 }}>
            <HeartOutlined style={{ color: "#9B51E0", marginRight: 8 }} />
            <Text strong>Experiences</Text>
            <Text style={{ marginLeft: "auto", color: "#888" }}>Tours, Cruises, Workshops...</Text>
          </Row>
          <Row align="middle" style={{ marginBottom: 10 }}>
            <HomeOutlined style={{ color: "#4285F4", marginRight: 8 }} />
            <Text strong>Accommodation</Text>
            <Text style={{ marginLeft: "auto", color: "#888" }}>Hotels, Villas, Homestays...</Text>
          </Row>
          <Row align="middle" style={{ marginBottom: 10 }}>
            <EnvironmentOutlined style={{ color: "#34A853", marginRight: 8 }} />
            <Text strong>Places</Text>
            <Text style={{ marginLeft: "auto", color: "#888" }}>Streets, Landmarks, Shops...</Text>
          </Row>
          <Row align="middle" style={{ marginBottom: 10 }}>
            <CarOutlined style={{ color: "#EA4335", marginRight: 8 }} />
            <Text strong>Transportation</Text>
            <Text style={{ marginLeft: "auto", color: "#888" }}>Trains, Flights, Buses...</Text>
          </Row>
          <Row align="middle" style={{ marginBottom: 10 }}>
            <CoffeeOutlined style={{ color: "#FBBC05", marginRight: 8 }} />
            <Text strong>Food & Beverage</Text>
            <Text style={{ marginLeft: "auto", color: "#888" }}>Restaurants, Cafes, Bars...</Text>
          </Row>
          <Row align="middle">
            <CompassOutlined style={{ color: "#0E66C9", marginRight: 8 }} />
            <Text strong>Featured Itineraries</Text>
            <Text style={{ marginLeft: "auto", color: "#888" }}>See suggestions from others</Text>
          </Row>
        </div>
      </div>
    );
};

export default CalendarPopoverContent;