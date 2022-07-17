interface incrementInterface {
  handleIncrement: (value: number) => void;
  result: number;
}

function Child({ handleIncrement, result }: incrementInterface) {
  const incrementByOne = (value: number) => {
    handleIncrement(result + value);
  };

  return (
    <div>
      <button onClick={() => incrementByOne(1)}>Add 1</button>
      <button onClick={() => incrementByOne(10)}>Add 10</button>
      <button onClick={() => incrementByOne(100)}>Add 100</button>
    </div>
  );
}

export default Child;
