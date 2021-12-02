import Finished from "./Finished";
import DeleteTask from "./DeleteTask";

const TodoItem = (props) => {
    
    return (
        <div className="item">
            <div>
                <input type="checkbox" id="myCheck" onclick={<Finished />}></input>
                <label for="myCheck">{props.task}</label>
            </div>
            <button className="buttonX" onClick={<DeleteTask task={props.id} />}>x</button>

        </div>
    )
}

export default TodoItem;