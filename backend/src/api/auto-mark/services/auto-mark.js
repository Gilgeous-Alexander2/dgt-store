'use strict';

/**
 * auto-mark service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::auto-mark.auto-mark');
