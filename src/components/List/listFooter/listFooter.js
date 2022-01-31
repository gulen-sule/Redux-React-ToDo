import React from 'react';
import {useSelector} from "react-redux";
import './listFooter.css'
function ListFooter(props) {
    let listNum = useSelector((state => state.shoplist.listNum));
    return (
        <div className="list-footer">
            <p>{listNum} tane listeniz bulunmakta</p>
        </div>
    );
}

export default ListFooter;