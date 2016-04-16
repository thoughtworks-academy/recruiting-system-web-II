'use strict';

var Reflux = require('reflux');

var GroupActions = Reflux.createActions([
    'loadIndex',
    'loadGroup',
    'createGroup',
    'submitInfo'
]);

module.exports = GroupActions;