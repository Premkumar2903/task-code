import { useDispatch } from "react-redux";
import { increment, decrement } from "../counterSlice";


export default function CounterButtons() {
  const dispatch = useDispatch();

  return (
    <>
      <button className="bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 active:bg-blue-800" 
        onClick={() => dispatch(increment())}
      >
            + Increase
      </button>

      <button className="bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600 active:bg-yellow-800" 
        onClick={() => dispatch(decrement())}
      >
            - Decrease
      </button>
    </>
  );
}