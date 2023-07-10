import { useRef, useState } from "react";

function Ref() {
  const [n, setN] = useState(0);

  const addN = () => {
    setN((x) => x + 1);
  };

  const ref = useRef(10);

  const addRef = () => {
    ref.current = ref.current + 1;
    console.log('ref.current--- ',ref.current )
  };
  return (
    <>
      <div style={{ padding: "30px" }}>
        <div> {n}</div>
        <button onClick={addN}>n+1</button>
      </div>

      <div style={{ padding: "30px" }}>
        <div> {ref.current}</div>
        <button onClick={addRef}>ref + 1</button>
      </div>
    </>
  );
}

export default Ref;
