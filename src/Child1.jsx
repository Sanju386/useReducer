import React, { useReducer, useState } from "react";
import { reducer } from "./reducer";

const Child1 = () => {
  const ADD_VALUE = "ADD_VALUE";
  const MINUS_VALUE = "MINUS_VALUE";
  const CHANGE_COLOR = "CHANGE_COLOR";

  const initialState = {
    value: 0,
    color: "wheat",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch({
      type: ADD_VALUE,
      payload: 1,
    });
  };

  const handleClick1 = () => {
    dispatch({
      type: MINUS_VALUE,
      payload: 1,
    });
  };

  const handleClick2 = () => {
    dispatch({
      type: CHANGE_COLOR,
      payload: "green",
    });
  };

  const handleClick3 = () => {
    dispatch({
      type: CHANGE_COLOR,
      payload: "blue",
    });
  };

  return (
    <div className="Container">
      {/* //Child1 */}
      <div className="child1" style={{ background: state.color }}>
        <div className="box1">
          <button onClick={handleClick}>Increment</button>

          <h1>{state.value}</h1>

          <button onClick={handleClick1}>Decrement</button>
        </div>
      </div>

      {/* //Child2 */}
      <div className="child2">
        <button onClick={handleClick2}>Green</button>
      </div>

      {/* //Child3 */}
      <div className="child3">
        <button onClick={handleClick3}>Blue</button>
      </div>
    </div>
  );
};

export default Child1;
