import { useEffect, useState } from "react";
function Effect() {

  const [n, setN] = useState(0);

  const addN = () => {
    setN(n + 1);
  };

  const [m, setM] = useState(0);

  const addM = () => {
    setM(m + 1);
  };

  useEffect(
    () => {
      console.log("n,m变了", n,m);
    },
    // 每次都触发

    //只第一次触发
    // []

    //指定某值改变时触发
    // [n]

    //指定某值改变时触发
    [n,m]
  );
  return (
    <>
      {n}
      <button onClick={addN}> N+1</button>
      <br></br>
      {m}
      <button onClick={addM}> M+1</button>
    </>
  );
}

function Hooks() {
  console.log("Hooks");
  // useEffect
  return (
    <>
      <div>hook useEffect</div>
      <Effect />
    </>
  );
}

export default Hooks;
