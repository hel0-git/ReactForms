import React, { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [h1Name, seth1Name] = useState();

  function updateName(event) {
    setName(event.target.value);
  }
  function nameHandler() {
    seth1Name(name);
  }

  return (
    <div className="container">
      <h1>Hello {h1Name}</h1>
      <input
        onChange={updateName}
        value={name}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={nameHandler}>Submit</button>
    </div>
  );
}

export default App;
