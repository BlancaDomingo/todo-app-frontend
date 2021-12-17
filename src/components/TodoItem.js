



const TodoItem = ({ todo, onChange, greenOn }) => {


    const handleChange = (e) => {

        e.preventDefault()
        onChange({ type: 'toggle', index: todo.index })

    };

    const deleteTask = (e) => {
        onChange({ type: 'delete', index: todo.index })
        /*  e.target.parentElement.remove(); */
    }
    /* 
        const onMouseEnter = (e) => {
          
            document.querySelector(".check").classList.add("checkHover") 
          e.target.firstChild.classList.add("checkHover")
        }
    
        const onMouseLeave = (e) => {
            
            e.target.firstChild.classList.remove("checkHover")
        } */


    return (
        <div className="item" /* onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} */>

            <div onClick={handleChange} className={greenOn ? "check checkHover" : "check"}>✔</div>


            {/* <input className="check" type="checkbox" id="myCheck" 
          onClick={handleChange}></input>  */}
            <div className="label">
                <p className="labelTitel">{todo.text}</p>
                {/* <label  htmlFor="myCheck">{todo.text} </label> */}
                <span className={todo.remember ? "showInLabel" : "noShowInLabel"  }><i className="fa fa-bell"></i></span>
               {/*  <span>&nbsp;&middot;&nbsp;</span> */}
                <span className={todo.repeat ? "showInLabel" : "noShowInLabel"  }>&nbsp;&middot;&nbsp;<i className="fa fa-retweet"></i></span>
                {/* <span>&nbsp;&middot;&nbsp;</span> */}
                <span className={todo.date ? "showInLabel" : "noShowInLabel"  }>&nbsp;&middot;&nbsp;<i className="fa fa-calendar"></i>&nbsp;{todo.date}</span>
            </div>
            <p className="buttonX" onClick={deleteTask}>✘</p>

        </div>
    )
}

export default TodoItem;