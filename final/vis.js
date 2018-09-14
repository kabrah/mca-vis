/*
Each visualisation lives inside an svg container that is nested in another svg container
The first svg containers are created in the index.html and then using the ids the next containers are created within the functions that create the visualisation

I have always used svg coordinates directly instead of flipping the visualisations afterwards
Could make more sense conceptually to add a function to transform visualisations and apply it to every vis

No classes added, simply because I wanted to define everything individually, but text would have been a good thing to class together
*/

function randomColor() {
    return d3.rgb(Math.random()*255, Math.random()*255, Math.random()*255);
}

//draw background rectangles in svgContainer, here they are simply random colors
function backgrounds() {
//This should actually be customized in a way that suits the colors of the actual vis

    d3.select("body")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", randomColor())
        .style("opacity", 0.2);

    d3.select("svg#graph1")
        .append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", randomColor())
        .style("opacity", 0.05);
    
    d3.select("svg#graph2")
        .append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", randomColor())
        .style("opacity", 0.05);

    d3.select("svg#graph3")
        .append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", randomColor())
        .style("opacity", 0.05);

    d3.select("svg#graph4")
        .append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", randomColor())
        .style("opacity", 0.05);

    d3.select("svg#graph5")
        .append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", randomColor())
        .style("opacity", 0.05);

    d3.select("svg#graph6")
        .append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", randomColor())
        .style("opacity", 0.05);

    d3.select("svg#graph7")
        .append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", randomColor())
        .style("opacity", 0.05);
    
    d3.select("svg#graph8")
        .append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", randomColor())
        .style("opacity", 0.05);

    d3.select("svg#graph9")
        .append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", randomColor())
        .style("opacity", 0.05);

    d3.select("svg#graph10")
        .append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", randomColor())
        .style("opacity", 0.05);
    
    d3.select("svg#graph-last")
        .append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", randomColor())
        .style("opacity", 0.05);
    
}

backgrounds();

//gets client's browser width
function getWidth() {
if (self.innerWidth) {
return self.innerWidth;
}

if (document.documentElement && document.documentElement.clientWidth) {
return document.documentElement.clientWidth;
}

if (document.body) {
return document.body.clientWidth;
}
}

function firstVis() {
//TEXT, WHERE EACH WORDS ATTRIBUTES ARE DEFINED
//no data binding is required so no need for D3.js, but I was practicing 
    var w = getWidth(); 
    var h = 600;

    //Defining words and their positions and sizes
    var words = [
        { "word": "Over", "x": w / 3 - 50, "y": h / 7 - 20, "size": "30px" },
        { "word": "1.1 million", "x": w / 3 - 10, "y": h / 4, "size": "80px" },
        { "word": "adolescents", "x": w / 2, "y": 3.5 * h / 8 + 5, "size": "120px" },
        { "word": "aged", "x": 3 * w / 5, "y": 9 * h / 18 + 40, "size": "25px" },
        { "word": "10-19", "x": 3 * w / 5 + 30, "y": 9 * h / 18 + 75, "size": "30px" },
        { "word": "die", "x": w / 3, "y": 10 * h / 16 + 54, "size": "180px" },
        { "word": "every year.", "x":  2* w / 5, "y": 6 * (h / 8) + 40, "size": "40px" },
        {"word": "That's", "x": w /2, "y": 7.5 * h /8, "size": "40px"}]

    var svgContainer = d3.select("svg#graph1")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    //adds and defines text to the container by binding the data in the words array to text
    var text = svgContainer
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .text(function (d) { return d["word"]; })
        .attr("x", function (d) { return d["x"]; })
        .attr("y", function (d) { return d["y"]; })
        .attr("font-size", function (d) { return d["size"]; })
        .attr("font-family", "adobe-garamond-pro")
        .attr("text-anchor", "middle")
        .style("fill", "rgb(47,79,120)");

};

function secondVis() {
//GRID OF CIRCLES WITH NUMBER COUNTER
/*The grid has the potential for a much more informative visualisation
Each circle is actually bound to data, which might be unnecessary when you just want to show the number 3000, 
but this means you could use colours and sizes to represent information
E.g. colours represent the region, size represents the age and you could add a circle border of two colors to represent the sex
*/ 
            var w = getWidth();
            var h = 600;
            var margin = { right: 10, left: 10 };

            /*
            The actual number of daily deaths happens to be 3000
            dailyDeaths = 3025 because that is the next highest squared number (so that there is a square grid)
            */
            var dailyDeaths = 3025;
            var dailyDeathsArray = [];
            var sqrtDeaths = Math.sqrt(dailyDeaths);

            for (var i = 1; i <= dailyDeaths; i++) {
                dailyDeathsArray.push(i);
            }
            
            var svgContainer = d3.select("svg#graph2")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

            var circle = svgContainer
                .selectAll("circle")
                .data(dailyDeathsArray)
                .enter()
                .append("circle") //adds one circle per data point so it seems like one since they overlap
                //initial circles are centered and 50px from the edge of the svgcontainer
                .attr("cx", w / 2)
                .attr("cy", h / 2)
                .attr("r", h/2 - 50)
                //the opacity of all circles greater than 3000 is set to zero because the ACTUAL number of daily deaths is 3000
                //did this to hide all additional circles
                .style("opacity", function (d) {
                    if (d > 3000) { return 0; }
                    else { return 0.9; }                })
                //color can be specified of course, I just used a random color
                .attr("fill", d3.rgb(Math.random() * 255, Math.random() * 255, Math.random() * 255));

            var circles = circle
                //the transition does all the mathematics of converting the original svgs to the new svgs
                .transition()
                .delay(500)
                .duration(5500)
                //cx and cy are computed s.t. the circles align in a square grid
                .attr("cx", function (d, i) {
                    var a = d % sqrtDeaths;
                    var b = w - (margin.right + margin.left)
                    var c = sqrtDeaths
                    return a * b / c + margin.left;
                })
                .attr("cy", function (d, i) {
                    var a = (d - (d % sqrtDeaths)) / sqrtDeaths;
                    var b = h - (margin.right + margin.left);
                    var c = sqrtDeaths;
                    return a * b / c + margin.left;
                })
                .attr("r", 4)
                //the color was picked so that the text on top shows
                .attr("fill", "#ebe83a");

            var circlesDis = circles
                .transition()
                .delay(function (d, i) { return 6000 + i * 5 }) //this is so they don't just disappear at once
                .duration(5000)
                .attr('transform', function (d) {
                    //circular falling motion seemed more effective than simply gradually reducing the opacity
                    return "rotate(" + (-1) ** Math.round(Math.random()) * Math.random() * Math.PI + ")";
                })
                .attr("r", 0);

            var text = svgContainer
                .append("text")
                .text(" ")
                .attr("x", w / 2)
                .attr("y", h / 2)
                .attr("text-anchor", "middle")
                .attr("font-family", "adobe-garamond-pro")
                .attr("font-size", "45px")
                .style("fill", "rgb(47,79,120)")
                //.style("text-shadow", "3px 3px 3px")
                .transition()
                .delay(6000)
                //the interpolate function has the same duration ans the whole set of circles disappearing
                //it happens simultaneously but is actually independent of the circles disappearing
                .duration(18500)
                .tween("text", function () {
                    var i = d3.interpolate(1, 3000)
                    return function (t) {
                        this.textContent = Math.round(i(t)) + " adolescent deaths a day.";
                    };
                });

};
    
function thirdVis() {
//SIMPLE LINE CHART THAT TRANSITIONS WITH TEXT
//Not really meant for reading off actual data values, but instead for just "proving" the accompanying text

var ds; //assigned the dataset from csv file later on

function drawLines() {

var w = getWidth();
var h = 600;
padding = 20;

var xScale = d3.scale.linear()
    .domain([
        d3.min(ds, function(d) {return d["year"]}), 
        d3.max(ds, function(d) {return d["year"]})])
    .range([50, w - 50]);

var yScale = d3.scale.linear()
    .domain([
        d3.min(ds, function (d) { return 0; }),
        d3.max(ds, function (d) { return sumAge(d); })
    ])
    .range([h - 90, 120]);

function sumAge(dats) {
    return 1.0* dats["agegroup0"] + 1.0* dats["agegroup1"] + 1.0* dats["agegroup2"] + 1.0*  dats["agegroup5"]} //1.0 * avoiding concatenation

var lineFun10 = d3.svg.line()
    .x(function (d) { return xScale(d.year); })
    .y(function (d) { return yScale(sumAge(d)); })
    .interpolate("linear");

var lineFun15 = d3.svg.line()
    .x(function (d) { return xScale(d.year); })
    .y(function (d) { return yScale(d["agegroup15"]); })
    .interpolate("linear");

var svg = d3.select("svg#graph3").append("svg").attr({
    width: w,
    height: h
});


var viz = svg.append("path")
    .attr({
        id: "under10",
        d: lineFun10(ds),
        "stroke": "green",
        "fill": "none",
        "stroke-width": 5
    })
    .style("opacity", 0.8)
    .transition()
    .delay(3000)
    .duration(1500)
    .attr({
        id: "under10",
        d: lineFun15(ds),
        "stroke": "red",
        "fill": "none",
        "stroke-width": 5
    });

var underNine = svg.append("text")
    .text("While there has been significant improvement for children under the age of 10,")
    .attr("x", w / 2)
    .attr("y", 100)
    .attr("font-size", "40px")
    .attr("text-anchor", "middle")
    .attr("font-family", "adobe-garamond-pro")
    .style("fill", "rgb(47,79,120)")
    .transition()
    .duration(2000)
    .delay(3500)
    .attr("x", 0)
    .attr("text-anchor", "end");
    

var overFifteen = svg.append("text")
    .text("this has not been the case for 15 to 19 year olds.")
    .attr("x", w / 2)
    .attr("y", h + padding * 4)
    .attr("font-size", "60px")
    .attr("text-anchor", "middle")
    .attr("font-family", "adobe-garamond-pro")
    .style("fill", "rgb(47,79,120)")
    .transition()
    .delay(3000)
    .duration(2000)
    .attr("y", 3 * h / 4)
    .attr("text-anchor", "middle");

//the axis is intentionally hiding in the background, because it should not be the focus
var y_axis = d3.svg.axis()
    .scale(yScale)
    .ticks(20)
    .orient("left")
    .tickFormat(d3.format("d"));

var yaxis = svg.append("g")
    .attr("class", "yaxis")
    .attr("transform", "translate( "+ (w - 50) +",0)")
    .call(y_axis);

var yaxisText = yaxis
    .selectAll("text")	
    .attr("font-family", "adobe-garamond-pro")
    .attr("font-size", "15px")
    .style("fill", "rgb(47,79,120)")
    .style("opacity", 0.3);

var yaxisLine = yaxis
    .attr("fill", "none")
    .attr("stroke", "rgb(47,79,120)")
    .attr("shape-rendering", "crispEdges")
    .style("opacity", 0.3);


};
d3.csv("all-cause-mortality.csv", function (error, data) { 
    //method that will pull in the csv data and parse it out into a dictionary or an object and callback
if (error) {
    console.log(error);
}
else {
    console.log("yay! (pivot)");
    ds = data;
}

drawLines();
});

};

function fourthVis() {

var w = getWidth();
var h = 600;

//again, the words are bound to the svgs in a very d3-manner simply because I was purely working with d3
var words = [
{"word": "Between the ages of 15 and 19,", "x": w/2, "y": h/2 - 230, "size": "25px"},
{"word": "boys", "x": 3*w/8, "y": h/2 - 130, "size": "130px"},
{"word": "are", "x": 3*w/7, "y": h/2 - 80, "size": "25px"},
{"word": "particularly vulnerable,", "x": w/2, "y": h/2 - 10, "size": "70px"},
{"word": "not just", "x": w/2, "y": h/2 + 34, "size": "30px"},
{"word": "globally, ", "x": w/2, "y": h/2 + 100, "size": "60px"},
{"word": "but across almost", "x": w/2, "y": h/2 + 150, "size": "25px"},
{"word": "every region.", "x": w/2, "y": h/2 + 230, "size": "90px"} ]

var svgContainer = d3.select("svg#graph4")
.append("svg")
.attr("width", w)
.attr("height", h);

var text = svgContainer
.selectAll("text")
.data(words)
.enter()
.append("text")
.text(function(d) {return d["word"];})
.attr("x", function(d) {return d["x"];})
.attr("y", function(d) {return d["y"];})
.attr("font-size", function(d) {return d["size"];})
.attr("font-family", "adobe-garamond-pro")
.attr("text-anchor", "middle")
.style("fill", "rgb(47,79,120)");
};
    
function fifthVis() {
var ds;

var w = getWidth();
var h = 600;

var regName = {"afr_lmic": "African Region LMIC*", "amr_lmic": "Region of the Americas LMIC*", "emr_lmic": "Eastern Mediterranean Region LMIC*", "eur_lmic": "European Region LMIC*", "sear_lmic": "South-East Asian Region LMIC*", "wpr_lmic": "Western Pacific Region LMIC*", "hi": "High Income Countries"};

function addComp() {
//creates the whole vis
var color = d3.scale.category10();
barWidth = 40;

var svgContainer = d3.select("svg#graph5")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svgContainer.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", randomColor())
    .style("opacity", 0.05);

var region = svgContainer //text that is on the rectangles
    .selectAll("text")
    .data(ds)
    .enter()
    .append("text")
    .text(function(d) {return Math.round((d["dr_m"]/(1*d["dr_m"]+1*d["dr_f"]))*100) + "% of deaths in " + regName[d["region"]] + ".";})
    .attr("x", w/2)
    .attr("y", function(d,i) {return 260 + barWidth*i;})
    .attr("font-size", "30px")
    .attr("font-family", "adobe-garamond-pro")
    .attr("text-anchor", "middle")
    .style("fill", function(d,i) {return color(i);});

//text,text1,text3,lmictext are added individually because I didn't bind them to data
var text = svgContainer 
    .append("text")
    .text("boys")
    .attr("x", w/2)
    .attr("y", 150)
    .attr("font-size", "70px")
    .attr("font-family", "adobe-garamond-pro")
    .attr("text-anchor", "middle")
    .style("fill", "rgb(47,79,120)")
    .attr("background-color", "rgb(0, 0, 255,0.2)");

var text1 = svgContainer
    .append("text")
    .text("make up")
    .attr("x", w/2)
    .attr("y", 210)
    .attr("font-size", "25px")
    .attr("font-family", "adobe-garamond-pro")
    .attr("text-anchor", "middle")
    .style("fill", "rgb(47,79,120)");

var text2 = svgContainer
    .append("text")
    .text("In that agegroup,")
    .attr("x", w/2)
    .attr("y", 60)
    .attr("font-size", "25px")
    .attr("font-family", "adobe-garamond-pro")
    .attr("text-anchor", "middle")
    .style("fill", "rgb(47,79,120)");

var lmicText = svgContainer
    .append("text")
    .text("*Low and Middle Income Countries")
    .attr("x", 3*w/4)
    .attr("y", h - 60)
    .attr("font-family", "adobe-garamond-pro")
    .attr("text-anchor", "left")
    .style("fill", "rgb(47,79,120)");

//boyRectangles, girlRectangles and boytextRect all are independently positioned
var boyRectangles = svgContainer
    .selectAll("rect.boys")
    .data(ds)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", function(d,i) {return 260 + barWidth*i - 29;})
    .attr("width", 0)
    .attr("height", "38px")
    .attr("fill", "blue")
    .style("opacity", 0.2)
    .transition()
    .delay(500)
    .duration(1000)
    .ease("bounce")
    .attr("width", function(d) {return w * d["dr_m"]/(1*d["dr_m"]+1*d["dr_f"]);});

var girlRectangles = svgContainer
    .selectAll("rect.girls")
    .data(ds)
    .enter()
    .append("rect")
    .attr("x", w)
    .attr("y", function(d,i) {return 260 + barWidth*i - 29;})
    .attr("width", function(d) {return w * d["dr_f"]/(1*d["dr_m"]+1*d["dr_f"]);})
    .attr("height", "38px")
    .attr("fill", "red")
    .style("opacity", 0.1)
    .transition()
    .delay(500)
    .duration(1000)
    .ease("bounce")
    .attr("x", function(d) {return w * d["dr_m"]/(1*d["dr_m"]+1*d["dr_f"]);}); //equal to the width of the boyRectangles

var boytextRect = svgContainer //an individual rectangle that shows blue indicates boys
    .append("rect")
    .attr("x", 0)
    .attr("y", 90) 
    .attr("width", 0)
    .attr("height", 76)
    .style("opacity",0.2)
    .style("fill", "blue")
    .transition()
    .delay(500)
    .duration(1000)
    .ease("bounce")
    .attr("width", getWidth());
}

d3.csv("reg-comp.csv", function(error, data) { 
//method that will pull in the csv data and parse it out into a dictionary or an object and callback
if(error) {
    console.log(error);}
else {
    console.log("yay! (pivot)");
    ds = data;}
    
    addComp();
});
};
    
function sixthVis() {
//simply appends a text element
var w = getWidth();
var h = 200;

var words = [
{"word": "How are these boys dying?", "x": w/2, "y": h/2, "size": "60px"}]

var svgContainer = d3.select("svg#graph6")
.append("svg")
.attr("width", w)
.attr("height", h);

var text = svgContainer
.selectAll("text")
.data(words)
.enter()
.append("text")
.text(function(d) {return d["word"];})
.attr("x", function(d) {return d["x"];})
.attr("y", function(d) {return d["y"];})
.attr("font-size", function(d) {return d["size"];})
.attr("font-family", "adobe-garamond-pro")
.attr("text-anchor", "middle")
.style("fill", "rgb(47,79,120)");
};

function seventhVis() {

var margin = {
top: 60,
right: 200,
bottom: 60,
left: 90
};

var wL = getWidth();
var hL = 620;
var w = wL - margin.left - margin.right;
var h = hL - margin.top - margin.bottom;
var ds;

var div = d3.select("body").append("div")   
.style("position", "absolute")
.style("text-align", "center")
.style("width", "200px")
.style("height", "60px")
.style("padding", "2px")
.style("font", "adobe-garamond-pro")
.style("color","black")
.style("background", "white")
.style("border-radius", "8px")
.style("border", "solid 1px grey")
.style("opacity", 0);

d3.csv("boy-causes.csv", function (error, data) { //method that will pull in the csv data and parse it out into a dictionary or an object and callback
if (error) {
    console.log(error);
}
else {
    console.log("yay! (pivot)");
    ds = data;
    drawCircles();}
} );

//the colorMap allows you to assign each cause a customized color
var colorMap = {
"Drowning": "lightblue", 
"Interpersonal violence": "orange", 
"Self-harm": "lightgreen", 
"Road injury": "purple", 
"HIV/AIDS": "yellow", 
"Tuberculosis": "grey", 
"Meningitis": "red", 
"Diarrhoeal diseases": "brown",
"Lower respiratory infections": "darkgreen",
"Leukaemia": "pink",
"Collective violence and legal intervention": "darkblue",
"Drug use disorders":"maroon"}; //DarkOliveGreen 

//has the y position for the legend, but there must be a smarter way to do this...
var placeMap = {
"Collective violence and legal intervention": 175,
"Diarrhoeal diseases": 200,
"Drowning": 225,
"Drug use disorders": 250,
"HIV/AIDS": 275, 
"Interpersonal violence": 300,
"Leukaemia": 325,
"Lower respiratory infections": 350,
"Meningitis": 375, 
"Road injury": 400, 
"Self-harm": 425,
"Tuberculosis": 450};

//var causeList = ["Drowning", "Interpersonal violence", "Self-harm", "Road injury", "HIV/AIDS", "Tuberculosis", "Meningitis", "Diarrhoeal diseases","Lower respiratory infections","Leukaemia", "Collective violence and legal intervention", "Drug use disorders"];
var yearScale = d3.scale.linear().domain([2000, 2016]).range([margin.left, w - margin.right]);
var drScale = d3.scale.linear().domain([0,80]).range([h, 60]);

function drawCircles() {
var svgContainer = d3.select("svg#graph7")
.append("svg")
.attr("width", wL)
.attr("height", hL);

var circles = svgContainer
.selectAll("circle")
.data(ds)
.enter()
.append("circle")
.attr("cx", function(d,i) {return yearScale(d.year);})
//.attr("cy", function(d) {if (d.global == 1) {return h - (20 + d.death_rate * 6);} else {return h;}})
.attr("cy", function(d) {if (d.global == 1) {return drScale(d.death_rate);} else {return h;}})
.attr("r", 6)
.attr("fill", function(d) {return colorMap[d.cause];})
.attr("stroke", "black")
.attr("stroke-width", "1px")
.style("opacity", function(d) {if (d.global == 1) {return 0.8;} else {return 0;}})
.on("mouseover", mouseover)
.on("mouseout", mouseout);


var legend = svgContainer
.selectAll("text")
.data(ds)
.enter()
.append("text")
.attr("x", w - 130)
.attr("y", function(d) {return placeMap[d.cause];})
.text(function(d) {return d.cause})
.style("font-weight", "bold")
.style("opacity", function(d) {if (d.year == 2000) {return 0.8;} else {return 0;}})
.attr("fill", function(d) {return colorMap[d.cause];});

var regLabel = svgContainer.append("text")
.attr("x", margin.left + (w - margin.right - margin.left)/2)
.attr("y", 50)
.text("Global")
.attr("text-anchor", "middle")
.attr("font-family", "adobe-garamond-pro")
.attr("font-size", "25px")
.style("fill", "rgb(47,79,120)");

var x_axis = d3.svg.axis()
.scale(yearScale)
.ticks(17)
.orient("bottom")
.tickFormat(d3.format("d"));

var xaxis = svgContainer.append("g")
.attr("class", "xaxis")
.attr("transform", "translate(0, 510)")
.call(x_axis);

var xaxisText = xaxis
.selectAll("text")	
.attr("font-family", "adobe-garamond-pro")
.attr("font-size", "15px")
.style("fill", "rgb(47,79,120)");

var xaxisLine = xaxis
//.selectAll("line")
.attr("fill", "none")
.attr("stroke", "rgb(47,79,120)")
.attr("shape-rendering", "crispEdges");

var y_axis = d3.svg.axis()
.scale(drScale)
.ticks(20)
.orient("left")
.tickFormat(d3.format("d"));

var yaxis = svgContainer.append("g")
.attr("class", "yaxis")
.attr("transform", "translate(60,0)")
.call(y_axis);

var yaxisText = yaxis
.selectAll("text")	
//.attr("transform", "translate(0, 0)")
.attr("font-family", "adobe-garamond-pro")
.attr("font-size", "15px")
.style("fill", "rgb(47,79,120)");

var yaxisLine = yaxis
//.selectAll("line")
.attr("fill", "none")
.attr("stroke", "rgb(47,79,120)")
.attr("shape-rendering", "crispEdges");

var yAxisLabel = svgContainer.append("text")
.attr("transform", "rotate(-90)")
.attr("y", 5)
.attr("x",0 - (h / 2))
.attr("dy", "1em")
.style("text-anchor", "middle")
.text("Death rate (per 100'000)")
.attr("font-family", "adobe-garamond-pro")
.attr("font-size", "15px")
.style("fill", "rgb(47,79,120)");

function mouseover(d) {
div.html("Cause: " + d.cause + ", Death rate per 100'000 ("+ d.year + "): " + Math.round( d.death_rate * 10 ) / 10 + ", Boys aged 15-19")
.style("left", (d3.event.pageX) + "px")
.style("top",  (d3.event.pageY) + "px")
.style("opacity", 1);
d3.select(this).attr("r", 14).style("opacity", 1);
}

function mouseout() {
div.style("opacity", 1e-6);
d3.select(this).attr("r", 6).style("opacity", 0.8);
}

d3.select("div#seventh").append("button")
.attr("class", "button")
.text("GLOBAL")
.style("font-family","adobe-garamond-pro")
.style("font-size","18px")
.on("click", function(d) {
circles
.transition()
.delay(100)
.duration(1000)
//.attr("cy", function(d) {if (d.global == "1") {return h - (20 + d.death_rate * 6);} else {return h;}})
.attr("cy", function(d) {if (d.global == 1) {return drScale(d.death_rate);} else {return h;}})    
.style("opacity", function(d) 
{if (d.global == "1") {return 0.8;} 
else {return 0;}})
regLabel
.text("Global");
;});

d3.select("div#seventh").append("button")
.attr("class", "button")
.text("AFR, LMICs")
.style("font-family","adobe-garamond-pro")
.style("font-size","18px")
.on("click", function(d) {
circles
.transition()
.delay(100)
.duration(1000)
//.attr("cy", function(d) {if (d.mod_reg == "AFR LMIC") {return h - (20 + d.death_rate * 6);} else {return h;}})
.attr("cy", function(d) {if (d.mod_reg == "AFR LMIC") {return drScale(d.death_rate);} else {return h;}})
.style("opacity", function(d) 
{if (d.mod_reg == "AFR LMIC") {return 0.8;} 
else {return 0;}})
regLabel
.text("African Region, Low and Middle Income Countries");
;});

d3.select("div#seventh").append("button")
.attr("class", "button")
.text("AMR, LMICs")
.style("font-family","adobe-garamond-pro")
.style("font-size","18px")
.on("click", function(d) {
circles
.transition()
.delay(100)
.duration(1000)
//.attr("cy", function(d) {if (d.mod_reg == "AMR LMIC") {return h - (20 + d.death_rate * 6);} else {return h;}})
.attr("cy", function(d) {if (d.mod_reg == "AMR LMIC") {return drScale(d.death_rate);} else {return h;}})
.style("opacity", function(d) 
{if (d.mod_reg == "AMR LMIC") {return 0.8;} 
else {return 0;}})
regLabel
.text("Region of the Americas, Low and Middle Income Countries");
;});

d3.select("div#seventh").append("button")
.attr("class", "button")
.text("EMR, LMICs")
.style("font-family","adobe-garamond-pro")
.style("font-size","18px")
.on("click", function(d) {
circles
.transition()
.delay(100)
.duration(1000)
//.attr("cy", function(d) {if (d.mod_reg == "EMR LMIC") {return h - (20 + d.death_rate * 6);} else {return h;}})
.attr("cy", function(d) {if (d.mod_reg == "EMR LMIC") {return drScale(d.death_rate);} else {return h;}})
.style("opacity", function(d) 
{if (d.mod_reg == "EMR LMIC") {return 0.8;} 
else {return 0;}})
regLabel
.text("Eastern Mediterranean Region, Low and Middle Income Countries");
;});

d3.select("div#seventh").append("button")
.attr("class", "button")
.text("EUR, LMICs")
.style("font-family","adobe-garamond-pro")
.style("font-size","18px")
.on("click", function(d) {
circles
.transition()
.delay(100)
.duration(1000)
//.attr("cy", function(d) {if (d.mod_reg == "EUR LMIC") {return h - (20 + d.death_rate * 6);} else {return h;}})
.attr("cy", function(d) {if (d.mod_reg == "EUR LMIC") {return drScale(d.death_rate);} else {return h;}})
.style("opacity", function(d) 
{if (d.mod_reg == "EUR LMIC") {return 0.8;} 
else {return 0;}})
regLabel
.text("European Region, Low and Middle Income Countries");
;});

d3.select("div#seventh").append("button")
.attr("class", "button")
.text("SEAR, LMICs")
.style("font-family","adobe-garamond-pro")
.style("font-size","18px")
.on("click", function(d) {
circles
.transition()
.delay(100)
.duration(1000)
//.attr("cy", function(d) {if (d.mod_reg == "SEAR LMIC") {return h - (20 + d.death_rate * 6);} else {return h;}})
.attr("cy", function(d) {if (d.mod_reg == "SEAR LMIC") {return drScale(d.death_rate);} else {return h;}})    
.style("opacity", function(d) 
{if (d.mod_reg == "SEAR LMIC") {return 0.8;} 
else {return 0;}})
regLabel
.text("South-East Asian Region, Low and Middle Income Countries");
;});

d3.select("div#seventh").append("button")
.attr("class", "button")
.text("WPR, LMICs")
.style("font-family","adobe-garamond-pro")
.style("font-size","18px")
.on("click", function(d) {
circles
.transition()
.delay(100)
.duration(1000)
//.attr("cy", function(d) {if (d.mod_reg == "WPR LMIC") {return h - (20 + d.death_rate * 6);} else {return h;}})
.attr("cy", function(d) {if (d.mod_reg == "WPR LMIC") {return drScale(d.death_rate);} else {return h;}})
.style("opacity", function(d) 
{if (d.mod_reg == "WPR LMIC") {return 0.8;} 
else {return 0;}})
regLabel
.text("Western Pacific Region, Low and Middle Income Countries");
;});

d3.select("div#seventh").append("button")
.attr("class", "button")
.text("HI")
.style("font-family","adobe-garamond-pro")
.style("font-size","18px")
.on("click", function(d) {
circles
.transition()
.delay(100)
.duration(1000)
//.attr("cy", function(d) {if (d.mod_reg == "High Income") {return h - (20 + d.death_rate * 6);} else {return h;}})
.attr("cy", function(d) {if (d.mod_reg == "High Income") {return drScale(d.death_rate);} else {return h;}})
.style("opacity", function(d) 
{if (d.mod_reg == "High Income") {return 0.8;} 
else {return 0;}})
regLabel
.text("High Income Countries");
;});

};
};

function eighthVis() {
    
    var w = getWidth();
    var h = 400;

    var causes = ["Road Injuries", "Interpersonal Violence", "Self-harm"]

    var svgContainer = d3.select("svg#graph8")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    var causesText = svgContainer
        .selectAll("text")
        .data(causes)
        .enter()
        .append("text")
        .text(function (d) {return d;})
        .attr("x", w/2)
        .attr("y", -100)
        .attr("font-size", "70px")
        .attr("font-family", "adobe-garamond-pro")
        .attr("text-anchor", "middle")
        .style("fill", "rgb(47,79,120)")
        .transition()
        .delay(function(d,i) {return 200 + i*500;})
        .duration(2000)
        .attr("y", function(d,i) {return h/3 + 30 + i * 100;});

    var topText = svgContainer
        .append("text")
        .text("For 15 to 19 year-old boys, the top 3 causes of death are")
        .attr("x", w/2)
        .attr("y", h/4 - 50)
        .attr("font-size", "30px")
        .attr("font-family", "adobe-garamond-pro")
        .attr("text-anchor", "middle")
        .style("fill", "rgb(47,79,120)");


};


function ninthVis() {
    
    var w = getWidth();
    var h = 400;

    var causes = ["Road Injuries", "Interpersonal Violence", "Self-harm"]

    var svgContainer = d3.select("svg#graph9")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    var causesText = svgContainer
        .selectAll("text")
        .data(causes)
        .enter()
        .append("text")
        .text(function (d) {return d;})
        .attr("x", w/2)
        .attr("y", -100)
        .attr("font-size", "70px")
        .attr("font-family", "adobe-garamond-pro")
        .attr("text-anchor", "middle")
        .style("fill", "rgb(47,79,120)")
        .transition()
        .delay(function(d,i) {return 800 + i*500;})
        .duration(2000)
        .attr("y", function(d,i) {return h/3 + 30 + i * 100;});

    var topText = svgContainer
        .append("text")
        .text("and globally, very little progress has been made in decreasing deaths due to")
        .attr("x", w/2)
        .attr("y", h/4 - 50)
        .attr("font-size", "30px")
        .attr("font-family", "adobe-garamond-pro")
        .attr("text-anchor", "middle")
        .style("fill", "rgb(47,79,120)");


};
    
function tenthVis() {
        var w = getWidth();
    var h = 200;

    var causes = ["Road Injuries", "Interpersonal Violence", "Self-harm"]

    var svgContainer = d3.select("svg#graph10")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    var topText = svgContainer
        .append("text")
        .text("So if we really want to decrease adolescent deaths, we will have to")
        .attr("x", w/2)
        .attr("y", h/2)
        .attr("font-size", "30px")
        .attr("font-family", "adobe-garamond-pro")
        .attr("text-anchor", "middle")
        .style("fill", "rgb(47,79,120)");


};

function lastVis() {

var w = getWidth();
var h = 600;
var padding = 100;
var mergedRadius = 15;
var data = [];

var textArray = [{"text": "work", "x": w/5, "y": 2*h/5, "size": 30, "text2": "and address", "x2" : w/3, "y2": h/3, "size2": 33}, 
                {"text":"across", "x": w/3, "y" : 3*h/5, "size": 88, "text2": "mental", "x2" : w/2, "y2": h/2, "size2": 88},
                {"text": "sectors", "x" : w/2, "y": 4*h/5, "size": 88, "text2": "health.", "x2" : 2*w/3, "y2": 2*h/3, "size2": 66} ]


for (var i = 1; i <= 4; i++) {
data.push(i);
}


var svgContainer = d3.select("svg#graph-last")
.append("svg")
.attr("width", w)
.attr("height", h);

var sectorCircle = svgContainer
.selectAll("circle")
.data(data)
.enter()
.append("circle")
.attr("cx", function(d) {if (d%2 == 0) {return w - padding ;} else {return padding;}})
.attr("cy", function(d) {if (d <= 2) {return padding;} else {return h - padding;}})
.attr("r", padding)
.attr("fill", function() {return randomColor()});

var moveCircle = sectorCircle
.transition()
.delay(1000)
.duration(1000)
.attr('transform', function (d) {return "rotate(" + 8 * Math.PI +")"})
.attr("r", function() {return Math.random()*w/2}) ;

var mergeCircles = moveCircle
.transition()
.delay(2000)
.duration(2500)
.ease("bounce")
.attr("cx", h/2)
.attr("cy", w/2)
.attr("r", w/2)
.style("opacity", 0.3);

var colorSpace = mergeCircles
.transition()
.delay(3500)
.duration(4000)  
.attr("fill", "#00ccff")  
.ease("linear")
.attr("r", w*2)
.style("opacity", 0.2);

var text1 = svgContainer
.selectAll("text")
.data(textArray)
.enter()
.append("text")
.text(function(d) {return d["text"];})
.attr("x", function(d) {return d["x"];})
.attr("y", function(d) {return d["y"];})
.attr("font-size", function(d) {return d["size"];})
.attr("font-family", "adobe-garamond-pro")
.attr("text-anchor", "middle")
.style("fill", "rgb(47,79,120)")
.transition()
.delay(5000)
.duration(1500)
//.attr("font-size", "60px")
.tween("text", function (d) {
        var newText = d["text2"];
        var textLength = newText.length;
        return function (t) {
            this.textContent = newText.substr(0, 
                               Math.round( t * textLength) );
        };  })
.attr("x", function(d) {return d["x2"];})
.attr("y", function(d) {return d["y2"];})
.attr("font-size", function(d) {return d["size2"];});
  
var brainImage = svgContainer
.append("svg:image")
.attr("xlink:href", "mental-health.png") //https://pixabay.com/en/mental-health-brain-mind-mental-3332122/
.attr("x", 0)
.attr("y", 0)
.attr("width", w)
.attr("height", h)
.style("opacity", 0)
.transition()
.delay(5000)
.duration(1000)
.style("opacity", 0.07);

var text2 = svgContainer  
.selectAll("text")
.data(textArray)
.enter()
.append("text")
.text(null)
.attr("x", function(d) {return d["x"];})
.attr("y", function(d) {return d["y"];})
.attr("font-size", function(d) {return d["size"];})
.attr("font-family", "adobe-garamond-pro")
.attr("text-anchor", "middle")
.style("opacity", 1)
.style("fill", "rgb(47,79,120)")
.transition()
.delay(function(d,i) {return 5000 + i * 1000;})
.duration(500)
.text(function(d) {return this.textContent = d["text"].slice(0, Math.round (d * d["text"].length));})



/*
var text = svgContainer  
.append("text")
.text("3'000")
.attr("x", w/2)
.attr("y", h/2)
.attr("text-anchor", "middle")
.attr("font-family", "courier new")
.attr("font-size", "80px")
.style("fill", "white")
.transition()
//   .ease("bounce")
.delay(3000)
.duration(4000)
.tween("text", function () {
        var newText = " deaths a day.";
        var textLength = newText.length;
        return function (t) {
            this.textContent = "3'000" + newText.slice(0, 
                               Math.round( t * textLength) );
        };
    })

.attr("font-size", "40px")
.style("fill", "black");

*/


    };



var isSecond;
var isThird;    // Boolean signals isThird completion
var isFourth;
var isFifth;
var isSixth; // how are boys dying? 
var isSeventh; // scatter
var isEighth;
var isNinth;
var isTenth;
var isLast;

window.onload = function() {
isSecond = false;
isThird = false;
isFourth = false;
isFifth = false;
isSixth = false;
isSeventh = false;
isEighth = false;
isNinth = false;
isTenth = false;
isLast = false;
}
    
firstVis();

    function scrollDown() {
        var distance = window.pageYOffset;      // Distance from the page top
        
        // After certain distance

        if (distance >= 250 && isSecond == false) {
            isSecond = true;
            secondVis();
        }

        else if (distance >= 760 && isThird == false) {
            isThird = true;
            thirdVis();
        }

        else if (distance >= 1400 && isFourth == false) {
            isFourth= true;
            fourthVis();
        }


        else if (distance >= 1900 && isFifth == false) {
            isFifth = true;
            fifthVis();
        }

        else if (distance >= 2300 && isSixth == false) {
            isSixth = true;
            sixthVis();
        }

        else if (distance >= 2900 && isSeventh == false) {
            isSeventh = true;
            seventhVis();
        }

        else if (distance >= 3500 && isEighth == false) {
            isEighth = true;
            eighthVis();
        }

        else if(distance >= 3700 && isNinth== false) {
            isNinth = true;
            ninthVis();
        }

        else if(distance >= 4300 && isTenth == false) {
            isTenth = true;
            tenthVis();
        }

        else if(distance >= 4700 && isLast == false) {
            isLast = true;
            lastVis();
        }

    }        
