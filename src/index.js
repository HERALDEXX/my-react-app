import { useState } from "react";
import ReactDOM from "react-dom/client";
//import Todos from "./Todos";
//import "./Styles.css";
//import Car from "./Car.js";
import "./my-sass.scss";
/*
const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
*/


const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);
//root.render(<Car />);
root.render(<Header />);