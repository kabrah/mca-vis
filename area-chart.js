function drawLines() {

    var w = 300;
    var h = 400;
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
        .attr({
            d: lineFun5(dsPiv),
            "stroke": "green",
            "fill": "none",
            "stroke-width": 2
        })

    var viz15 = svg.append("path")
        .attr({
            d: lineFun15(dsPiv),
            "stroke": "red",
            "fill": "none",
            "stroke-width": 2
        });



}