import React, { createContext, useContext, useReducer } from 'react';

// 创建一个上下文
const StateContext = createContext();

// 初始状态
const initialState = {
  count: 0,
};

// 定义 reducer 函数
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// 在组件中使用 reducer 和上下文
const ExampleComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <StateContext.Provider value={state}>
      <div>
        <p>Count: {state.count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </StateContext.Provider>
  );
};

// 在其他组件中访问状态
const OtherComponent = () => {
  const state = useContext(StateContext);

  return <p>Count from context: {state.count}</p>;
};

export default ExampleComponent;