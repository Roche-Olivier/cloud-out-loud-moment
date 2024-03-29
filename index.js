const moment = require('moment');

exports._moment = {
    now: function() {
        var now = new moment(new Date).format("YYYY-MM-DD HH:mm:ss")
        return now
    },
    utc_now: function() {
        var current_formatted_time = moment.utc(new Date()).utcOffset(120).format("YYYY-MM-DD HH:mm:ss")
        return current_formatted_time
    },
    formatted: function(date_time) {
        var current_formatted_time = moment(date_time).format("YYYY-MM-DD HH:mm:ss")
        return current_formatted_time
    },
    utc_formatted: function(date_time) {
        var current_formatted_time = moment.utc(date_time).utcOffset(120).format("YYYY-MM-DD HH:mm:ss")
        return current_formatted_time
    },
    file_formatted: function(date_time) {
        var current_formatted_time = moment(new Date()).format("YYYYMMDDHHmmssSSSS")
        return current_formatted_time
    }
}