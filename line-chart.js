var ds;
var dsPiv;

function drawLines() {

    var w = 400;
    var h = 800;
    padding = 20;

    var xScale = d3.scale.linear()
        .domain([
            d3.min(dsPiv, function(d){return d.year;}),
            d3.max(dsPiv, function(d){return d.year;})
        ])
        .range([0+padding, w-padding]);
    
    var yScale = d3.scale.linear()
        .domain([
            0, //usually y-axis starts at zero, but this could of course alternatively by the min sales value
            d3.max(dsPiv, function(d){return d.nr_deaths_5;})
        ])
        .range([h-padding, 0+padding]); //top left not bottom left coord system so h,0 not 0,h

    var lineFun5 = d3.svg.line()
        .x(function(d) {return xScale(d.year);})
        .y(function(d) {return yScale(d.nr_deaths_5);})
        .interpolate("linear");

    var lineFun15 = d3.svg.line()
        .x(function(d) {return xScale(d.year);})
        .y(function(d) {return yScale(d.nr_deaths_15);})
        .interpolate("linear");

    var svg = d3.select("body").append("svg").attr({
        width: w,
        height: h});

    var viz5 = svg.append("path")
        .transition()
        .delay(600)
        .duration(500)
        .ease("linear")
        .attr({
            d: lineFun5(dsPiv),
            "stroke": "green",
            "fill": "none",
            "stroke-width": 2
        })

    //var viz15 = svg.append("path")
        .transition()
        .delay(1200)
        .duration(1000)
        .attr({
            d: lineFun15(dsPiv),
            "stroke": "red",
            "fill": "none",
            "stroke-width": 2
        });



}

function drawDots() {
    
    var w = 400;
    var h = 400;
    padding = 20;

    var xScale = d3.scale.linear()
        .domain([
            d3.min(ds, function(d){return d.year;}),
            d3.max(ds, function(d){return d.year;})
        ])
        .range([0+padding, w-padding]);
    
    var yScale = d3.scale.linear()
        .domain([
            0, //usually y-axis starts at zero, but this could of course alternatively by the min sales value
            d3.max(ds, function(d){return d.nr_deaths;})
        ])
        .range([h-padding, 0+padding]); //top left not bottom left coord system so h,0 not 0,h
    
    var cValue = function(d) { return d.agegroup;},
        color = d3.scale.category10();

    var svgContainer = d3.select("body").append("svg")
        .attr("width", w)
        .attr("height", h);

    var circles = svgContainer.selectAll("circle")
        .data(ds)
        .enter()
        .append("circle");

    var circleAttributes = circles
        .attr("cx", function (d) {return xScale(d.year);})
        .attr("cy", function (d) {return yScale(d.nr_deaths);})
        .attr("r", 5)
        .style("fill", function(d) {return color(cValue(d));})

}

/*
function drawIcons() {
    var w = 400;
    var h = 1600

    var svgContainer = d3.select("body").append("svg")
        .attr("width", w)
        .attr("height", h);

    var icons = svgContainer.selectAll("circle")
        .data(
            d3.gridding()
                .size([800, 600])
                .mode("vertical")(d3.range(10))
                .mode("horizontal")(d3.range(10))
      )
        .enter()
        .append("circle")
        .attr("r", 10)
        .attr("transform", function(d) { 
            return "translate(" + d.cx + "," + d.cy + ")"
        });
    }
*/
/*
d3.csv("vis1-data.csv", function(error, data) { //method that will pull in the csv data and parse it out into a dictionary or an object and callback
    if(error) {
        console.log(error);}
    else {
        console.log("yay!");
        ds = data;}
        
        drawDots();

});
*/
d3.csv("vis1-piv-data.csv", function(error, data) { //method that will pull in the csv data and parse it out into a dictionary or an object and callback
    if(error) {
        console.log(error);}
    else {
        console.log("yay! (pivot)");
        dsPiv = data;}
        
        drawLines();
});