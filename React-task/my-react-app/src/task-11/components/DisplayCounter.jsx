import { useSelector } from "react-redux";

export default function DisplayCounter() {
  const count = useSelector(state => state.counter.value);

  return (
    <h1>Count : {count}</h1>
  );
}