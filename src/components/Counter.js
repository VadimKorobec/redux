import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import {
  decrement,
  increase,
  increment,
  toggleCounter,
} from "../store/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => dispatch(increment(1))}>Increment</button>
        <button onClick={() => dispatch(increase(5))}>Increase by 5</button>
        <button onClick={() => dispatch(decrement(1))}>Decrement</button>
      </div>
      <button onClick={() => dispatch(toggleCounter(!showCounter))}>
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
