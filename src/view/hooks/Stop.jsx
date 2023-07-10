import { useState } from "react";

function Stop() {
  return (
    <>
      stopPropagation / PreventDefault

      如果是想阻止默认行为，可以使用 e.preventDefault();
      <p></p>
      <Baba />
      <p></p>
      {/* <PreventDefault /> */}
    </>
  );
}

function Baba() {
  const alertBaba = () => {
   console.log('baba')
  };
  return (
    <>
      <div onClick={alertBaba}>
        <Son1 />
        <Son2 />
      </div>
    </>
  );
}

function Son1() {
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          console.log("我是son1,点我不会触发冒泡");
        }}
      >
        son1
      </button>
    </>
  );
}
function Son2() {
  return (
    <>
      <button
        onClick={(e) => {
          console.log("我是son2，点我会 触发自身 + 触发baba");
        }}
      >
        son2
      </button>
    </>
  );
}

function PreventDefault() {
  const changeTheme = () => {
    let myDiv = document.querySelector("#myDiv");
    if (myDiv.style.backgroundColor === "orange") {
      myDiv.style.backgroundColor = "white";
    } else {
      myDiv.style.backgroundColor = "orange";
    }
  };
  return (
    <>
      <div
        id="myDiv"
        style={{ backgroundColor: "orange", width: 200, height: 50 }}
      >
        <button
          onClick={() => {
            changeTheme();
          }}
        >
          {" "}
          changeTheme{" "}
        </button>
      </div>
    </>
  );
}

export default Stop;
