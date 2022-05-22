import React from "react";
import SimpleList from "./components/SimpleList";

function App() {

  // Dummy Data  
  let ListData = [
    {
      "id": 1,
      "title": "Sunt aut facere repellat  optio reprehenderit.",
    },
    {
      "id": 2,
      "title": "Provident occaecati excepturi.",
    }
  ]


  return (
    <React.Fragment>
      <SimpleList listItems={ListData} heading="Simple List" />
    </React.Fragment>
  );
}

export default App;