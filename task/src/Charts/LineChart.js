import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

function LineChart() {
    const [data] = useState([50, 60, 85, 80, 45, 60, 55, 35, 45, 50]);
    const svgRef = useRef();

    useEffect(() => {
        const w = 400;
        const h = 100;
        const svg = d3.select(svgRef.current)
            .attr('width', w)
            .attr('height', h)
            .style('background', '#FFFFFF');

        const xScale = d3.scaleLinear()
            .domain([0, data.length - 1])
            .range([0, w]);

        const yScale = d3.scaleLinear()
            .domain([0, h])
            .range([h, 0]);

        const generateScaledLine = d3.line()
            .x((d, i) => xScale(i))
            .y(yScale)
            .curve(d3.curveNatural);

        svg.selectAll('.line')
            .data([data])
            .join('path')
            .attr('d', d => generateScaledLine(d))
            .attr('fill', 'none')
            .attr('stroke', 'green');
    }, [data])
  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  )
}

export default LineChart;
