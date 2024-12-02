import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  console.log(counter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  const handleIncrement = (number) => {
    dispatch({ type: "increment", value: number });
  };

  const handleDecrement = (number) => {
    if (counter === 0) {
      return;
    }
    dispatch({ type: "decrement", value: number });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => handleIncrement(1)}>Increment</button>
        <button onClick={() => handleIncrement(5)}>Increase by 5</button>
        <button onClick={() => handleDecrement(1)}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
