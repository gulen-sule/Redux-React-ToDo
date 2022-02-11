import React from 'react';
import {useSelector} from "react-redux";
import './listFooter.css'
function ListFooter(props) {
    let listNum = useSelector(( state => state.listReducer.listNum ));
    return (
        <div className="list-footer">
            <p>{(listNum<=1)? `You have got ${listNum} list` :`You have got ${listNum} lists`} </p>
        </div>
    );
}

export default ListFooter;