import React from 'react'
import {Modal,Button} from 'react-bootstrap';
import InputToDoList from '../layout/InputToDoList'
import Textarea from '../layout/Textarea'

export default function ModalEdit(props) {
    const {localtitle,localdescription,errors}=props.state;
    
    const CheckandSave=(e)=>{
      props.Submit(e);
      props.onHide(); 
    }
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
          <form onSubmit={CheckandSave}>
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
            <Button variant="info" className="mr-3" type="submit">Save</Button>
            <Button variant="danger" onClick={props.onHide}>Close</Button>
          </form>
        </Modal.Body>
      </Modal>
    );
}
