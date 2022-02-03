import *  as types from '../../constants/actionTypes'

const initialState = {
    listNum: 1,
    lists: [{list_name: "example", elements: []}]
};

export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_LIST:
            if (action.payload.name !== "") {
                const new_list = {list_name: action.payload.name, elements: []}
                return {listNum: state.listNum + 1, lists: [...state.lists, new_list]}
            }
            return {...state}

        case types.DELETE_LIST:
            const temp = [...state.lists]
            temp.splice(action.payload.index, 1)
            return {
                listNum: state.listNum - 1,
                lists: temp
            }

        case types.ADD_TODO:
            if (action.payload.text !== "") {
                const new_lists = [...state.lists]
                new_lists[action.payload.id].elements = [...new_lists[action.payload.id].elements, action.payload.text]
                return {listNum: state.listNum, lists: new_lists}
            }
            return {...state}

        case types.DELETE_TODO:
            const new_lists_del = [...state.lists]
            new_lists_del[action.payload.id].elements.splice(action.payload.index, 1)
            return {listNum: state.listNum, lists: new_lists_del}

        case types.DELETE_TODOS:
            const new_list_del = [...state.lists]
            new_list_del[action.payload.id].elements = [...action.payload.elements]
            return {listNum: state.listNum, lists: new_list_del}

        case types.EDIT_TODO:
            const edited_todo = [...state.lists]
            edited_todo[action.payload.id].elements[action.payload.index] = action.payload.item
            return {listNum: state.listNum, lists: edited_todo}

        case types.EDIT_LIST_NAME:
            const edited_list = [...state.lists]
            edited_list[action.payload.id].list_name = action.payload.item
            return {listNum: state.listNum, lists: edited_list}
        default:
            return state;
    }
}