'use strict';

var page = require('page');
var groupRouter = require('./routers/group-router.jsx');

require('../less/group.less');


page.base('/group');

page('/', groupRouter.render);

page('/:groupId', function(ctx, next) {
  page('/' + ctx.params.groupId + '/index');
});

page('/:groupId/:action', groupRouter.render);

page();


