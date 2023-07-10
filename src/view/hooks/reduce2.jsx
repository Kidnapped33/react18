// import React, { createContext, useState } from "react";

// // ----------- 使用 reducer   = 使用 React 的上下文（Context）和 useReducer 钩子函数来管理应用程序的状态
// // reducer 是一个纯函数，它接收当前的状态和一个动作对象，并返回新的状态

// // 创建一个上下文
// const countContext = createContext();

// // 初始状态
// const initState = { count: 0 };

// // 定义 reducer 函数,它接收当前的状态和一个动作对象，并返回新的状态

// const reducer = (currentState, action) => {
//   switch (action.type) {
//     // +1
//     case "add":
//       return {...currentState, count: currentState.count + 1};
//     // -1
//     case "del":
//       return {...currentState, count: currentState.count - 1};
//   }
// };

// // 在组件中使用 reducer 和上下文



//--------------------------------------------------------------

function ExampleComponent2() {
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount((x) => x + 1);
  };
  const onDel = () => {
    setCount((x) => x - 1);
  };
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={onAdd}>+1</button>
      <button onClick={onDel}>-1</button>
    </>
  );
}

export default ExampleComponent2;
