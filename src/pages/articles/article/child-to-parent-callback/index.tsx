import { useState } from "react";

import Child from "./Child";

function ChildToParentCallback() {
  const [result, setResult] = useState(0);

  const handleIncrement = (value: number) => {
    setResult(value);
  };

  return (
    <div>
      <h1>Wynik: {result}</h1>
      <Child handleIncrement={handleIncrement} result={result} />
    </div>
  );
}

export default ChildToParentCallback;
