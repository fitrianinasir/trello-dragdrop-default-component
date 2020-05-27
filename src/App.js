import React from "react";
import Board from "react-trello";
import data from "./data.json";
import "./App.css";

function App() {
  const shouldReceiveNewData = (nextData) => {
    console.log("New card has been added");
    console.log(nextData);
  };
  return (
    <div className="App">
      <h1>react-trello demo</h1>
      <Board editable data={data} draggable onDataChange={shouldReceiveNewData} addCardLink={<span/>}/>
    </div>
  );
}

export default App;
