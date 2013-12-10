exports.register = function (plugin, options, next) {

    plugin.route({
        method: 'GET',
        path: '/hapi/plugin/test',
        handler: function (request, reply) {

            reply('hapi-plugin-test');
        }
    });

    plugin.expose('path', plugin.path);

    next();
};



