import React, {useState} from "react";
import * as editable_types from '../../../constants/editableTypes'
import './List.css'
import * as actions from '../../../actions'
import {useDispatch, useSelector} from "react-redux";
import EditableInput from "../editableInput/EditableInput";
import {Button, Modal} from "react-bootstrap";


function List(props) {
    const items = useSelector((state => state.listReducer.lists[props.id].elements));
    const [addedItem, setAddedItem] = useState("");
    const [hasChosen, setHasChosen] = useState(false);
    const [isChecked, setIsChecked] = useState([]);
    const [chosenIndexes, setChosenIndexes] = useState([]);
    const dispatch = useDispatch();
    const [showModalDeleteItem, setShowModalDeleteItem] = useState(false);
    const [showModalDeleteItems, setShowModalDeleteItems] = useState(false);
    const [indexDel, setIndexDel] = useState(0);
    const deleteMultiple = () => {
        const temp = []
        for (let i = 0; i < items.length; i++) {
            if (!chosenIndexes.includes(i))
                temp.push(items[i])
        }
        dispatch(actions.delete_todos(props.id, temp))
        for (let i = 0; i < isChecked.length; i++)
            isChecked[i] = false
        setIsChecked([...isChecked])
        setChosenIndexes([])
        setHasChosen(false)
    }
    const handleClose = () => setShowModalDeleteItem(false);
    function ModalDeleteItem() {
        return (<Modal show={showModalDeleteItem} onHide={handleClose}>
            <Modal.Body>
                <p>{"Are you sure to delete the item?"}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={()=> {
                    dispatch(actions.delete_todo(props.id, indexDel))
                    setShowModalDeleteItem(false)
                }} variant="secondary">Yes</Button>
                <Button onClick={() => {
                    setShowModalDeleteItem(false)
                }} variant="primary">No</Button>
            </Modal.Footer>
        </Modal>)
    }

    const handleCloseSec = () => setShowModalDeleteItems(false);
    function ModalDeleteItems() {
        return (<Modal show={showModalDeleteItems} onHide={handleCloseSec}>
            <Modal.Body>
                <p>{"Are you sure to delete the items?"}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={()=> {
                    deleteMultiple()
                    setShowModalDeleteItems(false)
                }} variant="secondary">Yes</Button>
                <Button onClick={() => {
                    setShowModalDeleteItems(false)
                }} variant="primary">No</Button>
            </Modal.Footer>
        </Modal>)
    }


    function checked(index) {
        for (let a in chosenIndexes)
            console.log(a)

        if (!chosenIndexes.includes(index, 0)) {
            setHasChosen(true)
            setChosenIndexes([...chosenIndexes, index])
            // console.log(chosenIndexes.length)
        } else {
            chosenIndexes.splice(chosenIndexes.indexOf(index), 1)
            if (chosenIndexes.length === 0) {
                setHasChosen(false)
            }
        }
    }

    function listItem(index) {
        return (
            <>
                <div className="col-1">
                    <input type="checkbox" name={index} checked={isChecked[index]}
                           onChange={() => (isChecked[index] = !isChecked[index])}
                           onClick={() => checked(index)}/>
                </div>
                <div className="col-9">
                    <EditableInput type={editable_types.TODO} id={props.id} index={index} item={items[index]}/>
                </div>
                <div className="col-1">

                    <button className="btn_remove" type="button"
                            onClick={() => {
                                setIndexDel(index)
                                setShowModalDeleteItem(true)
                            }}>x
                    </button>
                </div>
            </>
        )
    }


    function addItem() {
        dispatch(actions.add_todo(props.id, addedItem))
        setAddedItem("")
        setIsChecked([...isChecked, false])
    }


    function keyPressed(e) {
        if(e.key==="Enter")
        addItem()
    }

    return (
        <div className="container ">
            <div className="row">
                <div className="container">
                    <div className="row" id="input-list">
                        {ModalDeleteItems()}
                        {ModalDeleteItem()}
                        <input onKeyPress={(e) => keyPressed(e)} placeholder={"Enter text"} type="text" id="to-do-input"
                               className="input-box"
                               value={addedItem}
                               onChange={(e) => setAddedItem(e.target.value)}/>
                        {hasChosen ?
                            <button className="btn-add" id="btn-b" type="button"
                                    onClick={()=>setShowModalDeleteItems(true)}>Delete</button> :
                            <button className="btn-add" id="btn-a"
                                    onClick={() => addItem()}>Add</button>}
                    </div>
                </div>
            </div>

            <div className="row">
                <ul>
                    {items.map((d, index) =>
                        <div className="col-12" key={index}>
                            <li className="row row_list">
                                {listItem(index)}
                            </li>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default List;