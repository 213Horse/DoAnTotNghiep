import React from 'react';
import "../Home.css"
import { Button, Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const {Text,Title} = Typography
const HomeCopilot = () => {
    return (
        <div className='home-copilot'>
            <div className="copilot-content">
                    <div className="upcoming-feature">
                            Upcoming Feature
                    </div>
                    <div style={{display:"flex", marginTop:"16px"}}>
                    <img src="https://www.holicay.com/images/v4/homepage/logo_copilot.svg" alt="" /> &nbsp; &nbsp;
                    <div className='planner-copilot'>
                        Planner Copilot
                    </div>
                    </div>
                    <div className='generate'>Generate an itinerary in a flash</div>
                    <div className='personal-ai'>Your personal assistant for planning your dream vacation from scratch</div>
                    <Button className='home-join-btn'>
                        Join our waiting list <RightOutlined style={{fontSize:"10px"}}></RightOutlined>
                    </Button>
            </div>
        </div>
    );
};

export default HomeCopilot;