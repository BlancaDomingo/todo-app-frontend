
import './App.scss';
import Header from './components/Header'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
 

function App() {

 /*  const [todosList, setTodosList] = useState([]);  */


   const todos = [
    {
      text: 'Wäsche waschen',
      done: false,
    },
    {
      text: 'Kochen',
      done: false,
    },
    {
      text: 'Fernsehen',
      done: true,
    }
  ];  

  

  const addTask = (todos) => {
    console.log('.',todos);
    
  
    
  }

  
    const openTodos = todos.filter(todo => !todo.done)
    const doneTodos = todos.filter(todo => todo.done)
  

  return (
    <div className="App">
     
      <Header />
      <TodoInput text="Fertig" 
      onButton={addTask}/>
      

      <h2>Todo</h2>
      <TodoList todos={openTodos} />
      
      <hr />     
      <h2>Erledigt</h2>
      <TodoList todos={doneTodos}/>
          
    </div>
  );
}

export default App;

/* git remote add origin https://github.com/BlancaDomingo/todo-app.git */
