import { useEffect, useState } from "react";

// useEffect
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
      console.log("n,m变了", n, m);
    },
    // 每次都触发

    //只第一次触发
    // []

    //指定某值改变时触发
    // [n]

    //指定某值改变时触发
    [n, m]
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

// useState 普通值/array/object

function State() {
  // ----------------- object

  const [user, setUser] = useState({
    id: 1,
    username: "Amy",
    email: "Amy@example.com",
  });

  const updateUserData = (newUserName: string) => {
    setUser((userData) => ({ ...user, username: newUserName }));
  };

  // ----------------- array

  const [arr, setArr] = useState([10, 20, 30]);

  // const changeArr = () => {
  //   // setArr({...arr,arr.push(100)})
  // }

  return (
    <>
      State
      <br />
      changeObject
      <div>{user.username}</div>
      <br />
      changeArray
      <div>{arr[0]}</div>
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

      <div>hook State</div>
      <State />

      <div>function 方式</div>
      <A/>
      <B/>
    </>
  );
}

export default Hooks;

// function 方式一 普通函数

function A() {
  return <>A</>;
}

// function 方式二 箭头函数
const B = () => {
  return <>B </>;
};
