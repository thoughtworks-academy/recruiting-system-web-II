'use strict';

var Reflux = require('reflux');

var GroupActions = Reflux.createActions([
    'loadIndex',
    'loadGroup',
    'createGroup',
    'submitInfo',
    'createPaper',
    'setPaperId',
    'loadSection',
    'addPaper'
]);

module.exports = GroupActions;