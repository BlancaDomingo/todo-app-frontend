
import './App.scss';
import Header from './components/Header'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useReducer } from 'react';




function App() {

  const todoInitial = [
    {
      index: 124566767,
      text: 'Wäsche waschen',
      done: false,
    },
    {
      index: 234345346,
      text: 'Kochen',
      done: false,
    },
    {
      index: 234447787,
      text: 'Fernsehen',
      done: false,
    }
  ];


  const todosReducer = (array, action) => { // orig arr oder obj nicht bearbeiten => neue erstellen und return (asi render sich)
    // action.type / action.payload (Ladung)

    // hinzufügen / 'add'      am bestens immer obj
    // {type: 'add', payload: {text: String}}   

    switch (action.type) {
      case 'add':
        const todoText = action.payload.text
        const todoIndex = action.payload.index
        const todo = {
          index: todoIndex,
          text: todoText,
          done: false
        }
        const result = [...array, todo]
        console.log('res', result);
        return result;

      case 'toggle':
        const index = action.index;
        return array.map((todo) => {
          if (todo.index === index) {
            return { ...todo, done: !todo.done }

          }

          return todo
        });

      case 'delete':
        // löschen / 'delete'
        // {type: 'delete', payload: {index: Number}}
        const ind = action.index;
        return array.filter(todo => todo.index !== ind)

      default:
        return array;
    }

  }


  const [todos, dispatchTodos] = useReducer(todosReducer, todoInitial)

  const goToReducer = (action) => {
    dispatchTodos(action)
  }



  return (
    <div className="App">

      <Header />
      <TodoInput onButton={goToReducer} />


      <h2>Todo</h2>
      <TodoList todos={todos.filter(todo => !todo.done)} onChange={goToReducer} />

      <hr />
      <h2>Erledigt</h2>
      <TodoList todos={todos.filter(todo => todo.done)} onChange={goToReducer} />
    </div>
  );
}

export default App;

/* git remote add origin https://github.com/BlancaDomingo/todo-app.git */
