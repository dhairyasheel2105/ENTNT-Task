import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarView = () => {
  const events = [
    { title: 'Meeting with Company A', date: '2025-01-10' },
    { title: 'Follow-up with Company B', date: '2025-01-12' },
  ];

  return (
    <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />
  );
};

export default CalendarView;
