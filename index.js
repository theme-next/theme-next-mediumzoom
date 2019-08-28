/* global hexo */

'use strict';

const utils = require('./utils');
const fullImage = require('./lib/full-image');

hexo.extend.tag.register('fullimage', fullImage, {ends: false});
hexo.extend.tag.register('fi', fullImage, {ends: false});
