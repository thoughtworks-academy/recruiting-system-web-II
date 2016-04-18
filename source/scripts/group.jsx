'use strict';

var page = require('page');
var groupRouter = require('./routers/group-router.jsx');

require('../less/group.less');


page.base('/group');

page('/', groupRouter.render);

page('/:groupHash', function (ctx, next) {

  page('/' + ctx.params.groupHash + '/index');
});

page('/:groupHash/:action', function (ctx, next) {
  groupRouter.render(ctx.params, next);
});

page();


