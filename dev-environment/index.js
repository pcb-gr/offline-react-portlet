import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/gridReducer'

import state from './state/gridState'
import GridView from './components/GridView'

const store = createStore(reducer, state)

render(
    <Provider store={store}>
        <GridView/>
    </Provider>,
    document.getElementById('root')
)
