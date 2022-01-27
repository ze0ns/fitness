'use strict';

/**
 * exercises router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::exercises.exercises');
