import './App.css';
import Calendar from 'react-calendar';
import { Slider } from './Slider';
import React, { useState, useEffect } from 'react';
import EmployeesInOffice from './EmployeesInOffice';
var day = 0;
var month = 0;
var year = 0;
function App() {
  const [currentOffice, setOffice, value, onChange] = useState({currentOffice: "6156e62fec8a132fbe87b286",value: new Date()});
  useEffect(() => {
    fetch(function(){
      return('http://localhost:3000/users/date/'+{value}+'/officeID/'+{currentOffice})()})
    .then(res => res.json())
    .then(res => console.log(res))
  },[currentOffice, value]);
  const [visibility, setVisibility] = useState(false);
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch("http://localhost:3000/offices")
    .then(res => res.json())
    .then(res => setData(res))
  },[]);
  var container = document.getElementsByClassName('Calendar')[0];
    document.addEventListener('click', function( event ) {
      if(container === undefined) {return}
      if (container !== event.target && !container.contains(event.target)) {    
        // console.log('clicking outside the div');
        setVisibility(false)
      }
  });
  return (
    <div className="App">
      <div className="logo">
        <img src="workdayLogo.png" height={120} width={300} />
      </div>
      {Slider(data, setOffice.bind(this))}
      <div className="Calendar">
        <Calendar
          onChange={onChange}
          value={value}
          onClickDay={(value, event) => { 
              day = value.getDate()
              month = value.getMonth() + 1 // returns month-1 value, need to add on 1 again.
              year = value.getFullYear()
              setVisibility(true)
              console.log(currentOffice)
              console.log(year,month,day)
        }}
          /* 
            Clicking functionality for calendar, value returned as Date, can be separated into days, months, years etc:
              onClickDay={(value, event) => console.log('Clicked day: ', value)}
              value.getDate() 
              value.getMonth() // returns month-1 value, need to add on 1 again.
              value.getFullYear()
          */ 
          />
      </div>
      {visibility && <EmployeesInOffice day={day} month={month} year={year}/>}
    </div>
  );
}

export default App;
