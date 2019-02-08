const Mustache = require('mustache');
//TODO needs evaluation what is this in this context when imported required
const mustache = (mustacheTemplate) => {
  return (scope) => {
    if (typeof scope !== 'object') {
      throw new Error('scope needs to be Object');
    }
    return Mustache.render(mustacheTemplate.join(''), scope);
  };
};

module.exports = mustache;