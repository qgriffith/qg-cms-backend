const getGarmindata = require("./functions/getGarmindata");

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */

  '0 17 13 * * *': ({ strapi }) => {
      getGarmindata()
  },
};