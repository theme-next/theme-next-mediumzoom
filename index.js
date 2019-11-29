/* global hexo */

'use strict';

const path = require('path');
const includeRaw = require('./lib/include-raw');
const linkGrid = require('./lib/link-grid');

hexo.extend.tag.register('include_raw', includeRaw, { ends: false, async: true });

hexo.extend.tag.register('linkgrid', linkGrid, { ends: true });
hexo.extend.tag.register('lg', linkGrid, { ends: true });

hexo.extend.filter.register('theme_inject', function(injects) {
  injects.style.push(path.join(__dirname, 'link-grid.styl'));
});
