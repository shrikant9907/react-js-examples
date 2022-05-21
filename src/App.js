import React from "react";
import Alert from "./components/Alert";

function App() {
  return (
    <React.Fragment>
      <Alert type = "success" message="You are a nice developer." />
      <Alert type = "info" message="This message is going to hide in 5 seconds." hideDuration = {5000} />
      <Alert type = "error" message="Something gone wrong." />
    </React.Fragment>
  );
}

export default App;