import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "../reducers/counterSlice";

const Body = () => {
  const data = useSelector((state) => state.counter);
  let { value: count } = data;
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Simple Redux toolkit boiler plate without Api calling </h2>
      <button onClick={() => dispatch(increase(Math.floor(Math.random() * 10)))}>👍(➕)</button>
      {/* <button onClick={() => dispatch(increase(0))}>👍(0)</button> */}
      <h3>{count}</h3>
      <button onClick={() => dispatch(decrease(Math.floor(Math.random() * -10)))}>👎(➖)</button>
      {/* <button onClick={() => dispatch(decrease("invalid"))}>👎(str)</button> */}
    </div>
  );
};

export default Body;
