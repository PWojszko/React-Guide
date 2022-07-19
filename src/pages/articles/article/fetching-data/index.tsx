import { useState, useEffect } from "react";

import person from "../../../../types/person";

const FetchingData = () => {
  const [person, setPerson] = useState<person>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | String>(null);

  useEffect(() => {
    const apiUrl = "https://randomuser.me/api/";

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        let data = await response.json();
        setPerson(data);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          console.log(err);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (!person || isLoading || error) return null;

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
