const d3 = require('d3');
const $ = require('jquery');

const dataSet = require('./GDP-data.json').data;
const years = dataSet
  .filter(d => {
    const year = d[0].split('-');
    return year[1] === '01';
  })
  .map(d => {
    return d[0].split('-')[0];
  });

const width = 1000;
const height = 500;
const padding = 30;

const xScale = d3
  .scaleLinear()
  .domain([d3.min(years), d3.max(years)])
  .range([0, width]);

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataSet, d => d[1])])
  .range([0, width]);

const chart = d3
  .select('#chart')
  .attr('width', width)
  .attr('height', height);

/* Bars */
chart
  .selectAll('rect')
  .data(dataSet, d => {
    return 0;
  })
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 30)
  .attr('y', (d, i) => height - d[1])
  .attr('width', 30)
  .attr('height', d => d[1])
  .attr('class', 'bar');

/* Hover */
chart.selectAll('rect').on('mouseover', d => {
  console.debug(d);
});

/* Left Label */
const leftAxis = d3.axisLeft(yScale);

chart
  .append('g')
  .attr('transform', `translate(${padding + 20}, 5)`)
  .call(leftAxis);

/* Bottom Label */
const botAxis = d3.axisBottom(xScale);

chart
  .append('g')
  .attr('transform', `translate(0, ${height - padding})`)
  .call(botAxis);
