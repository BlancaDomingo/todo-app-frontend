import Finished from "./Finished";
import DeleteTask from "./DeleteTask";

// props { todo: {text: String, done: Boolean}}
const TodoItem = (props) => {
    //   { die heisst so = todo}
    const { todo, done } = props;
    
    return (
        <div className="item">
            <div>
                <input type="checkbox" id="myCheck" onclick={<Finished />}></input>
                <span>{done}</span>
                <label for="myCheck">{todo.text}</label>
            </div>
               <button className="buttonX" onClick={<DeleteTask />}>x</button> 

        </div>
    )
}

export default TodoItem;