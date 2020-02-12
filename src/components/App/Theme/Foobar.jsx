import React, { useState } from "react";

const Foobar = (props) => {

  const [label, setLabel] = useState('default');
  const onClick = () => {
    setLabel('new');
  }

  const onChange = (event) => {
    setLabel(event.target.value);
  }

  return (
    <div>
      <h1>Foobar {label}</h1>
      <input type="text" value={label} onChange={onChange} />
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default Foobar;