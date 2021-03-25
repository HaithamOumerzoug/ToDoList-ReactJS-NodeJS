import React from 'react'
import {Modal,Button} from 'react-bootstrap';
import InputToDoList from '../layout/InputToDoList'
import Textarea from '../layout/Textarea'

export default function ModalEdit(props) {
    const {title,description}=props.list;
    const {errors}=props.state;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.Submit}>
            <InputToDoList
                type="text"
                label="Title"
                name="localtitle"
                placeholder="Enter Title"
                onChange={props.onChange}
                value={title}
                error={errors.title}
            />
            <Textarea
                label="Description"
                name="localdescription"
                placeholder="Enter Description"
                value={description}
                onChange={props.onChange}
                error={errors.description}
            />
            <button className="btn btn-info mr-3" type="submit" onClick={props.onHide} >Save</button>
            <Button variant="danger" onClick={props.onHide}>Close</Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    );
}
