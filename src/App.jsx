import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";
import { changeText } from "./redux/texter";
import "./styles.css";

export default function App() {
  // Reducerからほしいstateを指定する
  // stateの後はstoreから呼びたいキーを指定する
  const { count } = useSelector((state) => state.counter);
  // Actionを呼ぶためにuseDispatchを定義する
  const dispach = useDispatch();

  const { text } = useSelector((state) => state.texter);

  const data = () => {
    // console.log(text);
    // console.log(count);
  };
  return (
    <div className="App">
      <h1> The count is: {count}</h1>
      <button
        onClick={() => {
          dispach(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispach(decrement());
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispach(incrementByAmount(33));
        }}
      >
        33
      </button>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => dispach(changeText(e.target.value))}
        />
        <button onClick={data}>get data</button>
      </div>
    </div>
  );
}
