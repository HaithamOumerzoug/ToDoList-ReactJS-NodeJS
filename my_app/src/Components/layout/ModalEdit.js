import React from 'react'
import {Modal,Button} from 'react-bootstrap';
import InputToDoList from '../layout/InputToDoList'
import Textarea from '../layout/Textarea'

export default function ModalEdit(props) {
    const {_id,title,description,done}=props.list;
    const {localtitle,localdescription,errors}=props.state;
    
    const CheckandSave=()=>Object.keys(errors).length==0? props.onHide() : null
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit list
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.onSubmit}>
            <InputToDoList
                type="text"
                label="Title"
                name="localtitle"
                placeholder="Enter Title"
                onChange={props.onChange}
                value={localtitle}
                error={errors.title}
            />
            <Textarea
                label="Description"
                name="localdescription"
                placeholder="Enter Description"
                value={localdescription}
                onChange={props.onChange}
                error={errors.description}
            />
            <button className="btn btn-info mr-3" type="submit" onClick={CheckandSave}>Save</button>
            <Button onClick={props.onHide}>Close</Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    );
}
