import {useState} from "react";
import {ListItem} from "./ListItem";
import './List.css'

function List() {
    const [addedItem, setAddedItem] = useState("");
    const [items, setItems] = useState(["temizlik", "ödev"]);
    const [editable, setEditable] = useState([false, false]);
    const [hasChosen, setHasChosen] = useState(false);
    const [chosenIndexes, setChosenIndexes] = useState([]);


    const handleClick = () => {
        if (addedItem !== "")
            setItems([...items, addedItem])
    }

    const deleteMultiple = () => {
        console.log(hasChosen)
        const temp = []
        for (let i = 0; i < items.length; i++) {
            if (!chosenIndexes.includes(i))
                temp.push(items[i])
        }
        setChosenIndexes([])
        setItems([...temp])
        setHasChosen(false)
    }

    function editList(event, index) {
        items[index] = event.target.value
        console.log("here")
        setItems([...items])
    }

    function removeItem(index) {
        items.splice(index, 1)
        setItems([...items])
    }

    function setOpp(index) {
        editable[index] = !editable[index]
        setEditable([...editable])
    }

    function checked(index) {
        for (let a in chosenIndexes)
            console.log(a)

        console.log("break", index)

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
                    <input type='text' value={items[index]}
                           onChange={(e) => editList(e, index)} className="input-box"/>
                </div>
                <div className="col-1">
                    <button className="btn-edit" type="button"
                            onClick={() => setOpp(index)}>+
                    </button>
                </div>
            </div>)

    }

    function listItem(index) {
        return (
            <>
                <div className="col-1">
                    <input type="checkbox" name={index} onClick={(e) => checked(index)}/>
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
                            onClick={() => removeItem(index)}>x
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

                        <input type="text" id="to-do-input" className="input-box"
                               onChange={(e) => setAddedItem(e.target.value)}/>

                        {hasChosen ?
                            <button className="btn-add" type="button" onClick={deleteMultiple}>Delete</button> :
                            <button className="btn-add" id="btn-a" onClick={(event) => handleClick(event)}>Add</button>}
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