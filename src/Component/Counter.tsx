import { useState } from "react";
import "./counter.scss"

export const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <div className="title">Счётчик</div>
      <div>
        <button className="button" onClick={increment}>
          {count}
        </button>
      </div>
    </>
  );
};
