alex = require('alex');

// TODO: Exclude common legal words that aren't offensive (#1)
// TODO: Move into npm build step
// Build intermediate JSON and then DatalistInterface for exclusions.
// See: https://github.com/wooorm/profanities
// var DatalistInterface = require('datalist-interface');
// textToJSON = require('plain-text-data-to-json');
// var exclusionsJSON = textToJSON(fs.readFileSync('data/excludes.txt', 'utf8'));
// var exclusions = new DatalistInterface(exclusionsJSON);

function alexToString(alexOutput) {
  console.log('alexOutput: ' + alexOutput);
  return alexOutput.reason.replace(/`/g, '\"');
}

function buildAnnotation(reason, path) {
  return {
    'message': reason,
    'level': 'info',
    'path': path,
    'source': 'alex',
    url: null
  };
}

function recurse(form, path, annotations) {
  return annotations
    .concat(
      buildAnnotation(alexToString(alex(form.content), path))
    );
}

module.exports = function(form) {
  console.log('form: ' + form);
  console.log('form.content: ' + form.content);
  console.log('form.content[0]: ' + form.content[0]);
  console.log('alexToString(form.content[0]): ' + alexToString(form.content[0]));
  return []
    .concat(
      recurse(form, [], [])
    );
};
