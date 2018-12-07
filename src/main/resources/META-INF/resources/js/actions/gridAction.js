export const CREATE_ROW = 'CREATE_ROW'
export const DELETE_ROW = 'DELETE_ROW'
export const INPUT_CHANGE = 'INPUT_CHANGE'

let rowId = 1
export const createRow = () => ({
  type: CREATE_ROW,
  rowId: `${rowId++}`
})

export const deleteRow = (rowId) => ({
    type: DELETE_ROW,
    rowId: rowId
})

export const inputChange = (rowId, valueChange) => ({
    type: INPUT_CHANGE,
    rowId: rowId,
    valueChange: valueChange
})

