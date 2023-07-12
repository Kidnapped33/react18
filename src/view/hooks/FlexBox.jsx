import { useState } from "react";
import "./FlexBox.css";

function FlexBox() {
  let [visitCard, setVisitCard] = useState(false);

  const showPad = () => {
    console.log("showPad");
  };

  const onVisitCard = () => {
    setVisitCard((visitCard = !visitCard));
  };

  return (
    <>
      <div className="context">
        <div className="main">
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
          <div>main</div>
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

          {visitCard && (
            <div className="bottom-down">
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
          )}
        </div>
      </div>
    </>
  );
}

export default FlexBox;
