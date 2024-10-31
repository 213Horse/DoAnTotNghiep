import React, { useState } from 'react';
import "./PlanningPage.css"
import PlanBook from './components/PlanBook';
import PlanKanban from './components/PlanKanban';
import PlanCalendar from './components/PlanCalendar';
const PlanningPage = () => {
  const [toggle, setToggle] = useState(false);
    console.log(toggle)
    return (
        <div className='planpage' >
            <PlanBook setIsToggled={setToggle } isToggled={toggle}></PlanBook>
            {toggle ? <PlanCalendar></PlanCalendar> : <PlanKanban></PlanKanban>}
            
        </div>
    );
};

export default PlanningPage;