import React, { useState } from "react";

const initialList = [
  {
    id: 1,
    name: "jatin",
  },
  {
    id: 2,
    name: "amit",
  },
];
const App = () => {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState("");

  const handlleChange = (e) => {
    setName(e.target.value);
  };

  const addEventHandler = () => {
    //add event here
    const newList = list.concat({ name, id: Date().toString() });
    setList(newList);
  };

  return (
    <>
      <div className="box" id="heading">
        <h1>Welcome</h1>
      </div>

      <div className="box">
        {list.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
        <div className="item">
          <input
            type="text"
            placeholder="Enter your message"
            onChange={handlleChange}
            value={name}
          />
          <button type="button" onClick={addEventHandler}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
