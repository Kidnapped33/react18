import { useState } from "react";
import "./One.css";
// import A from "./A";
// import B from "./B";
// import ShowData from "./ShowData";
import { SameData , DifferentData} from "./SameData";

export default function One() {
  // 创建变量 const name = ref<string>('Ash')
  const [name, setName] = useState("Ash");
  // let number = 1;
  // let showSomeOne;
  // if (number === 10) {
  //   showSomeOne = <A />;
  // } else {
  //   showSomeOne = <B />;
  // }

  // number === 10 ? (showSomeOne = <A />) : (showSomeOne = <B />);

  const aliasName = "user_" + name;
  return (
    <>
      one
      <div className="main" style={{ backgroundColor: "red" }}>
        {name}
        <button
          onClick={() => {
            setName("Bsh");
          }}
        >
          changeName
        </button>
      </div>
      <div>{aliasName}</div>
      <br />
      {/* <div>{number === 10 ? <A /> : <B />}</div> */}
      <DifferentData />
      <br />
      <SameData />
      <br />
      
    </>
  );
}
