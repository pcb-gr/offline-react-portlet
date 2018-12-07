import $ from 'jquery'

export default {
    isOnline: (callback) => {
        ping(document.location.href, (isOnlineRs) => {
            callback(isOnlineRs)
        })
    }
}
export const ping = (url, callback) => {
    $.get(url, () => {
        callback(true)
    }).fail(() => {
        callback(false)
    });
}

