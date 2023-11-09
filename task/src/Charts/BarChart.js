import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

function BarChart() {
  const [data] = useState([
                      {label: 'Older', value: 20},
                      {label: 'Jan 01-08', value: 40},
                      {label: 'Jan 09-16', value: 80},
                      {label: 'Jan 17-24', value: 50},
                      {label: 'Jan 25-31', value: 60},
                      {label: 'Future', value: 40},]);
  const svgRef = useRef();

  useEffect(() => {
    const w = 400;
    const h = 100;
    const svg = d3.select(svgRef.current)
        .attr('width', w)
        .attr('height', h)
        .style('background', "#FFFFFF");
    
    const xScale = d3.scaleBand()
        .domain(data.map((val, i) => i))
        .range([0, w])
        .padding(0.8);

    const yScale = d3.scaleLinear()
          .domain([0, h])
          .range([h, 0]);

    svg.selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('x', (v, i) => xScale(i))
      .attr('y', yScale)
      .attr('width', xScale.bandwidth())
      .attr('height', val => h - yScale(val))
      .attr('fill', 'green')
      .attr('stroke', 'green')
      .attr('rx', 3)
      .attr('ry', 3);
  }, [data]);
  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  )
}

export default BarChart;
