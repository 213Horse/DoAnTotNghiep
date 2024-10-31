import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, InputNumber, Typography } from 'antd';
import React from 'react';
const { Text } = Typography;

const TravellerPopover = ({decrementTraveller, travellers, setTravellers, incrementTraveller, setVisible}) => {
    return (
        <div style={{ width: 250 }}>
        <Text>You can set up to 30 travellers in total.</Text>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 16 }}>
          <Text style={{ marginRight: 10, color:"#133a4a", fontSize:"22px" }}>Travellers</Text>
          <Button
            icon={<MinusOutlined />}
            onClick={decrementTraveller}
            size="small"
            disabled={travellers <= 1}
          />
          <InputNumber
            min={1}
            max={30}
            value={travellers}
            onChange={setTravellers}
            style={{ margin: '0 8px', width: 50, textAlign: 'center' }}
          />
          <Button
            icon={<PlusOutlined />}
            onClick={incrementTraveller}
            size="small"
            disabled={travellers >= 30}
          />
        </div>
        <Button
        size='large'
          type="primary"    
          style={{ marginTop: 16, width: '100%', background:"#133a4a" }}
          onClick={() => setVisible(false)}
        >
          Apply
        </Button>
      </div>
    );
};

export default TravellerPopover;