import React, {useState} from 'react';
import List from "../List";
import './ListPage.css'
import {useSelector} from "react-redux";
import ListFooter from "../listFooter/listFooter";
import {Button} from "react-bootstrap";
import {increment, decrement, addList, deleteList} from "../../../redux/shoplist/shoplistSlice";
import {useDispatch} from "react-redux";

function ListPage(props) {
    let listsArr=useSelector((state => state.shoplist.lists))
    let lists=useSelector((state => state.shoplist.listNames))
    const [listName, setListName] = useState("");
    const dispatch = useDispatch();

    function addtoList() {
        dispatch(increment())
        dispatch(addList(listName))
    }
    function deleteLists(index){
        dispatch(deleteList(index))
        dispatch(decrement())
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col inp-list-page">
                    <input value={listName} onChange={(e) => setListName(e.target.value)}/>
                    <Button className="btn-list-page" onClick={addtoList}>Add</Button>
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