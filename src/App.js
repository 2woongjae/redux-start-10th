import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { completeTodo } from "./actioins";
import ReduxContext from "./contexts/ReduxContext";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  static contextType = ReduxContext;

  state = this.context.getState();

  unsubscribe;

  componentDidMount() {
    this.unsubscribe = this.context.subscribe(() => {
      const state = this.context.getState();
      this.setState(state);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { todos } = this.state;
    console.log(todos);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TodoForm />
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
                        this.context.dispatch(completeTodo(index));
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
