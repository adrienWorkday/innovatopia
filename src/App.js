import './App.css';
import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar';
import React, { useState } from 'react';

function App() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="App">
      <Calendar
        onChange={onChange}
        value={value}
        /* 
          Clicking functionality for calendar, value returned as Date, can be separated into days, months, years etc:
            onClickDay={(value, event) => console.log('Clicked day: ', value)}
            value.getDate() 
            value.getMonth() // returns month-1 value, need to add on 1 again.
            value.getFullYear()
        */ 
        />
    </div>
  );
}

export default App;
