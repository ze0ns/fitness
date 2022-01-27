'use strict';

/**
 * exercises service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exercises.exercises');
