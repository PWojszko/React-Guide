import { useState, useEffect } from "react";

const Promises = () => {
  const [isTrue, setIsTrue] = useState(false);

  const handleIsTrueState = () => {
    setIsTrue((prev) => !prev);
  };

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      isTrue ? resolve("Resolved") : reject("Rejected");
    }, 1000);
  });

  myPromise
    .then((message) => console.log(message + " :>"))
    .catch((error) => console.log(error + " :<"));

  return (
    <div>
      <button onClick={handleIsTrueState}>Set isTrue</button>
    </div>
  );
};

export default Promises;
