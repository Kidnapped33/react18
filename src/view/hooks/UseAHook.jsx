// import { useTags } from "useTags";

// export default function UseAHook() {
//   const {} = useTags();

//   return (
//     <>
//       <button> +++++ </button>
//       <div>
//         {/* {tags.map((tag) => (
//           <div>{tag}</div>
//         ))} */}
//       </div>
//     </>
//   );
// }

import { useTags } from "./useTags";
import "./useAHook.css";

function UseAHook() {
  const { tags, setTags } = useTags();
  const pushTag = (data) => {
    setTags([...tags, data]);
  };

  const deleteTag = (index) => {
    // splice返回的是被删除的数据，它会改变原数组
    const newList = [...tags];
    newList.splice(index, 1);
    setTags(newList);
  };

  return (
    <>
      UseAHook
      <div>
        {tags.map((tag, index) => (
          <div key={index}>
            {index + 1 + ":" + tag}
            <span>
              <button onClick={() => deleteTag(index)}>-</button>
            </span>
          </div>
        ))}
      </div>
      <div className="view_port">
        <div className="polling_message">从左到右动画"</div>
        <div className="cylon_eye"></div>
      </div>
      <button onClick={() => pushTag("tag")}>push tag </button>
    </>
  );
}

export default UseAHook;
