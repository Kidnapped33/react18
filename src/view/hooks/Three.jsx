import { useState } from 'react';

export default function Three() {
  const [score, setScore] = useState(0);

  // 每次 score 还是初始值
  function increment() {
    setScore(score + 1);
  }

   // 每次 score 是上一次操作的值
  function increment() {
    setScore((score)=>score + 1);
  }

  return (
    <>
      {/* <button onClick={() => increment()}>+1</button> */}
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <h1>Score: {score}</h1>
    </>
  )
}
