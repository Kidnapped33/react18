import { people } from "./data.js";

import { getImageUrl } from "./utils.js";

function List() {
  // const listItems = people.map(person =>
  //     <li key={person.id}>
  //         <img src={getImageUrl(person)}  alt={person.name}>123</img>
  //     </li>
  // )

  const listItems = people.map((person) => <li key={person.id}>
    <img src={getImageUrl(person)}  alt={person.name}></img>
    <p>
     <b>{person.name}:</b>
     {' ' + person.profession + ' '}
     known for {person.accomplishment}
    </p>
  </li>);

  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

export default List;
