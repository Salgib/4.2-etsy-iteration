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

var costResult = _.filter(items,
  function(costList){
  return Number(costList.price) > 14 && Number(costList.price) < 18;


});
 costResult.forEach(function(item){
   console.log(item.title);
 });


// Question 3
var gbpResult = _.filter(items,
  function(currency){
    return (currency.currency_code) === "GBP";
  });

  gbpResult.forEach(function(item){
    console.log(item.title) + console.log(item.currency_code);
  });
