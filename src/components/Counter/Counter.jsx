import styles from './Counter.module.css'
import {useState} from "react";

const Counter = () => {
  const [isCounter, setCounter] = useState(0)
  return (
    <div className={styles.div}>
      <button
        className={styles.button}
        onClick={() => setCounter(e => e + 1)}
      >
        +
      </button>
      <span>
      {isCounter}
     </span>
      <button
        className={styles.button}
        onClick={() => setCounter(e => e - 1)}
      >
        -
      </button>
    </div>
  );
};

export default Counter;