const { DateTime } = require("luxon");
const fs = require("fs");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
};