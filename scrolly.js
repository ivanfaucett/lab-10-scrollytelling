//grab our canvas 
let svg = d3.select("#canvas");

//set the width and height
svg.attr('width',500)
    .attr('height',500)

//set up grid spacing
let spacing = 40;
let rows = 3;
let column = 10;
