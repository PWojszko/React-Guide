import { useState, useEffect } from "react";

import person from "../../../../types/person";

const FetchingData = () => {
  const [person, setPerson] = useState<person>();

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch("https://randomuser.me/api/");
      let data = await response.json();
      setPerson(data);
    })();
  }, []);

  if (!person) return null;

  const { results } = person;
  const { cell, email, name, picture } = results[0];

  return (
    <div>
      <h1>Fetching data</h1>
      <img src={picture.thumbnail} alt={name.first} />
      <h2>
        {name.title} {name.first} {name.last}
      </h2>
      <h3>{cell}</h3>
      <h3>{email}</h3>
    </div>
  );
};

export default FetchingData;
