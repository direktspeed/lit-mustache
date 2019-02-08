import Mustache from 'mustache';
/**
 * 
 * @param mustacheTemplateLiteral
 */
function mustache(mustacheTemplateLiteral) {
  return (scope) => {
    if (typeof scope !== 'object') {
      throw new Error('scope needs to be Object');
    }
    return Mustache.render(mustacheTemplateLiteral.join(''), scope);
  };
}

//TODO: needs evaluation what is this in const mustache = ()=> context if imported
export { mustache as default, mustache };