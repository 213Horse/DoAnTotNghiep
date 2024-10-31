import { Button, Card, Checkbox, Col, DatePicker, Input, Row, Select, Space, Typography } from "antd";
import React, { useState } from "react";
import "./Home.css";
import { TypeAnimation } from "react-type-animation";
import { CloseCircleOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, PinterestOutlined, PlusCircleOutlined, TikTokOutlined, WhatsAppOutlined, YoutubeOutlined } from "@ant-design/icons";
import HeroBanner from "./components/HeroBanner";
import HomePlan from "./components/HomePlan";
import HomeCopilot from "./components/HomeCopilot";
import HomeFooter from "./components/HomeFooter";

const { Text, Title } = Typography;

const Home = () => {

  return (
    <div>
      <Row className="promo-row">
        What’s new: AI Planning Copilot Coming Soon!&nbsp;
        <a href="youtube.com"> Sign up to get early access!</a>
      </Row>
      <HeroBanner></HeroBanner>
      <Row className="itineraries-title" style={{width:"100%"}}>
        <Title style={{marginTop:"100px", fontSize:"48px"}}  level={1}>Itineraries and trip <br />
       bookings all in  <span style={{color:"#F25142"}}>one place on Holicay </span></Title>
      </Row>
      <Row style={{width:"100%", justifyContent:"center", alignItems:"center"}}>
        <HomePlan></HomePlan>
      </Row>
      <Row style={{width:"100%", justifyContent:"center", alignItems:"center"}}>
        <HomeCopilot></HomeCopilot>
      </Row>
      <HomeFooter></HomeFooter>
    </div>
  );
};

export default Home;
