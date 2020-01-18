import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { addTodo, completeTodo } from "./actioins";

class App extends React.Component {
  inputRef = React.createRef();
  click = () => {
    const text = this.inputRef.current.value;
    console.log(text);
    this.props.store.dispatch(addTodo(text));
  };

  render() {
    const todos = this.props.store.getState().todos;
    console.log(todos);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <input ref={this.inputRef} />
            <button onClick={this.click}>add</button>
          </p>
          <ul>
            {todos.map((todo, index) => (
              <div key={index}>
                <h2>
                  {todo.text}{" "}
                  {todo.done ? (
                    "(완료)"
                  ) : (
                    <button
                      onClick={() => {
                        console.log(index);
                        this.props.store.dispatch(completeTodo(index));
                      }}
                    >
                      끝!
                    </button>
                  )}
                </h2>
              </div>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
