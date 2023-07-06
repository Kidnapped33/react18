// import { useState } from 'react';

import { useImmer } from "use-immer";

let nextId = 3;

const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function UpdateArray() {
  // const [list, setList] = useState(initialList);

  const [list, updateList] = useImmer(initialList);

  function handleToggle(artworkId, nextSeen) {
    //   setList(list.map(artwork => {
    //     if (artwork.id === artworkId) {
    //       return { ...artwork, seen: nextSeen };
    //     } else {
    //       return artwork;
    //     }
    //   }));
    updateList((item) => {
      console.log('item----',item)
      const artwork = item.find((a) => a.id === artworkId);
      artwork.seen = nextSeen;
    });
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={list} onToggle={handleToggle} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

// function UpdateArray() {
//   return <>UpdateArray</>;
// }

// export default UpdateArray;
