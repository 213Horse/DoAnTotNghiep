import React, { useState } from "react";
import "../PlanningPage.css";
import { Button, Card, Col, Drawer, Input, Popover, Rate, Row, Tag } from "antd";
import { FileAddOutlined, SettingOutlined } from "@ant-design/icons";
import CalendarPopoverContent from "./CalendarPopoverContent";
const KanbanCard = () => {
  
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [accommodations, setAccommodations] = useState([]);

  const addAccommodation = (accommodation) => {
    setAccommodations(prevAccommodations => [...prevAccommodations, accommodation]);
  };
  const removeAccommodation = (indexToRemove) => {
    setAccommodations(prevAccommodations => 
      prevAccommodations.filter((_, index) => index !== indexToRemove)
    );
  };
  const renderCardTitle = () => {
    return (
      <div>
        <Row style={{ justifyContent: "space-between" }}>
          <Tag className="day-tag" color="rgba(28, 43, 75, 0.15)" ><span style={{fontWeight:"800"}}>Day 1</span> - 18 Nov 2024, Mon</Tag>
          <Row>
            <Button className="optimize-btn" type="text">Optimize</Button>
            <FileAddOutlined></FileAddOutlined>
          </Row>
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <Col span={21}>
            <Input className="input-title" placeholder="Enter day title"></Input>
          </Col>
          <SettingOutlined style={{ fontSize: "24px" }}></SettingOutlined>
        </Row>
      </div>
    );
  };
  return (
    <Col style={{width:"320px"}}>
      <Card
        className="kanban-card w-[320px]"
        styles={{
          header: {
            padding: "4px 8px 5px",
            height:"75px"
          },
          body: {
            height: "70vh",
            background: "#F9FAFB",
            padding:"4px",
            display: "flex",          
            flexDirection: "column",
            justifyContent: "space-between",
            },
        }}
        title={renderCardTitle()}
      >
        <div className="card-content" style={{ flexGrow: 1 }}>
         {accommodations.map((item, index) => (
          <div 
    key={index} 
    style={{ 
      position: 'relative', 
      display: 'flex', 
      alignItems: 'center', 
      background: '#fff', 
      padding: '10px', 
      margin: '10px 0', 
      borderRadius: '8px', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
      overflow: 'hidden', 
      height:"88px"
    }}
    className="accommodation-card"
  >
    <img
      src={item.imageUrl}
      alt="Hotel"
      style={{ width: 88, height: 88, marginRight: 10 }}
    />
    <div style={{ flex: 1, height:88 }}>
      <p className="text-xs text-[#0b6bfb] mt-2">Accomodation</p>
      <div style={{ fontWeight: 'bold', fontSize: '12px', }}>{item.title}</div>
      <Rate disabled defaultValue={item.stars} style={{ fontSize: '10px' }} />
      <div style={{ fontSize: '12px', color: '#595959', marginTop: '4px' }}>
        Check-in at 15:00 - US${item.pricePerNight}
      </div>
    </div>
    <button
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        padding: '8px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        color: 'grey',
      }}
      
      onClick={() => removeAccommodation(index)}
    >
      X
    </button>
  </div>
          ))}
        </div>
        <Button className="add-sth-btn" onClick={()=>{setPopoverVisible(true)}}>+ Add Something</Button>
      </Card>
      <Popover
          content={<CalendarPopoverContent  onAddAccommodation={addAccommodation}/>}
          visible={popoverVisible}
          onVisibleChange={setPopoverVisible}
          arrow={false}
          placement="topRight"
          overlayStyle={{
            position:"absolute",
            bottom:"100px",
          }}
          trigger="click"></Popover>
      
    </Col>
  );
};

export default KanbanCard;
