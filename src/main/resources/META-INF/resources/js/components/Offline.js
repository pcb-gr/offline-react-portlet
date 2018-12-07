import React from 'react'
import {Component} from 'react'
import OfflineHelper from '../helper/OfflineHelper'
import LocalStorageHelper from '../helper/LocalStorageHelper'

export default class Offline extends Component {

    constructor(props) {
        super(props);
        var self = this;
        self.state = {
            isOnlineRs: true
        }
        setInterval(() => {
            OfflineHelper.isOnline((isOnlineRs) => {
                self.state.isOnlineRs = isOnlineRs;
                LocalStorageHelper.getDefaultStore().saveData(self.props.parentProps.rows);
                self.forceUpdate()
            })
        }, 3000)
    }

    render() {
        if (this.state.isOnlineRs) {
            return (
                <div data-phase="0" className="offline-ui offline-ui-up">
                    <div className="offline-ui-content"></div>
                    <div style={{padding: '5px 15px'}}>Online mode</div>
                </div>
            )
        } else {
            return (
                <div className="offline-ui offline-ui-down offline-ui-connecting offline-ui-waiting">
                    <div className="offline-ui-content"></div>
                    <div style={{padding: '5px 15px'}}>You are on Offline mode - your data will be pushed when online</div>
                </div>
            )
        }

    }
}
