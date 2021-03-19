import {createStore,applyMiddleware,compose} from 'redux';
import rootReducers from './Reducers';
import thunk from 'redux-thunk';

const initState={};
const TodoListStore = createStore(rootReducers,initState, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
export default TodoListStore;