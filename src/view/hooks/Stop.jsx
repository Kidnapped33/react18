import { useEffect, useState } from "react";

function Stop() {
  return (
    <>
      stopPropagation / PreventDefault
      <p></p>
      <Baba />
      <p></p>
      <PreventDefault />
    </>
  );
}

function Baba() {
  return (
    <>
      <div
        style={{ border: "1px solid blue", width: 100, height: 100 }}
        onClick={() => {
          alert("baba");
        }}
      >
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
          alert("我是son1,点我不会触发冒泡");
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
        onClick={() => {
          alert("我是son2");
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
