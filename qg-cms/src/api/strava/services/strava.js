'use strict';

/**
 * strava service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strava.strava');
