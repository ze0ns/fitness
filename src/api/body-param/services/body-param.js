'use strict';

/**
 * body-param service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::body-param.body-param');
