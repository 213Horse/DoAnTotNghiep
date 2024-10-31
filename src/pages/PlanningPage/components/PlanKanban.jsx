import React from 'react';
import "../PlanningPage.css"
import KanbanCard from './KanbanCard';
const PlanKanban = () => {
    return (
        <div className='kanban-container'>
            <KanbanCard></KanbanCard>
            <KanbanCard></KanbanCard>
            <KanbanCard></KanbanCard>
            <KanbanCard></KanbanCard>
            <KanbanCard></KanbanCard>
            <KanbanCard></KanbanCard>
            <KanbanCard></KanbanCard>
        </div>
    );
};

export default PlanKanban;