const initState={
    listes:[],
};
const ToDoListReducer=(state=initState,action)=>{
    switch (action.type) {
        case "GET_ALL_LISTS":
            return({
                ...state,
                listes:action.data
            });
        case "ADD_LIST":
            return({
                ...state,
                listes:[action.data,...state.listes]
            });
        case "CHANGE_CHECK":
            return({
                ...state,
                listes:state.listes.map(list=>list._id===action.data._id ? list=action.data : list)
            });
        case "DELETE_LIST":
            return({
                ...state,
                listes:state.listes.filter(list=>list._id!==action.data)
            });
        case "UPDATE_LIST":
            return({
                ...state,
                listes:state.listes.map(list=>list._id===action.data._id ? list=action.data : list)
            });       
        default:
            return state;
    }
}
export default ToDoListReducer;