import React from 'react'
import {Button} from 'react-bootstrap';
import ModalEdit from './layout/ModalEdit'


const  ModalApp=(props)=>{
    const [modalShow, setModalShow] = React.useState(false);
    const {} = props;
    const SwitchandShow=()=>{
        setModalShow(true);
        props.Switch();
    }
    return (
        <div>
            <Button variant="warning" className="float-right" onClick={SwitchandShow} >
                Edit this List
            </Button>

            <ModalEdit
                show={modalShow}
                onHide={() => setModalShow(false)}
                Submit={props.onSubmit}
                onChange={props.onChange}
                state={props.state}
            />
        </div>
    )
}

export default ModalApp;