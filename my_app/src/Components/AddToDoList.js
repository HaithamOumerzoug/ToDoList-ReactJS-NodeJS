import React, { Component } from 'react'
import InputToDoList from './InputToDoList'
import {connect} from 'react-redux'
import {addListe} from '../actions/ToDoListeAction'

class AddToDoList extends Component {
    state={
        title:'',
        description:'',
        done:false,
        errors:{
            title:'',
            description:'',
          },
        show:false,
    };
    show_hide=()=>{
        this.setState({
            show:!this.state.show
        });
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value });//e.target.name<=>title ou description
    onSubmit=(e)=>{
        e.preventDefault();
        const { title, description,done} = this.state;
        if(title===''){
            this.setState({
                errors:{title:"Title is required!"}
            })
        }
        const newListe={
            title,
            description,
            done
        }
        console.log(newListe)
        this.props.addListe(newListe);
        this.setState({
            title:'',
            description:'',
            done:false,
            error:{},
            show:false,
        })
        
    }
    render() {
        const { title, description,done, errors } = this.state;
        return (
            <div className="card mb-3">
                {/* <h4>
                    <i className="fas fa-plus" 
                        onClick={this.show_hide}
                        style={{
                            cursor: 'pointer',
                            float: 'right',
                            color: 'blue',
                    }}></i>
                </h4> */}
                
                {(this.state.show==true ? 
                    <div>
                        <form onSubmit={this.onSubmit}>
                            <InputToDoList
                                label="Title"
                                name="title"
                                placeholder="Enter Title"
                                onChange={this.onChange}
                                value={title}
                                contentEditable="true"
                                error={errors.title}
                            />
                            <InputToDoList
                                label="Description"
                                name="description"
                                contentEditable="true"
                                placeholder="Enter Description"
                                value={description}
                                onChange={this.onChange}
                                //error={errors.description}
                            />
                            <button type="submit" className="btn btn-success ml-5 float-left">Add</button>
                        </form>
                        <button className="btn btn-danger float-right mr-5" onClick={this.show_hide}>Cancel</button>
                    </div>
                    
                :<input type="button" onClick={this.show_hide} value="Add more liste"/>)}
        </div>

        )
    }
}

export default connect(null,{addListe})(AddToDoList);