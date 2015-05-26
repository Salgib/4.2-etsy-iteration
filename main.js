var _ = require('underscore');
var items = require('./items.json');



// Question 1
var priceList = _.pluck(items, 'price');

var sum = priceList.reduce(function(a, b){
  return a + b;
})

var avg = sum/(items.length);


console.log("The average price is" + " " +avg);

//Question 2
