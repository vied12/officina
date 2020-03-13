module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/_assets");

  return {
    dir: {
      input: "src/",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
}