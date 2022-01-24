import React from 'react';
import {useSelector} from "react-redux";
function ListFooter(props) {
    const listNum=useSelector((state => state.shoplist.listNum))
    return (
        <div>
            <p>{listNum} tane listeniz bulunmakta</p>
        </div>
    );
}

export default ListFooter;