import React, { Component } from 'react'
import {connect} from 'react-redux'
import {onChangeCheck,deletelist} from '../actions/ToDoListeAction'
import {updateList} from '../actions/ToDoListeAction'
import ModalApp from './ModalApp'

class ToDoList extends Component {
  
  state={
    _id:'',
    localtitle:'',
    localdescription:'',
    errors:{
    },
    switch:false
  }
  vide_errros=()=>{
    this.setState({
      errors:{}
    })
  }
  changeSwitch=(_id,title,description)=>{
    this.setState({
      _id,
      localtitle:title,
      localdescription:description,
    })
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit=(e)=>{
    e.preventDefault();
    const {_id, localtitle, localdescription} = this.state;
    if(localtitle===""){
      this.setState({
          errors:{title:"Title is required!"}
      })
      
      return
    }
    if(localdescription===""){
        this.setState({
            errors:{description:"Desciption is required!"}
        })
        return
    }
    const newListe={
        _id,
        title:localtitle,
        description:localdescription,
    }
    this.props.updateList(newListe)
    this.vide_errros()
    
  }

  render() {
    const {_id,title,description,done}=this.props.list;

    return (
        <div class="container">
          <div class="card mb-3">
            <h5 class="card-header">{title}</h5>
            <div class="card-body">
              <p class="card-text">{description}</p>
              <div className="d-flex mb-3">
                <input type="checkbox" className="float-left ml-2" style={{cursor:'pointer'}} defaultChecked={done} onChange={this.props.onChangeCheck.bind(this,_id)} name="done" id=""/>
              </div>
              <button className="btn btn-danger float-left" onClick={this.props.deletelist.bind(this,_id)}>Delete this List</button>
              <ModalApp 
                Switch={this.changeSwitch.bind(this,_id,title,description)} 
                list={this.props.list} state={this.state} 
                onSubmit={this.onSubmit} 
                onChange={this.onChange}
                />
            </div>
          </div> 
        </div>
      )
  }  
}

export default connect(null,{onChangeCheck,deletelist,updateList})(ToDoList);