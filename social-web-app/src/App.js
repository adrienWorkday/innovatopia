import './App.css';

import Calendar from 'react-calendar';
import { Slider } from './Slider';
import React, { useState } from 'react';
import EmployeesInOffice from './EmployeesInOffice';

function App() {
  const [value, onChange] = useState(new Date());
  const offices = [{"officeName":"Dublin"}, {"officeName":"Prague"},{"officeName":"Munich"}]
  let isVisible = false;
  return (
    <div className="App">
      <div className="app-body">
      {Slider(offices)}
      <Calendar
        onChange={onChange}
        value={value}
        className='c1'
        /* 
          Clicking functionality for calendar, value returned as Date, can be separated into days, months, years etc:
            onClickDay={(value, event) => console.log('Clicked day: ', value)} isVisible = !isVisible
            value.getDate() 
            value.getMonth() // returns month-1 value, need to add on 1 again.
            value.getFullYear()
        */ 
        />
        
        </div>
    </div>
  );
}

export default App;
