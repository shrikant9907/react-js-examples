import React, { useEffect, useState }from 'react'
import './stopwatch.css';

const StopWatch = () => {

  const initialTime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    miliseconds: 0,
  }
  
  const [timer, setTimer] = useState(initialTime)
  const [timerRunning, setTimerRunning] = useState(false)
  const [resetTimer, setResetTimer] = useState(false)

  const timeFormat = (time) => {

    if (!time) {
      return '00';
    }
    
    if (time.toString().length === 1) {
      time = "0" + time;
    }
    return time;
  }

  const handleStartTimer = (e) => {
    setTimerRunning(!timerRunning); // Start / Stop 
    setResetTimer(false);
  }

  const handleResetTimer = (e) => {
    setResetTimer(true); // Reset
  }

  useEffect(() => {
    let newTimer = Object.assign({}, timer);
    let timeInterval = null;
    
    if (timerRunning) {
     
      timeInterval = setInterval(() => {
  
        let hours = newTimer.hours;
        let minutes = newTimer.minutes;
        let seconds = newTimer.seconds;
        let miliseconds = newTimer.miliseconds + 1;
      
        if (miliseconds >= 100) {
          miliseconds = 0;
          seconds = seconds + 1;
        }
    
        if (seconds >= 60) {
          seconds = 0;
          minutes = minutes + 1;
        }
    
        if (minutes >= 60) {
          minutes = 0;
          hours = hours + 1;
        }
    
        if (hours >= 60) {
          hours = 0;
        }
    
        newTimer.hours = hours;
        newTimer.minutes = minutes;
        newTimer.seconds = seconds;
        newTimer.miliseconds = miliseconds;
    
        setTimer((preTimer) => {
          return {...preTimer, ...newTimer}
        });
      }, 10);    

    } else {
      clearInterval(timeInterval);
    }

    if (resetTimer) {
      console.log('clicked')
      clearInterval(timeInterval);
      setTimer(initialTime); // Reset
    }
    
    return () => {
      clearInterval(timeInterval);
    }
  }, [timerRunning, resetTimer])

  return (
    <React.Fragment>
  
      <div className='stopwatch-ui'>
        <div className='timer'>
          { (timer.hours > 0) && <span>{timeFormat(timer.hours)}<sub>h</sub></span> }
          { (timer.minutes > 0) && <span>{timeFormat(timer.minutes)}<sub>m</sub></span> }
          <span>{timeFormat(timer.seconds)}<sub>s</sub></span>
          <span>{timeFormat(timer.miliseconds.toString().slice(0,2))}<sub>ms</sub></span>
        </div>

        <div className='actions'>
          <button onClick={(e) => handleStartTimer(e)} className='startstop-btn'>
            Start/Stop
          </button>
          <button onClick={(e) => handleResetTimer(e)} className='reset-btn'>
            Reset
          </button>
        </div>
      </div>

    </React.Fragment>
  )
}

export default StopWatch