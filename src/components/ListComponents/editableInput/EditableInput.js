import React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import * as actions from '../../../actions'
import './EditableInput.css'

function EditableInput(props) {
    const dispatch = useDispatch();
    const [item, setItem] = useState(props.item);
    const [editable, setEditable] = useState(false);
    const ref = React.createRef()

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

    function givenInput(e) {
        setItem(e.currentTarget.textContent)
    }

    function keyPressed(e) {
        if (e.key === "Enter") {
            e.preventDefault()
            ref.current.blur()
        }
    }

    /*
        function editItem() {
            return (
                <>
                    <input type='text' value={item}
                           onChange={(e) => setItem(e.target.value)} className="input-box"/>
                    <button type="button" className={"editable_button"}
                            onClick={() => setEdited()}>Save Changes
                    </button>
                    <button type="button" className={"editable_button"}
                            onClick={() => setEditable(false)}>x
                    </button>
                </>)
        }*/

    return (
        <>
            <div contentEditable={true} suppressContentEditableWarning={true}
                 ref={ref}
                 onBlur={() => setEdited()} onInput={(event) => {
                givenInput(event)
            }}
                 onKeyDown={(event) => keyPressed(event)}
                /*onDoubleClick={() => {
                setEditable(true)
            }}*/ id="editable_input"> {props.item}</div>
        </>
    );
}

export default EditableInput;