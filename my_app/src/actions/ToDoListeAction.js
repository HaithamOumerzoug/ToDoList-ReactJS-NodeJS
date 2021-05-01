/*
 *Get all ToDo lists
 */
export const getListes=()=>dispatch=>{

    fetch('/api/alllists').then(res =>res.json())
        .then(json => {
            dispatch({
                type:"GET_ALL_LISTS",
                data:json
        })
    })
}
/*
 *Add ToDo List
 */
export const addListe=(newListe)=>dispatch=>{
    const newListe_json = JSON.stringify(newListe)

    fetch('/api/addlist',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:newListe_json   
    }).then(res=>res.json())
        .then(json => {
            if(json===undefined){return null}
            dispatch({
                type:"ADD_LIST",
                data:json
            })
        })
}

/*
 *Make the list done
 */
export const onChangeCheck=(id)=>dispatch=>{

    fetch(`/api/changecheck/${id}`,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        }, 
    }).then(res=>res.json())
        .then(json => {
            dispatch({
                type:"CHANGE_CHECK",
                data:json
            })
        })
}

/*
 * Update ToDo list
 */
export const updateList=(list)=>dispatch=>{
    const newListe_json = JSON.stringify(list)
    const id = list._id;
    fetch(`/api/${id}`,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body:newListe_json
    }).then(res=>res.json())
        .then(json => {
            dispatch({
                type:"UPDATE_LIST",
                data:json
            })
        })
}

/*
 *Delete ToDo list by ID
 */
export const deletelist=(id)=>dispatch=>{
    fetch(`/api/${id}`,{
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }, 
    }).then(res=>res.json())
        .then(json => {
            dispatch({
                type:"DELETE_LIST",
                data:id
            })
        })
}