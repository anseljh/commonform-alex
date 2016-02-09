// Modules
var equality = require('retext-equality');
var phraseAnnotator = require('commonform-phrase-annotator');

// Load patterns from retext-equality (an Alex dependency)
var equality_patterns = require('retext-equality/lib/patterns.json');
// Get just the 'inconsiderate' parts
var inconsiderates = [];

equality_patterns.forEach(function(hash, index, arr) {
  Object.keys(hash.inconsiderate).forEach(function(key, index, arr2) {
    inconsiderates.push(key);
  });
});

// Subtract phrases that are not offensive in legal context
var excludes = require('./data/excludes.json');
var filter_func = function(item) {
  if (excludes.indexOf(item) != -1 ) {
    return false;
  } else {
    return true;
  }
};
var with_exclusions = inconsiderates.filter(filter_func);

// TODO: Move above data wrangling steps into build script (#2)

// Set up annotator function
// TODO: Produce better messages using Alex (#3)
function annotator(form, path, string) {
  return {
    message: '"' + string + '" may be insensitive',
    level: 'info',
    path: path,
    source: 'commonform-alex',
    url: null }; }

// The End! Initialize and export our phrase annotator.
module.exports = phraseAnnotator(with_exclusions, annotator);
