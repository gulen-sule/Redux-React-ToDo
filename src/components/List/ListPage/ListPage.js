import React, {useState} from 'react';
import List from "../List";
import './ListPage.css'
import ListFooter from "../listFooter/listFooter";
import {Button} from "react-bootstrap";
import {increment, decrement, decrementAmount} from "../../../redux/shoplist/shoplistSlice";
import {useDispatch} from "react-redux";

function ListPage(props) {
    const [lists, setLists] = useState([]);
    const [listsArr, setListsArr] = useState([]);
    const [listName, setListName] = useState("");
    const dispatch = useDispatch();

    function addList() {
        dispatch(increment())
        setLists([...lists,listName])
        setListsArr([...listsArr,<List/>])
    }
    function deleteLists(index){
        dispatch(decrement())
        lists.splice(index, 1)
        setLists([...lists])
        listsArr.splice(index, 1)
        setListsArr([...listsArr])
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col inp-list-page">
                    <input value={listName} onChange={(e) => setListName(e.target.value)}/>
                    <Button className="btn-list-page" onClick={addList}>Add</Button>
                </div>
            </div>
            <div id="lists">
                {lists.map((listName,value)=>
                    <div key={value} className="list-card row">
                        <div className="card-subtitle">
                            <Button id="btn-dlt-list" onClick={()=>deleteLists(value)}>X</Button>
                            {listName}</div>
                        {listsArr[value]}
                    </div>
                )}

            </div>
            <ListFooter/>
        </div>
    )
        ;
}

export default ListPage;