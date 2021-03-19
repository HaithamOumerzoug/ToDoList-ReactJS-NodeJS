import Header from './Components/Header'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddToDoList from './Components/AddToDoList'
import {Provider} from 'react-redux'
import ToDoListStore from './ToDoListStore'
import ToDoListes from './Components/ToDoListes'
function App() {
  return (
    <Provider store={ToDoListStore}>
       <div className="App">
        <Header branding="ToDoList"/>
        <div className="container">
          <h2 className="display-4 mb-2 text-center">
            <span className="text-warning">To do Listes</span>
          </h2>
          <p className="text-center">You can write your to do list</p>
          <AddToDoList/>
          <ToDoListes/>
        </div>
      </div>
    </Provider>
    
  );
}

export default App;