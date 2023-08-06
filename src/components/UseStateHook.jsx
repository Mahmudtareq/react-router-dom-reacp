import { Button, Checkbox, Input } from "@mantine/core";
import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [condition, setCondition] = useState(false);
  const [mode, setMode] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [text, setText] = useState("hello");
  const [liked, setLiked] = useState(true);
  const inrement = () => {
    setCount(count + 1);
  };
  const deCrement = () => {
    setCount(count - 1);
  };
  const clcikHandler = () => {
    setCondition(true);
  };
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  const modeHandler = () => {
    setMode(!mode);
  };
  const toggleClass = mode ? "bg-indigo-500" : "bg-red-500";
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleCheck = (e) => {
    setLiked(e.target.checked);
  };

  return (
    <div className="text-center bg-gray-300 p-4 mx-auto w-[300px] rounded-md">
      <p className="bg-gray-400 p-4 text-purple-700">{count}</p>
      <Button className="mr-6" onClick={inrement}>
        ++
      </Button>
      <Button onClick={deCrement}>--</Button>
      <div className="my-8 bg-gray-400 p-4 rounded-sm">
        <Button onClick={clcikHandler}>Set Condition</Button>
        <p>{condition && "Hello world"}</p>
      </div>
      <div className="mt-8 p-4 bg-indigo-400   rounded-md">
        <Button onClick={toggleSwitch}>
          {isOn ? "button is On" : "button is Off"}
        </Button>
      </div>
      <div className={`mt-8 p-4 rounded-md ${toggleClass}`}>
        <Button className="my-8" onClick={modeHandler}>
          Toggle Color
        </Button>
      </div>
      <div className="mt-8 p-4 bg-indigo-700">
        <Input value={text} onChange={handleChange} />
        <p className="text-white font-serif">
          You typed: <span className="text-red-900">{`Hello ${text} You are ${count}`}</span>{" "}
        </p>
        <Button onClick={() => setText("hello")}>reset</Button>
      </div>
      <div className="mt-8 p-8 bg-gray-50">
        <Checkbox
          label=" I liked this"
          checked={liked}
          onChange={handleCheck}
        />
        <p>You {liked ? "liked" : "did not like this"}</p>
      </div>
    </div>
  );
};

export default UseStateHook;
