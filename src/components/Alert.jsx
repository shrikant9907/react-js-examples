import React, { useState } from 'react'
 

export default function Alert(props) {

  const alertType = props.type ? props.type : 'danger';
  const alertMessage = props.message ? props.message : 'This is a default alert message';
  const hideAlertTime = props.hideDuration ? props.hideDuration : 1000 * 60 * 60;

  const [hideAlert, setHideAlert] = useState(false);

  let alertStyle = {
    backgroundColor: "#ffffff",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #efefef",
    fontSize: "14px"
  };

  if (alertType === 'success') {
    alertStyle = {...alertStyle, ...{color: "#2d884d", borderColor: "#2d884d" }};
  }

  if (alertType === 'info') {
    alertStyle = {...alertStyle, ...{color: "#4091d7", borderColor: "#4091d7" }}
  }

  if (alertType === 'error' || alertType === 'danger') {
    alertStyle = {...alertStyle, ...{color: "#b34045", borderColor: "#b34045" }};
  }

  setTimeout(() => {
    setHideAlert(true);
  }, hideAlertTime);

  return (
    <React.Fragment>
      { !hideAlert && <div style={alertStyle}>{ alertMessage }</div> }
    </React.Fragment>
  )
}
