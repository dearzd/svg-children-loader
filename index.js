const loaderUtils = require('loader-utils');

module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  const svgStr = source;

  const reg = /(<svg[\s|\S]*?>)((\s|\S)*)<\/svg>/;

  const result = svgStr.match(reg);

  const svg = {
    childrenStr: result[2]
  };

  // extract attributes of svg element
  if (options) {
    const { extractAttributes } = options;
    if (Array.isArray(extractAttributes)) {
      extractAttributes.forEach(function(attrName) {
        const attrMatch = new RegExp(attrName + '="((\\d|\\D)*?)"').exec(result[1]);
        svg[attrName] = attrMatch && attrMatch[1];
      });
    }
  }

  return 'module.exports = ' + JSON.stringify(svg);
};
