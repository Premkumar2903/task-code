import { useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/CounterSlice";


export default function CounterButtons() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}