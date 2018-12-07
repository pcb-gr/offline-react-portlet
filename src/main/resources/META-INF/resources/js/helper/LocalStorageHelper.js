var LOCAL_STORAGE_KEY = 'PORTLET_OFFLINE';
var DEFAULT_STORE_KEY = 'DEFAULT_STORE_KEY';

var portletLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
var localStorageDataKey = DEFAULT_STORE_KEY;

if (portletLocalStorage == null) {
    portletLocalStorage = {};
} else {
    portletLocalStorage = JSON.parse(portletLocalStorage);
}

function flushToLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(portletLocalStorage));
}

export default {
    register: (storeKey) => {
        localStorageDataKey = storeKey;
        common.saveData({});
        return common;
    },
    getDefaultStore: () => {
        return common;
    }
}

var common = {
    saveData: (data) => {
        portletLocalStorage[localStorageDataKey] = data;
        flushToLocalStorage();
    }
}


