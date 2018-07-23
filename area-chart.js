var ds;
var years = [];
var causes = [];
var ndeaths = [];

function topCauses() {


    for (row in ds) {
        if (ds[row].global != "" && ds[row].cause == "Self-harm") {
            console.log(ds[row].year + ":" + ds[row].cause + ", number of deaths:" + ds[row].global);
            years.push(ds[row].year);
            causes.push(ds[row].cause);
            ndeaths.push(ds[row].global);
        }}
}

function drawChart() {
    
    var w = 600;
    var h = 400;
    padding = 20;

    var xScale = d3.scale.linear()
        .domain([
            d3.min(years),
            d3.max(years)
        ])
        .range([0+padding, w-padding]);
    
    var yScale = d3.scale.linear()
        .domain([
            0,
            d3.max(ndeaths)
        ])
        .range([h-padding, 0+padding]); //top left not bottom left coord system so h,0 not 0,h
    
    var lineFun = d3.svg.line()
        .x(function(d) {return years})
        .y(function(d) {return ndeaths})
        .interpolate("linear");

    var svg = d3.select("body").append("svg").attr({
        width: w,
        height: h});

    var viz = svg.append("path")
        .attr({
            d: lineFun(),
            "stroke": "green",
            fill: "none",
            "stroke-width": 2
        });


}

d3.csv("vis4.csv", function(error, data) { //method that will pull in the csv data and parse it out into a dictionary or an object and callback
    if(error) {
        console.log(error);}
    else {
        console.log("yay!");
        ds = data;}
        

        topCauses();
        drawChart();
});

