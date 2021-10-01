import './App.css';
import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar';
import { Slider } from './Slider';
import React, { useState } from 'react';

function App() {
  const [value, onChange] = useState(new Date());
  const offices = [{"officeName":"Dublin"}, {"officeName":"Prague"},{"officeName":"Munich"}]
  return (
    <div className="App">
      {Slider(offices)}
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
