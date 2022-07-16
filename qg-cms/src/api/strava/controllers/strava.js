'use strict';

/**
 *  strava controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::strava.strava');
