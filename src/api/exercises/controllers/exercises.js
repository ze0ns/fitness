'use strict';

/**
 *  exercises controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::exercises.exercises');
