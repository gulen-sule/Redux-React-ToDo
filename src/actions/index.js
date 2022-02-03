import * as types from '../constants/actionTypes'

export const add_list = (name) => ({type: types.ADD_LIST, payload: {name: name}})
export const delete_list = (index) => ({type: types.DELETE_LIST, payload: {index: index}})
export const add_todo = (id, text) => ({type: types.ADD_TODO, payload: {text: text, id: id}})
export const delete_todo = (id, index) => ({type: types.DELETE_TODO, payload: {index: index, id: id}})
export const delete_todos = (id, elements) => ({type: types.DELETE_TODOS, payload: {id: id, elements: elements}})
export const edit_todo = (id, index, item) => ({type: types.EDIT_TODO, payload: {id: id, index:index , item:item}})
export const edit_list_name = (id,  item) => ({type: types.EDIT_LIST_NAME, payload: {id: id,  item:item}})
