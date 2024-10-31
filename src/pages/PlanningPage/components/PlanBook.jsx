import React, { useState } from "react";
import "../PlanningPage.css";
import { Button, Col, Divider, Drawer, Modal, Popover, Row } from "antd";
import { AppstoreOutlined, CalendarOutlined } from "@ant-design/icons";
import PlanModalContent from "./PlanModalContent";
import DrawerContent from "./DrawerContent";
import TravellerPopover from "./TravellerPopover";

const PlanBook = ({setIsToggled, isToggled}) => {
  const [openModal, setOpenModal] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false);
  const [travellers, setTravellers] = useState(1);
  const [visible, setVisible] = useState(false);
  const incrementTraveller = () => {
    if (travellers < 30) setTravellers(travellers + 1);
  };
  const decrementTraveller = () => {
    if (travellers > 1) setTravellers(travellers - 1);
  };
  const content = (
    <TravellerPopover decrementTraveller={decrementTraveller} incrementTraveller={incrementTraveller} setTravellers={setTravellers} setVisible={setVisible} travellers={travellers}  />
  )
  const renderModalFooter = () =>{
    return <div style={{padding:"0px !important"}}>
          <Divider>

          </Divider>
          <Row style={{justifyContent:"space-between"}}>
          <Button  className="cancel-footer-btn" type="link">Cancel</Button>
          <Button onClick={()=>{setOpenModal(false)}} className="send-inquiry-btn">Send Inquiry</Button>
          </Row>
      </div>
    
  }
  return (
    <Row className="plan-container">
      <Col span={15}>
        <Row style={{ fontSize: "1.5rem", height:"30px"}}>7 days to Viet Tri</Row>
        <Row style={{ alignItems:"center", gap:"10px"}}>
          <a className="plan-edit" href="youtube.com">Edit Destination/ Dates</a>
          <Button className="expense-btn" onClick={()=>{setOpenDrawer(true)}}>Expenses: $0</Button>
          <Popover
          content={content}
          title=""
          trigger="click"
          visible={visible}
          onVisibleChange={(visible) => setVisible(visible)}
        >
          <Button onClick={() => setVisible(true)} className="traveller-btn">{`${travellers} traveller${travellers > 1 ? 's' : ''}`}</Button>
        </Popover>
          
        </Row>
      </Col>
      <Col span={5}>
        <Row style={{justifyContent:"flex-end"}}>
          <Button.Group
            style={{ paddingRight: "10px", borderRight: "1px solid #ddd" }}
          >
            <Button
              icon={<AppstoreOutlined style={{fontSize:"24px"}}/>}
              onClick={() => setIsToggled(false)}
              style={{ width: 36, height: 36, padding: 0, background:`${isToggled ? "#F3F5F7" : "white"}`,color:`${isToggled ? "#ddd" : "#f25142"}`}}
            />
            <Button
              icon={<CalendarOutlined style={{fontSize:"24px"}}/>}
              onClick={() => setIsToggled(true)}
              style={{ width: 36, height: 36, padding: 0, background:`${isToggled ? "white" : "#F3F5F7"}`, color:`${isToggled ? "#f25142": "#ddd"}`}}
            />
          </Button.Group>
          <Row style={{marginLeft:"10px", gap:"10px"}}>
          <Button onClick={()=>{setOpenModal(true)}} className="book-btn">Book <span className="book-btn-number">0</span></Button>
          <Button className="save-plan-btn">Save Plan</Button>
          </Row>
        </Row>
      </Col>
      <Modal width="570px" open={openModal} footer={renderModalFooter()} onCancel={()=>{setOpenModal(false)}}>
          <PlanModalContent></PlanModalContent>
      </Modal>
      <Drawer
        width={500}
        headerStyle={{borderBottom:"0px"}}
        placement={"right"}
        onClose={()=>{setOpenDrawer(false)}}
        open={openDrawer}
        key={"right"}
      >
        <DrawerContent></DrawerContent>
      </Drawer>

    </Row>
  );
};

export default PlanBook;
