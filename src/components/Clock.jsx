import React, { useEffect, useState }from 'react'
import './clock.css';

const Clock = () => {

  const initialTime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    miliseconds: 0,
  }
  
  const [time, setTime] = useState(initialTime)
 
  const timeFormat = (time) => {
    if (time.toString().length === 1) {
      time = "0" + time;
    }
    return time;
  }

  const runClock = () => {
    let newTimer = Object.assign({}, time);
    setInterval(() => {

      let date = new Date();
  
      newTimer.hours = date.getHours();
      newTimer.minutes = date.getMinutes();
      newTimer.seconds = date.getSeconds();
  
      setTime({...time, ...newTimer});
    }, 1000);  
  }
 
  useEffect(() => {
    runClock();
  }, [])
      
  return (
    <React.Fragment>
  
      <div className='clock-ui'>
        <span>{timeFormat(time.hours)}<sub>h</sub></span>
        <span>{timeFormat(time.minutes)}<sub>m</sub></span>
        <span>{timeFormat(time.seconds)}<sub>s</sub></span>
      </div>

    </React.Fragment>
  )
}

export default Clock