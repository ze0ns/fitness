'use strict';

/**
 * body-param router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::body-param.body-param');
