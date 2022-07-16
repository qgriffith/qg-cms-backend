'use strict';

/**
 * strava router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::strava.strava');
