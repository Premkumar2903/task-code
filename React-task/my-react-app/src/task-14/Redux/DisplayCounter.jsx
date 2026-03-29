import { useSelector } from "react-redux";

export default function DisplayCounter() {
  const count = useSelector((state) => state.counter.value);

  return <h2>Count: {count}</h2>;
}