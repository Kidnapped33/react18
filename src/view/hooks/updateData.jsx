import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

export default function Form() {
  //------------------ useState
  //   const [person, setPerson] = useState({
  //     name: "Niki",
  //     artwork: {
  //       title: "Blue",
  //       city: "上海",
  //       image: "https://i.imgur.com/Sd1AgUOm.jpg",
  //     },
  //   });

  //------------------ useImmer

  const [person, updatePerson] = useImmer({
    name: "Niki",
    artwork: {
      title: "Blue",
      city: "上海",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  const handleNameChange = (e) => {
    // setPerson({ ...person, name: e.target.value });
    updatePerson((item)=>{item.name = e.target.value })
  };

  const handleTitleChange = (e) => {
    // setPerson({
    //   ...person,
    //   artwork: { ...person.artwork, title: e.target.value },
    // });
    updatePerson((item)=>{item.artwork.title = e.target.value })
  };
  const handleCityChange = (e) => {
    // setPerson({
    //   ...person,
    //   artwork: { ...person.artwork, city: e.target.value },
    // });
    updatePerson((item)=>{item.artwork.city = e.target.value })

  };

  useEffect(() => {
    // const id = setInterval(()=>{console.log('hi')},3000)

    // 当组件不再挂载时，使用 useEffect 的 return 销毁它
    
    // return () => window.clearInterval()
  },[])

  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        city:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>

      <div>---------------------------------</div>
      <div>name:{person.name}</div>
      <div>title:{person.artwork.title}</div>
      <div>city:{person.artwork.city}</div>
    </>
  );
}
