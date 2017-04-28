require('bootstrap-growl-ifightcrime');
var alert = function (msg) {
    $.bootstrapGrowl(msg, {
        ele: 'body',
        type: 'info',
        offset: {from: 'top', amount: 20},
        align: 'left',
        width: 250,
        delay: 4000,
        allow_dismiss: true,
        stackup_spacing: 10
    });
};
module.exports = alert;
