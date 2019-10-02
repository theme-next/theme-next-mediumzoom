/* global hexo */

'use strict';

const utils = require('./utils');
const includeRaw = require('./lib/include-raw');
const postVideo = require('./lib/video');

hexo.extend.tag.register('include_raw', includeRaw, { ends: false, async: true });

hexo.extend.tag.register('video', postVideo, { ends: false });
