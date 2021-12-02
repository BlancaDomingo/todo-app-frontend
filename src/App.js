
import './App.scss';
import Header from './components/Header'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Bar from './components/Bar';

function App() {
  const addTask = (nameTask) => {
    alert(`Button geclickt. Task: ${nameTask}`)
  }

  return (
    <div className="App">
      <Header />
      <TodoInput text="Fertig" 
      onButton={addTask}/>
      <h2>Todo</h2>
      <TodoList />
      <Bar / >      
      <h2>Erledigt</h2>
      <TodoList />
          
    </div>
  );
}

export default App;

/* git remote add origin https://github.com/BlancaDomingo/todo-app.git */
