exports.register = function (plugin, options, next) {

    plugin.route({
        method: 'GET',
        path: '/hapi/plugin/test',
        handler: function () {

            this.reply('hapi-plugin-test');
        }
    });

    plugin.expose('path', plugin.path);

    next();
};



