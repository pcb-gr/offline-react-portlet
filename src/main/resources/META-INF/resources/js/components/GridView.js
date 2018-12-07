import React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/gridAction'
import Offline from '../components/Offline'

export class GridView extends Component {

    handleCreateRowClick(){
        const {createRow} = this.props
        createRow()
    }

    handleDeleteRowClick(rowId) {
        const {deleteRow} = this.props
        deleteRow(rowId)
    }

    handleInputChange(rowId, valueChange) {
        const {inputChange} = this.props
        inputChange(rowId, valueChange)
    }

    renderRows(){
        var trRows = []
        Object.keys(this.props.rows).map((rowKey, index) => {
            return (
                trRows.push(
                    <tr key={rowKey}>
                        <td>{index}</td>
                        <td><input onChange={(input) => this.handleInputChange(rowKey, input.target.value)} className='form-control form-control-sm' value={this.props.rows[rowKey].name}/></td>
                        <td><button className={'btn btn-default'} type="button" onClick={() => this.handleDeleteRowClick(rowKey)}>Delete</button></td>
                    </tr>
                )
            )

        })
        return trRows;
    }

    render() {
        return (
            <table  className={'table'} style={{width: '100%'}}>
                <tbody>
                <tr>
                    <td colSpan={2}><Offline parentProps={this.props}/></td>
                    <td style={{textAlign: 'right'}}>
                        <button className={'btn btn-default'}  type="button" onClick={() => this.handleCreateRowClick()}>New Row</button>
                    </td>
                </tr>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Delete Row</th>
                </tr>
                {this.renderRows()}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, actions)(GridView)
