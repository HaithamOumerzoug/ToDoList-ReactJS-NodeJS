import Header from './Components/layout/Header'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddToDoList from './Components/AddToDoList'
import {Provider} from 'react-redux'
import ToDoListStore from './ToDoListStore'
import ToDoListes from './Components/ToDoListes'
import Footer from './Components/layout/Footer'


function App() {
  
  return (
    <Provider store={ToDoListStore}>
       <div className="App">
        <Header branding="ToDoList"/>
        <div className="container">
          <h2 className="display-5 mb-2 text-center">
            <span className="text-danger">To do List</span>
          </h2>
          <p className="text-center font-italic">"You can write your to do list"</p>
          <AddToDoList/>
          <ToDoListes/>
        </div>
        <Footer branding="ToDoList"/>
      </div>
    </Provider> 
  );
}

export default App;
