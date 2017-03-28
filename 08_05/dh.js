var parseDate = d3.timeParse("%m/%d/%Y");

d3.csv("prices.csv")
    .row(function(d){ return {month: parseDate(d.month), price:Number(d.price.trim().slice(1))}; })
    .get(function(error,data){

var nestedData = d3.nest()
                      .key(function(d){ return d.month.getMonth();  })
                      .entries(data);

console.log(nestedData);

    });
