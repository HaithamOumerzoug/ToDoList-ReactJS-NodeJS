import React from 'react'
import {Button} from 'react-bootstrap';
import ModalEdit from './layout/ModalEdit'


const  ModalApp=(props)=>{
    const [modalShow, setModalShow] = React.useState(false);
    const {} = props;
    return (
        <div>
            <Button variant="warning" className="float-right" onClick={() => setModalShow(true)}>
            Edit this List
            </Button>

            <ModalEdit
                list={props.list}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default ModalApp;