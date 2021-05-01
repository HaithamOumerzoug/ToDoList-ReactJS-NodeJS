import React, { Component } from 'react';
import ToDoList from './ToDoList';
import {connect} from 'react-redux';
import {getListes} from '../actions/ToDoListeAction';

class ToDoListes extends Component {
    componentDidMount(){
        this.props.getListes();
    }

    render() {
        const { listes } = this.props;
        return (
            <React.Fragment>
                <div className="container">
                    {listes.map(list => (
                        <div className="col-md-12">
                            <ToDoList key={list._id} list={list} />
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
      listes : state.data.listes
    }
  }
export default connect(mapStateToProps,{getListes})(ToDoListes)