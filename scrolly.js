let svg = d3.select("#canvas");

svg.attr('width',500)
    .attr('height',500)

let spacing = 40;
let rows = 3;
let column = 10;

let data = d3.range(30).map(i => 5);

let rects = svg.selectAll('rect')
  .data(data)
  .join('rect')
  .attr('x', (d, i) => (i % column) * spacing)
  .attr('y', (d, i) => Math.floor(i / column) % rows * spacing)
  .attr('width', 30)
  .attr('height', 30)
  .attr('fill', 'black');

function grid() {
  rects.transition()
    .delay((d, i) => 10 * i)
    .duration(400)
    .attr('fill', 'black');
}

function grid2() {
  rects.transition()
    .delay((d, i) => 10 * i)
    .duration(400)
    .attr('fill', (d, i) => i < 17 ? 'brown' : 'lightgray');
}

function grid3() {
  rects.transition()
    .delay((d, i) => 10 * i)
    .duration(400)
    .attr('fill', (d, i) => i < 12 ? 'blue' : 'lightgray');
}

function grid4() {
  rects.transition()
    .delay((d, i) => 10 * i)
    .duration(400)
    .attr('fill', (d, i) => i === 0 ? 'green' : 'lightgray');
}

function scroll(n, offset, func1, func2){
  return new Waypoint({
    element: document.getElementById(n),
    handler: function(direction) {
      direction == 'down' ? func1() : func2();
    },
    offset: offset
  });
};

new scroll('div2', '75%', grid2, grid);
new scroll('div3', '75%', grid3, grid2);
new scroll('div4', '75%', grid4, grid3);