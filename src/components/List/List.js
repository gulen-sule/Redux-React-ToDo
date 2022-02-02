import {useState} from "react";
import {ListItem} from "./ListItem";
import './List.css'
import * as actions from '../../actions/index'
import {useDispatch, useSelector} from "react-redux";

function List(props) {
    const items = useSelector((state =>  state.listReducer.lists[props.id].elements));
    const [editItems, setEditItems] = useState([]);
    const [addedItem, setAddedItem] = useState("");
    const [editable, setEditable] = useState([false, false]);
    const [hasChosen, setHasChosen] = useState(false);
    const [isChecked, setIsChecked] = useState([]);
    const [chosenIndexes, setChosenIndexes] = useState([]);
    const dispatch = useDispatch();

    const deleteMultiple = () => {
        const temp = []
        for (let i = 0; i < items.length; i++) {
            if (!chosenIndexes.includes(i))
                temp.push(items[i])
        }
        dispatch(actions.delete_todos(props.id,temp))
        for(let i=0;i<isChecked.length;i++)
            isChecked[i]=false
        setIsChecked([...isChecked])
        setChosenIndexes([])
        setHasChosen(false)
    }

    function editList(event, index) {
        editItems[index] = event.target.value
        setEditItems([...editItems])
    }


    function setOpp(index) {
        editable[index] = !editable[index]
        setEditable([...editable])
        setEditItems([...items])
       // dispatch(actions.edit_todo(props.id,editItems))
    }
    function setEdited(index) {
        editable[index] = !editable[index]
        setEditable([...editable])
        dispatch(actions.edit_todo(props.id,editItems))
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

    function editItem(index) {
        return (
            <div className="row">
                <div className="col-11">
                    <input type='text' value={editItems[index]}
                           onChange={(e) => editList(e, index)} className="input-box"/>
                </div>
                <div className="col-1">
                    <button className="btn-edit" type="button"
                            onClick={() => setEdited(index)}>+
                    </button>
                </div>
            </div>)

    }

    function listItem(index) {
        return (
            <>
                <div className="col-1">
                    <input type="checkbox" name={index}  checked={isChecked[index]}
                           onChange={()=>(isChecked[index]=!isChecked[index])}
                           onClick={(e) => checked(index)}/>
                </div>
                <div className="col-9">

                    <ListItem item={items[index]}/>
                </div>
                <div className="col-1">
                    <button className="btn_edit" type="button"
                            onClick={() => setOpp(index)}>E
                    </button>
                </div>
                <div className="col-1">
                    <button className="btn_remove" type="button"
                            onClick={() => dispatch(actions.delete_todo(props.id,index))}>x
                    </button>
                </div>
            </>
        )
    }


    return (
        <div className="container ">
            <div className="row">
                <div className="container">
                    <div className="row" id="input-list">

                        <input type="text" id="to-do-input" className="input-box" value={addedItem}
                               onChange={(e) => setAddedItem(e.target.value)}/>

                        {hasChosen ?
                            <button className="btn-add" id="btn-b" type="button"
                                    onClick={deleteMultiple}>Delete</button> :
                            <button className="btn-add" id="btn-a"
                                    onClick={() => {
                                        dispatch(actions.add_todo(props.id, addedItem))
                                        setAddedItem("")
                                        setIsChecked([...isChecked,false])
                                    }}>Add</button>}
                    </div>
                </div>
            </div>

            <div className="row">
                <ul>
                    {items.map((d, index) =>
                        <div className="col-12" key={index}>
                            <li className="row row_list">
                                {!editable[index] ?
                                    (listItem(index)) :
                                    (editItem(index))}
                            </li>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default List;