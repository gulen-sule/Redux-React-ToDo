import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import * as actions from '../../../actions/index'
import * as modal_types from '../../../constants/moadlTypes'

function ModalDelete(props) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    function deleteItem(value) {
        switch (props.type) {
            case modal_types.LIST:
                dispatch(actions.delete_list(props.value))
                break
            case modal_types.ITEM:
            case modal_types.ITEMS:
            default:

        }
        setShow(false)
        dispatch(actions.delete_list(props.value))
    }


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <p>{props.text}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Yes</Button>
                <Button onClick={() => {
                    setShow(false)
                }} variant="primary">No</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDelete;