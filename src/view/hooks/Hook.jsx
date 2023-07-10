import { useEffect, useState } from "react";
import List from "./filterData/MapData";
import Self from "./Self";
import Three from "./Three";
import Form from "./updateData";
import FromData from "./FromData";
import Stop from "./Stop";
import Ref from "./Ref";
import UpdateArray from "./UpdateArray";
import Interaction from "./AddInteraction/Interaction";

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
  // ----------------- update object

  const [user, setUser] = useState({
    id: 1,
    username: "Amy",
    email: "Amy@example.com",
  });

  const updateUserData = (newUserName) => {
    setUser({ ...user, username: newUserName });
  };

  // ----------------- update array

  const [arr, setArr] = useState([10, 20, 30]);

  const changeArr = (newValue) => {
    setArr([...arr, newValue]);
  };

  return (
    <>
      State
      <br />
      changeObject
      <div>{user.id}</div>
      <div>{user.username}</div>
      <div>{user.email}</div>
      <button
        onClick={() => {
          updateUserData("HHHHH");
        }}
      >
        更新 username
      </button>
      <br />
      changeArray
      <div>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
      <button
        onClick={() => {
          changeArr(100);
        }}
      >
        push 100
      </button>
    </>
  );
}

function Hooks() {
  const [hook, setHook] = useState(0);
  useEffect(() => {
    console.log("Hooks1---------------", hook);
    setHook(hook + 1);
    console.log("Hooks2---------------", hook);
    setTimeout(() => {
      console.log("Hooks333---------------", hook);
    }, 0);
  }, []);
  return (
    <>
      <Ref />
      <div>------------------------</div>
      
      <Stop />
      <div>------------------------</div>

      {/* <FromData />
      <div>------------------------</div> */}

      {/* <UpdateArray />
      <div>------------------------</div> */}

      {/* <Form />
      <div>------------------------</div> */}

      {/* <Three />
      <div>------------------------</div> */}

      {hook}
      <div>------------------------</div>
      <Interaction />
      <div>------------------------</div>

      <Self />
      <div>------------------------</div>

      <List />
      <div>------------------------</div>

      <div>hook useEffect</div>
      <Effect />

      <div>------------------------</div>

      <div>hook State</div>
      <State />

      <div>------------------------</div>

      <div>function 方式</div>
      <A />
      <B />
      <div>------------------------</div>

      <div>&& 操作符</div>
      <PackingList />
      <div>------------------------</div>
    </>
  );
}

export default Hooks;

//&& 操作符

function Item({ name, isPacked }) {
  return (
    <>
      <li>
        {name}
        {isPacked && " --- yes"}
      </li>
    </>
  );
}

function PackingList() {
  return (
    <>
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item name="aaa" isPacked={true}></Item>
          <Item name={"bbb"} isPacked={false}></Item>
        </ul>
      </section>
    </>
  );
}

// function 方式一 普通函数

function A() {
  return <>A</>;
}

// function 方式二 箭头函数
const B = () => {
  return <>B </>;
};
