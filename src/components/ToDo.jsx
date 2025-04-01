import penIcon from "../assets/pen.png"
import deleteIcon from "../assets/delete.png"


function ToDo(props) {
    const { text } = props;

    return (
        <>
            <div className="todo">
            <p>{text}</p>
            <div>
                <img src={penIcon} alt="Pen icon" className="icon"/>
                <img src={deleteIcon} alt="Delte icon" className="icon"/>
            </div>
            </div>
        </>
    )
}

export default ToDo;