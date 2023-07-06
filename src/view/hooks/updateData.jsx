import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    name: "Niki",
    artwork: {
      title: "Blue",
      city: "上海",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  const handleNameChange = (e) => {
    setPerson({ ...person, name: e.target.value });
  };

  const handleTitleChange = (e) => {
    setPerson({
      ...person,
      artwork: { ...person.artwork, title: e.target.value },
    });
  };
  const handleCityChange = (e) => {
    setPerson({
      ...person,
      artwork: { ...person.artwork, city: e.target.value },
    });
  };

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
