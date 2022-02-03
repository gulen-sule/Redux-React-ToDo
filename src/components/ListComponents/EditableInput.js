import React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import * as actions from '../../actions/index'

function EditableInput(props) {
    const dispatch = useDispatch();
    const [item, setItem] = useState(props.item);
    const [editable, setEditable] = useState(false);

    function setEdited() {
        switch (props.type) {
            case "LIST_NAME":
                setEditable(!editable)
                dispatch(actions.edit_list_name(props.id, item))
                break
            case "TODO":
                setEditable(!editable)
                dispatch(actions.edit_todo(props.id, props.index, item))
                break
            default:
        }
        setEditable(false)
    }

    function editItem() {
        return (
            <span>
                <input type='text' value={item}
                       onChange={(e) => setItem(e.target.value)} className="input-box"/>
                    <button type="button"
                            onClick={() => setEdited()}>Save Changes</button>
                    <button type="button"
                            onClick={() => setEditable(false)}>x</button>
            </span>)
    }

    return (
        <>
            {!editable ?
                (<span onDoubleClick={() => {
                    setEditable(true)
                }} id="item"> {props.item}</span>) :
                (editItem())}
        </>
    );
}

export default EditableInput;