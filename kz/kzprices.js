var parseDate = d3.timeParse("%m/%d/%Y");

var arrayX = [1,2,5,8,12];
console.log(arrayX);
d3.csv("kzdataB.csv")
    .row(function(d){ return {x: Number(d.day), price: d.price };  })
    .get(function(error,data){
      //var mm = d3.max(data, function(d){ return d.m; });
      var height = 90;
      var width = 900;

      //var max = 20000;
      var minY = d3.min(data,function(d){ return d.price; });
      console.log(minY);
      var maxY = d3.max(data,function(d){ return d.price; });
      console.log(maxY);
      //var ymax = Number(maxY) + 3;
      //console.log(ymax);
      var minX = d3.min(data,function(d){ return d.x; });
      console.log(minX);
      var maxX = d3.max(data,function(d){ return d.x; });
      console.log(maxX);
      var y = d3.scaleLinear()
                  .domain([minY,maxY])
                  .range([height,0]);
      var x = d3.scaleLinear()
                  .domain([minX,maxX])
                  .range([0,width]);
      var yAxis = d3.axisLeft(y).ticks(4);
      var xAxis = d3.axisBottom(x);

      var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

      var margin = {left:150,right:50,top:40,bottom:0};

      var chartGroup = svg.append("g")
                  .attr("transform","translate("+margin.left+","+margin.top+")");

      var line = d3.line()
                      .x(function(d){ return x(d.x); })
                      .y(function(d){ return y(d.price); });

      chartGroup.append("path").attr("fill","none").attr("stroke","blue").attr("d",line(data));
      chartGroup.append("g").attr("class","x axis").attr("transform","translate(0,"+height+")").call(xAxis);
      chartGroup.append("g").attr("class","y axis").call(yAxis);


})
