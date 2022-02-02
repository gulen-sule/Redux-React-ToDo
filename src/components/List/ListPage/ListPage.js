import React, {useState} from 'react';
import './ListPage.css'
import {useSelector} from "react-redux";
import ListFooter from "../listFooter/listFooter";
import {Button} from "react-bootstrap";
import * as actions from '../../../actions/index'
import {useDispatch} from "react-redux";
import List from "../List";

function ListPage() {
    const lists = useSelector((state => state.listReducer.lists))
    const [listName, setListName] = useState("");
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="row">
                <div className="col inp-list-page">
                    <input value={listName} onChange={(e) => setListName(e.target.value)}/>
                    <Button className="btn-list-page" onClick={()=> {
                        dispatch(actions.add_list(listName))
                        setListName("")
                    }}>Add</Button>
                </div>
            </div>
            <div id="lists">
                {lists.map((list, value) =>
                    <div key={value} className="row">
                        <div className="list-card-title">
                            <Button id="btn-dlt-list" onClick={() => dispatch(actions.delete_list(value))}>X</Button>
                            {list.list_name}</div>
                        <div className="list-card">
                            <List id={value}/>
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