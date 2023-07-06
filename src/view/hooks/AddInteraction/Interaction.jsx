import { useState } from "react";
import { sculptureList } from "./data.js";
function Interaction() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleNextClick}>next</button>
      <p>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </p>
      <div>
        {" "}
        {index + 1} of {sculptureList.length}
      </div>
      <button onClick={handleMoreClick}>
        {" "}
        {showMore ? "hide" : "show"} details
      </button>
        {showMore && <p>{sculpture.description}</p>}
      <div>
        <img src={sculpture.url} alt={sculpture.alt} />
      </div>
    </>
  );
}

export default Interaction;
