import React, {useState} from 'react';
import './ListPage.css'
import {useSelector} from "react-redux";
import ListFooter from "../listFooter/listFooter";
import {Button, Modal} from "react-bootstrap";
import * as actions from '../../../actions/index'
import {useDispatch} from "react-redux";
import List from "../List/List";
import * as editable_types from '../../../constants/editableTypes'
import EditableInput from "../editableInput/EditableInput";

function ListPage() {
    const lists = useSelector((state => state.listReducer.lists))
    const [listName, setListName] = useState("");
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [index_delete, setIndex_delete] = useState(0);

    function addItem() {
        dispatch(actions.add_list(listName))
        setListName("")
    }

    function keyPressed(e) {
        if (e.key === "Enter")
            addItem()
    }

    const handleClose = () => setShow(false);

    function ModalDelete() {
        return (<Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <p>{"Are you sure to delete the list"}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={() => {
                    console.log(index_delete, "noo")
                    dispatch(actions.delete_list(index_delete))
                    setShow(false)
                }} variant="secondary">Yes</Button>
                <Button onClick={() => {
                    setShow(false)
                }} variant="primary">No</Button>
            </Modal.Footer>
        </Modal>)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col inp-list-page">
                    <input onKeyPress={(e) => keyPressed(e)} value={listName}
                           placeholder={"Enter text"} onChange={(e) => setListName(e.target.value)}/>
                    <Button className="btn-list-page"
                            onClick={() => {
                                addItem()
                            }}>Add</Button>
                </div>
            </div>
            <div id="lists">
                {ModalDelete()}
                {lists.map((list, index) =>
                    <div key={index} className="row">
                        <div className="list-card-title row">
                            <Button id="btn-dlt-list" className="col-2" onClick={() => {
                                setShow(true)
                                setIndex_delete(index)
                            }}>X</Button>
                            <div className="col-8 editable_style">
                                <EditableInput item={list.list_name} id={index} type={editable_types.LIST}/>
                            </div>

                        </div>
                        <div className="list-card">
                            <List id={index}/>
                        </div>
                    </div>
                )}
            </div>
            <ListFooter/>
        </div>
    )
        ;
}

export default ListPage;