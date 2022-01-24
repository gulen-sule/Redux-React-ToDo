import PropTypes from "prop-types"

export function ListItem({item}){
    return(
        <div id="item"> {item}</div>
    )
}

ListItem.propTypes={
    item:PropTypes.string
}
