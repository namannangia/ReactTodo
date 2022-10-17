// import logo from "./logo.svg";
import CreateTodo from "./components/createTodo.js";
import "./App.css";
import "./assets/style.css";
function App() {
  return (
    <div className="main">
      <div className="outer-box">
        <CreateTodo />
      </div>
    </div>
  );
}

export default App;
