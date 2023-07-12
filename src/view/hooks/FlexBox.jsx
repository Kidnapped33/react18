import { useState } from "react";
import "./FlexBox.css";

function FlexBox() {
  const [isBottomDownVisible, setIsBottomDownVisible] = useState(true);

  const showPad = () => {
    console.log("showPad");
  };

  const onVisitCard = () => {
    setIsBottomDownVisible(!isBottomDownVisible);
  };

  const [visitTest, setVisitTest] = useState(true);

  const onVisitTest = () => {
    setVisitTest(!visitTest);
  };

  return (
    <>
      <div className="context">
        <div className="main">
          <button onClick={onVisitTest}>show</button>
          <div className={`test ${visitTest ? "test-show" : "test-hidden"} `}></div>

          <div className="static-add">+</div>
        </div>
        <div className="bottom">
          <div className="bottom-up">
            <div className="bottom-left">
              <input className="my-input" type="text" onClick={showPad}></input>
            </div>
            <div className="more" onClick={onVisitCard}>
              +
            </div>
          </div>

          <div
            className={`bottom-down ${
              isBottomDownVisible ? "hidden" : "slide-in"
            }`}
          >
            <div className="first">
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
            <div className="second">
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlexBox;
