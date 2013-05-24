exports.register = function (plugin, options, next) {

    plugin.route({
        method: 'GET',
        path: '/hapi/plugin/test',
        handler: function () {

            this.reply('hapi-plugin-test');
        }
    });

    plugin.api('path', plugin.path);

    next();
};



