import React from "react";
import "../PlanningPage.css";
import { Button, Card, Col, Input, Row, Tag } from "antd";
import { FileAddOutlined, SettingOutlined } from "@ant-design/icons";
const KanbanCard = () => {
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
    <Col span={5} className="kanban-col">
      <Card
        className="kanban-card"
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
      
    </div>
        <Button className="add-sth-btn">+ Add Something</Button>
      </Card>
    </Col>
  );
};

export default KanbanCard;
