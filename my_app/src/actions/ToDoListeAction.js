export const getListes=()=>dispatch=>{

    fetch('/alllists').then(res =>res.json())
        .then(json => {
            dispatch({
                type:"GET_ALL_LISTS",
                data:json
        })
    })
}
export const addListe=(newListe)=>dispatch=>{
    const newListe_json = JSON.stringify(newListe)

    fetch('/addlist',{
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
export const onChangeCheck=(id,done)=>dispatch=>{

    fetch(`/changecheck/${id}`,{
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
export const updateList=(list)=>dispatch=>{
    const newListe_json = JSON.stringify(list)
    const id = list._id;
    fetch(`/${id}`,{
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
export const deletelist=(id)=>dispatch=>{
    fetch(`/${id}`,{
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