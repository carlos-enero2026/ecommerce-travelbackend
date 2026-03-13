'use strict';

/**
 * d service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::d.d');
