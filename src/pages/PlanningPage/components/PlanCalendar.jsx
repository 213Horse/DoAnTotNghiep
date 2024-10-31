import React, { useState } from "react";
import "../PlanningPage.css";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import dayjs from "dayjs";
import { Col, Input, Row, Tag, Popover, Typography } from "antd";
import {
  HeartOutlined,
  HomeOutlined,
  EnvironmentOutlined,
  CarOutlined,
  CoffeeOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import CalendarPopoverContent from "./CalendarPopoverContent";

const { Text } = Typography;

const localizer = dayjsLocalizer(dayjs);
const DragAndDropCalendar = withDragAndDrop(Calendar);
const events = [
  {
    title: "Meeting",
    start: new Date(2024, 9, 23, 10, 0),
    end: new Date(2024, 9, 23, 11, 0),
  },
  {
    title: "Lunch Break",
    start: new Date(2024, 9, 23, 13, 0),
    end: new Date(2024, 9, 23, 14, 0),
  },
];

const CustomHeader = ({ label, date }) => {
  const formattedDate = dayjs(date).format("DD MMM YYYY, ddd");
  return (
    <div>
      <Row style={{ display: "flex", justifyContent: "space-between", gap: "50px" }}>
        <Tag className="day-tag" color="rgba(28, 43, 75, 0.15)">
          <span style={{ fontWeight: "800" }}>Day 1</span> - {formattedDate}
        </Tag>
      </Row>
      <Row style={{ justifyContent: "space-between" }}>
        <Col span={21}>
          <Input className="input-title-cal" placeholder="Enter day title" />
        </Col>
      </Row>
    </div>
  );
};

const PlanCalendar = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSelectSlot = (slotInfo) => {
    setSelectedSlot(slotInfo);
    setPopoverVisible(true);
  };

  const closePopover = () => {
    setPopoverVisible(false);
    setSelectedSlot(null)
  };

  const popoverContent = (
    <CalendarPopoverContent />
  );

  return (
    <div className="calendar-container">
      <DragAndDropCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        view="week"
        toolbar={false}
        style={{ height: 700 }}
        selectable
        onSelectSlot={handleSelectSlot}
        components={{
          header: CustomHeader,
        }}
      />

{selectedSlot && selectedSlot.bounds && (
        <Popover
          content={popoverContent}
          visible={popoverVisible}
          onVisibleChange={setPopoverVisible}
          trigger="click"
          overlayStyle={{
            position: "absolute",
            top: selectedSlot.bounds.top,
            left: selectedSlot.bounds.left,
          }}
        >
          <div
            onClick={closePopover}
            style={{
              position: "absolute",
              top: selectedSlot.bounds.top,
              left: selectedSlot.bounds.left,
              width: 0,
              height: 0,
            }}
          />
        </Popover>
      )}
    </div>
  );
};

export default PlanCalendar;
