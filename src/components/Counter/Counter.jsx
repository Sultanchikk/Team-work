import styles from './Counter.module.css'
import {useState} from "react";

const Counter = () => {
  const [isCounter, setCounter] = useState(0)
  return (
    <button
      onClick={() => setCounter(e => e + 1)}
      className={styles.button}>
      {isCounter}
    </button>
  );
};

export default Counter;