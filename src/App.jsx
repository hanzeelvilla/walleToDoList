import "./App.css";
import addIcon from "./assets/add.png"
import ToDo from "./components/ToDo";

function App() {
  const todos = ["Sacar a pasear al viejo"];

  return (
    <>
      <div className="main-container">
        <h1>Walle To-Do List</h1>
        <div className="input-main">
          <label htmlFor="todo">Add a To-Do</label>
          <div className="input-container">
            <input type="text" name="todo"/>
            <img src={addIcon} alt="Add icon" className="addIcon"/>
          </div>
        </div>
      </div>

      <div className="todos-container">
        {todos.map((todo, index) => (
          <ToDo text={todo} key={index}/>
        ))}
      </div>
    </>
  );
}

export default App;
