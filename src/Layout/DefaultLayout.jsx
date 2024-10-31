import { DollarOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, PinterestOutlined, ProfileOutlined, TikTokOutlined, UserOutlined, WhatsAppOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Input, Layout, Menu, Row, Select, Typography } from 'antd';
import Search from 'antd/es/transfer/search';
import React from 'react';
import "./DefaultLayout.css"
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Images/logo.svg';

const { Content } = Layout;
const { Item } = Menu;
const {Text, Title} = Typography

const DefaultLayout = ({children}) => {
    const navigate =useNavigate()
    return (
        <Layout>
        <header className="header">
            <Row className="header-content">
                <Row className="left-header">
                <img onClick={()=>{navigate("/")}} src={Logo} alt="" />
                    <Menu mode='horizontal'>
                    <Menu.Item>Travel Intineraries</Menu.Item>
                    <Menu.Item>Find a planner</Menu.Item>
                </Menu>
                </Row>
               
                <Row className="right-header">
                    <Search placeholder='Search Destination'></Search>
                    <Button className='plan-button'>Plan a trip</Button>
                    <div className='avatar-container'>
                    <Avatar className='login-avatar'  icon={<UserOutlined style={{color:"black", border:"2px solid black", borderRadius:"50%"}}/>}></Avatar>
                    </div>
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
        
        <div className='fixed-logo'>
          <WhatsAppOutlined></WhatsAppOutlined>
        </div>
        </Layout>
    );
};

export default DefaultLayout;