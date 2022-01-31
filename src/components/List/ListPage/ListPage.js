import React, {useState} from 'react';
import './ListPage.css'
import {useSelector} from "react-redux";
import ListFooter from "../listFooter/listFooter";
import {Button} from "react-bootstrap";
import {increment, decrement, addList, deleteList} from "../../../redux/shoplist/shoplistSlice";
import {useDispatch} from "react-redux";

function ListPage() {
    let listsArr = useSelector((state => state.shoplist.lists))
    let lists = useSelector((state => state.shoplist.listNames))
    const [listName, setListName] = useState("");
    const dispatch = useDispatch();

    function addToList() {
        dispatch(increment())
        dispatch(addList(listName))
    }

    function deleteLists(index) {
        dispatch(deleteList(index))
        dispatch(decrement())
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col inp-list-page">
                    <input value={listName} onChange={(e) => setListName(e.target.value)}/>
                    <Button className="btn-list-page" onClick={addToList}>Add</Button>
                </div>
            </div>
            <div id="lists">
                {lists.map((listName, value) =>
                    <div key={value} className="row">
                        <div className="list-card-title">
                            <Button id="btn-dlt-list" onClick={() => deleteLists(value)}>X</Button>
                            {listName}</div>
                        <div className="list-card">
                            {listsArr[value]}
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