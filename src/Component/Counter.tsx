import { useState } from "react";

import * as classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <div className={classes.title}>Счётчик</div>
      <div>
        <button className={classes.button} onClick={increment}>
          {count}
        </button>
      </div>
    </>
  );
};
