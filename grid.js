var points = [
    [480, 200],
    [580, 400],
    [680, 100],
    [780, 300],
    [180, 300],
    [280, 100],
    [380, 400]
  ];
  
var line = d3.svg.line()
    .tension(0) // CatmullñRom
    .interpolate("cardinal-closed");
  
var svg = d3.select("body").append("svg")
    .datum(points)
    .attr("width", 960)
    .attr("height", 500);
  
svg.append("path")
    .style("stroke", "#ddd")
    .style("stroke-dasharray", "4,4")
    .attr("d", line);
  
svg.append("path")
    .attr("d", line)
    .call(transition);
  
function transition(path) {
    path.transition()
        .duration(7500)
        .attrTween("stroke-dasharray", tweenDash)
        .each("end", function() { d3.select(this).call(transition); });
  }
  
  function tweenDash() {
    var l = this.getTotalLength(),
        i = d3.interpolateString("0," + 1, l + "," + l);
    return function(t) { return i(t); };
  }