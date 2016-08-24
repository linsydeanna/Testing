var test = require('tape');
var wordifier = require('./wordifier.js');

test('make single digit numbers', function(t) {

  t.equal(wordifier(1), "one");
  t.equal(wordifier(2), "two");
  t.equal(wordifier(3), "three");
  t.end();
});

test('make two digit numbers', function(t){
  t.equal(wordifier(10), "ten");
  t.equal(wordifier(13), "thirteen");
  t.equal(wordifier(15), "fifteen");
  t.end();
});

test('make two digit numbers greater than 20', function(t) {
  t.equal(wordifier(21), "twenty one");
  t.equal(wordifier(61), "sixty one");
  t.end();
});

test('make two word, three digit number', function(t) {
  t.equal(wordifier(100), "one hundred");
  t.equal(wordifier(200), "two hundred");
  t.end();
});

test('make three word, three digit number', function(t) {
  t.equal(wordifier(480), "four hundred eighty");
  t.equal(wordifier(212), "two hundred twelve");
  t.end();
});

test('make four word, three digit number', function(t) {
  t.equal(wordifier(488), "four hundred eighty eight");
  t.equal(wordifier(227), "two hundred twenty seven");
  t.end();
});

test('make two word, four digit number', function(t) {
  t.equal(wordifier(8000), "eight thousand");
  t.equal(wordifier(9000), "nine thousand");
  t.end();
});

test('make three word, four digit number', function(t) {
  t.equal(wordifier(8090), "eight thousand ninety");
  t.equal(wordifier(9060), "nine thousand sixty");
  t.end();
});

test('make four word, four digit number', function(t) {
  t.equal(wordifier(8091), "eight thousand ninety one");
  t.equal(wordifier(9062), "nine thousand sixty two");
  t.end();
});

test('make five word, four digit number', function(t) {
  t.equal(wordifier(8810), "eight thousand eight hundred ten");
  t.equal(wordifier(9609), "nine thousand six hundred nine");
  t.end();
});

test('make five word, four digit number', function(t) {
  t.equal(wordifier(7855), "seven thousand eight hundred fifty five");
  t.equal(wordifier(4989), "four thousand nine hundred eighty nine");
  t.end();
});

test('make two word, five digit number', function(t) {
  t.equal(wordifier(10000), "ten thousand");
  t.equal(wordifier(20000), "twenty thousand");
  t.end();
});

test('other five digit numbers', function(t) {
  t.equal(wordifier(10500), "ten thousand five hundred");
  t.equal(wordifier(21000), "twenty one thousand");
  t.end();
});
