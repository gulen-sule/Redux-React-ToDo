import React from 'react';
import List from "../List";
import './ListPage.css'
import ListFooter from "../listFooter/listFooter";
function ListPage(props) {
    return (
        <div>
            <div className="justify-content-center  card">
                    <List/>
            </div>
            <ListFooter/>
        </div>
    )
        ;
}

export default ListPage;