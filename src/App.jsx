import "./App.css";
import addIcon from "./assets/add.png"
import penIcon from "./assets/pen.png"
import deleteIcon from "./assets/delete.png"

function App() {
  return (
    <>
      <div className="main-container">
        <h1>Walle To-Do List</h1>
        <div className="input-main">
        <label htmlFor="todo">Add a To-Do</label>
        <div className="input-container">
          <input type="text" name="todo"/>
          <img src={addIcon} alt="Add icon" className="icon"/>
        </div>
        </div>
        <div className="todo">
          <p>Sacar a pasear al viejon</p>
          <div>
            <img src={penIcon} alt="Pen icon" className="icon"/>
            <img src={deleteIcon} alt="Delte icon" className="icon"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
