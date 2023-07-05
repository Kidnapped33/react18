import { useState } from "react";

function B() {
  const [count, setCount] = useState(0);

  return (
    <>
      {count}
      <button onClick={()=>{ setCount(33) }}>changeName</button>
      <button onClick={() => { setCount(count + 1) }} > changeCount </button>
    </>
  );
}

export default B;
