import React, { Component } from 'react';
import InputToDoList from './layout/InputToDoList';
import {connect} from 'react-redux';
import {addListe} from '../actions/ToDoListeAction';
import Textarea from './layout/Textarea';

class AddToDoList extends Component {
    state={
        title:'',
        description:'',
        done:false,
        errors:{
          },
        show:false,
    };
    show_hide=()=>{
        this.setState({
            show:!this.state.show
        });
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value });//e.target.name<=>title or description
    onSubmit=(e)=>{
        e.preventDefault();
        const { title, description,done} = this.state;
        if(title===""){
            this.setState({
                errors:{title:"Title is required!"}
            })
            return
        }
        if(description===""){
            this.setState({
                errors:{description:"Desciption is required!"}
            })
            return
        }
        const newListe={
            title,
            description,
            done
        }
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
        const { title, description, errors } = this.state;
        return (
            <div className="container mb-3">
                {(this.state.show === true ? 
                    <div className="card mb-3">
                        <div className="col-sm-12 my-3">
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
                                <Textarea
                                    label="Description"
                                    name="description"
                                    placeholder="Enter Description"
                                    value={description}
                                    onChange={this.onChange}
                                    error={errors.description}
                                />
                                <button type="submit" className="btn btn-success float-right">Add</button>
                            </form>
                            <button className="btn btn-warning float-right mr-3" onClick={this.show_hide}>Cancel</button>
                        </div>
                    </div>
                : <div className="d-flex justify-content-end">
                    <input type="button" onClick={this.show_hide} className="btn btn-primary " value="Add more list"/>
                </div>)}
        </div>

        )
    }
}

export default connect(null,{addListe})(AddToDoList);