import React from "react";
import "../Home.css";
import plan1 from "../../../Images/plan_1.jpg";
import plan2 from "../../../Images/plan_2.jpg";
import plan3 from "../../../Images/plan_3.jpg";
import plan4 from "../../../Images/plan_4.jpg";
import { Button, List, Typography } from "antd";
const { Title, Text } = Typography;
const data = [
  "Drag & Drop to organize the sequence of your trip",
  "See overall trip expenses by categories and manage your budget",
  "Find hidden gems directly from the map and book experiences on the Holiday CANVAS",
  "Invite your friends to collaborate on your trip with itinerary notes",
];
const data2 = [
    'Holicay route-sorter saves you time in transit by finding the best routes',
    'Visualize your plan by the hour and save hours creating your own itinerary formats',
    'Share travel notes, upload photos and get reminders on your trip',
  ];
  const data3 = [
    'Get customized private vacation prices in 48 hours',
    'Get group discounts for more travelers in every booking',
    'Access to in-destination human concierge via Chat or Call',
  ];
  const data4 = [
    'Discounted prices when you book with 2 or more people in your group',
    'Personal travel concierge in-destination 24/7',
    'Personal trip recommendations and suggestions on the go',
  ];
  const HomePlan = () => {
  return (
    <div style={{ width: "1190px" }}>
      <div className="grid">
        <img src={plan1} alt="" />
        <div className="plan">
          <Title className="plan-title" level={1}>
            Find the best way to organize and book your trip in minutes
          </Title>
          <Text className="plan-desc" strong>
            Find Places to Visit or Things to Do without opening 100 tabs
          </Text>
          <List
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
        <List.Item.Meta
          avatar={<span style={{
            width: '4px',
            height: '4px',
            backgroundColor: '#000',
            borderRadius: '50%',
            display: 'inline-block',
            alignItems:"center",
          }}></span>}
          title={<Typography.Text>{item}</Typography.Text>}
        />
      </List.Item>
            )}
            split={false}
            style={{ paddingLeft: "1em", marginTop:"20px",color:"#1f2937" }}
          />
          <Button size="large" className="start-planning-button"> Start Planning</Button>
        </div>
      </div>
      <div className="grid">
        <div className="plan">
          <Title className="plan-title" level={1}>
          Manage all your bookings on the calendar from hotels to experiences
          </Title>
          <Text className="plan-desc" strong>
          Holicay tells you what's the best way to travel based on your itinerary          </Text>
          <List
            dataSource={data2}
            renderItem={(item) => (
                <List.Item>
        <List.Item.Meta
          avatar={<span style={{
            width: '4px',
            height: '4px',
            backgroundColor: '#000',
            borderRadius: '50%',
            display: 'inline-block',
            alignItems:"center",
          }}></span>}
          title={<Typography.Text>{item}</Typography.Text>}
        />
      </List.Item>
            )}
            split={false}
            style={{ paddingLeft: "1em", marginTop:"20px",color:"#1f2937" }}
          />
          <Button size="large" className="start-planning-button"> Start Planning</Button>
        </div>
        <img src={plan2} alt="" />
      </div>
      <div className="grid">
        <img src={plan3} alt="" />
        <div className="plan">
          <Title className="plan-title" level={1}>
          Get an all-in price on Holicay for any trip you design
          </Title>
          <Text className="plan-desc" strong>
          No more price comparisons or booking on multiple platforms
          </Text>
          <List
            dataSource={data3}
            renderItem={(item) => (
                <List.Item>
        <List.Item.Meta
          avatar={<span style={{
            width: '4px',
            height: '4px',
            backgroundColor: '#000',
            borderRadius: '50%',
            display: 'inline-block',
            alignItems:"center",
          }}></span>}
          title={<Typography.Text>{item}</Typography.Text>}
        />
      </List.Item>
            )}
            split={false}
            style={{ paddingLeft: "1em", marginTop:"20px",color:"#1f2937" }}
          />
          <Button size="large" className="start-planning-button"> Start Planning</Button>
        </div>
      </div>
      <div className="grid">
        <div className="plan">
          <Title className="plan-title" level={1}>
          Get an all-in price on Holicay for any trip you design
          </Title>
          <Text className="plan-desc" strong>
          No more price comparisons or booking on multiple platforms
          </Text>
          <List
            dataSource={data4}
            renderItem={(item) => (
                <List.Item>
        <List.Item.Meta
          avatar={<span style={{
            width: '4px',
            height: '4px',
            backgroundColor: '#000',
            borderRadius: '50%',
            display: 'inline-block',
            alignItems:"center",
          }}></span>}
          title={<Typography.Text>{item}</Typography.Text>}
        />
      </List.Item>
            )}
            split={false}
            style={{ paddingLeft: "1em", marginTop:"20px",color:"#1f2937" }}
          />
          <Button size="large" className="start-planning-button"> Start Planning</Button>
        </div>
        <img src={plan2} alt="" />
      </div>
    </div>
  );
};

export default HomePlan;
