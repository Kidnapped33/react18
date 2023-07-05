import { useState } from "react";

function DifferentData() {
  return (
    <>
      2个组件数据是不相通的 DifferentData
      <div>
        <Diff />
      </div>
      <div>
        <Diff />
      </div>
    </>
  );
}

function Diff() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      {count}
    </>
  );
}

// function Same(props: any) {
//   return (
//     <>
//       Same
//       <button onClick={() => {props.addTen()}}>+10</button>
//       {props.value}
//     </>
//   );
// }
function Same({ info, onClick }: any) {
  return (
    <>
      Same
      <button onClick={onClick}>+10</button>
      {info}
    </>
  );
}

function SameData() {
  const [sameValue, setSameValue] = useState(10);
  const addTen = () => {
    setSameValue(sameValue + 10);
  };
  return (
    <>
      2个组件数据是相通的 SameData
      <div>
        <Same info={sameValue} onClick={addTen} />
      </div>
      <div>
        <Same info={sameValue} onClick={addTen} />
      </div>
    </>
  );
}

export { Diff, DifferentData, Same, SameData };
