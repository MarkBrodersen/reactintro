import { useState } from "react";

const Input = () => {
  let [InputValue, setValue] = useState("Init value");
  let stateValue;
  const handleSubmit = (event) => {
    event.preventDefalut();
    stateValue = value;
  };

  return (
    <form>
      <input
        type="text"
        name="formTextInput"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        id="formTextInput"
        placeholder="Text"
      />
      <input
        aria-label="Submit Element"
        onClick={handleSubmit}
        type="submit"
        value="Submit"
      />
      <div>
        <span>{InputValue}</span>
        <br></br>
        <span>{stateValue}</span>
      </div>
    </form>
  );
};

export default Input;
