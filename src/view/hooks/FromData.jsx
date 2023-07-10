import { useState } from "react";

function FromData() {
  return (
    <>
      <Form />
    </>
  );
}

export default FromData;

export function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>答对了！</h1>;
  }

  const handleTextareaChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit---", answer);
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      // 这里需要拿 err 的 message 才能拿到那个值
      setError(err.message);
    }
  };

  return (
    <>
      <h2>城市</h2>
      <p>哪个城市？</p>

      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        />
        answer:{answer}
        status:{status}
        <button disabled={status === "submitting"}>submit</button>
        {error !== null && <p>{error}</p>}
      </form>
    </>
  );

  function submitForm(answer) {
    return new Promise((resolve, reject) => {
      let shouldError = answer !== "深圳";
      if (shouldError) {
        reject(new Error("答案不对。再试试看吧！"));
      } else {
        resolve();
      }
    });
  }
}
