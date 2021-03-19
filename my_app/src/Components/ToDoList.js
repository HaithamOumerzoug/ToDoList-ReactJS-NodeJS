import React, { Component } from 'react'
import {connect} from 'react-redux'
import {onChangeCheck,deletelist} from '../actions/ToDoListeAction'
import InputToDoList from './InputToDoList'
import {updateList} from '../actions/ToDoListeAction'

class ToDoList extends Component {
  
  state={
    _id:'',
    localtitle:'',
    localdescription:'',
    errors:{
      title:'',
      description:'',
    },
    switch:true
  }
  show_hide=()=>{
    this.setState({
      switch:!this.state.switch
    })
  }
  changeSwitch=(_id,title,description)=>{
    this.setState({
      _id,
      localtitle:title,
      localdescription:description,
    })
    this.show_hide
()
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit=(e)=>{
    e.preventDefault();
    const {_id, localtitle, localdescription} = this.state;
    if(this.props.title===''){
        this.setState({
            errors:{title:"Title is required!"}
        })
    }
    const newListe={
        _id,
        title:localtitle,
        description:localdescription,
    }
    this.props.updateList(newListe)
    this.show_hide
()
  }
    render() {
        const {_id,title,description,done}=this.props.list;
        const {localtitle,localdescription,errors}=this.state;
        return (
            <div class="card text-left mb-4">
              <div class="card-body">
                
                {this.state.switch? 
                  (<div>
                    <h4 class="card-title" contentEditable={!this.state.switch}>{title}</h4>
                    <p class="card-text" contentEditable={!this.state.switch}>{description}</p>
                    <div className="d-flex mb-3 ">
                      <input type="checkbox" className="float-left" style={{cursor:'pointer'}} defaultChecked={done} onChange={this.props.onChangeCheck.bind(this,_id)} name="done" id=""/>
                    </div>
                    <button className="btn btn-danger float-left" onClick={this.props.deletelist.bind(this,_id)}>Delete this List</button>
                    <button className="btn btn-warning float-right" onClick={this.changeSwitch.bind(this,_id,title,description)}>Update this List</button>
                  </div>
                  
                  ) :  
                  (<div>
                    <form onSubmit={this.onSubmit}>
                        <InputToDoList
                            label="Title"
                            name="localtitle"
                            placeholder="Enter Title"
                            onChange={this.onChange}
                            value={localtitle}
                            contentEditable="true"
                            error={errors.title}
                        />
                        <InputToDoList
                            label="Description"
                            name="localdescription"
                            contentEditable="true"
                            placeholder="Enter Description"
                            value={localdescription}
                            onChange={this.onChange}
                            error={errors.description}
                        />
                        <button className="btn btn-info float-right" type="submit" >Save</button>
                    </form>
                    <button className="btn btn-danger float-right mr-3" onClick={this.show_hide}>Cancel</button>
                  </div>
                    
                  )
                }
              </div>
            </div>
        )
    }
}

export default connect(null,{onChangeCheck,deletelist,updateList})(ToDoList);