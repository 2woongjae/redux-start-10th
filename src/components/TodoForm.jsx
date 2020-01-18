import React, { useContext } from "react";
import { addTodo } from "../actioins";
import ReduxContext from "../contexts/ReduxContext";

const TodoForm = () => {
  const inputRef = React.createRef();
  const context = useContext(ReduxContext);
  function click() {
    const text = inputRef.current.value;
    console.log(text);
    context.dispatch(addTodo(text));
  }
  return (
    <div
      style={{
        border: "1px solid red"
      }}
    >
      <input ref={inputRef} />
      <button onClick={click}>add</button>
    </div>
  );
};

export default TodoForm;
