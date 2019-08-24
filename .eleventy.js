const { orderByExplicitOrder } = require("./utils/collection-utils");

module.exports = function(config) {
  config.addPassthroughCopy("source/images");

  config.addCollection("menu", collection => {
    return orderByExplicitOrder(collection);
  });

  return {
    templateFormats: ["html", "md", "css"]
  };
};
