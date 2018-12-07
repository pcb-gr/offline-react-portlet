import {CREATE_ROW, DELETE_ROW, INPUT_CHANGE} from '../actions/gridAction'

export default (state = 0, action) => {
    var rows =  cloneState(state.rows);
    switch (action.type) {
        case CREATE_ROW:
            rows[action.rowId] = { name: `Row name: ${action.rowId}`}
            return {rows}
        case DELETE_ROW:
            delete rows[action.rowId]
            return {rows}
        case INPUT_CHANGE:
            rows[action.rowId].name = action.valueChange;
            return {rows}
        default:
            return state
    }
}

const cloneState = (state) => {
	return Object.assign({}, state);
}