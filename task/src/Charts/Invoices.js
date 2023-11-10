import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./Invoices.css";

function Invoices() {
  const [data] = useState([
    { name: "Older", value: 20 },
    { name: "Jan 01-08", value: 40 },
    { name: "Jan 09-16", value: 80 },
    { name: "Jan 17-24", value: 50 },
    { name: "Jan 25-31", value: 60 },
    { name: "Future", value: 40 },
  ]);
  const svgRef = useRef();

  useEffect(() => {
    const width = 500;
  const height = 130;

  const svg = d3.select(svgRef.current);

  const xScale = d3.scaleBand()
    .domain(data.map((d, i) => d.name))
    .range([0, width])
    .padding(0.8)

  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', d => xScale(d.name))
    .attr('y', d => height - d.value)
    .attr('width', xScale.bandwidth())
    .attr('height', d => d.value)
    .attr('fill', '#00C267')
    .attr('rx', 3)
    .attr('ry', 3)

  svg.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .text(d => d.name)
    .attr('x', d => xScale(d.name) + xScale.bandwidth() / 2)
    .attr('y', height)
    .attr('dy', '1.5em')
    .attr('text-anchor', 'middle')
    .style('font-size', '12px')
    .style('font-weight', 'bold')
    .attr('fill', 'lightGray')

  }, [data]);
  return (
    <div className="invoices">
      <div className="header">
        <h3>Invoices owed to you</h3>
        <div className="button">
          <button style={{ color: '#00E27C', backgroundColor: '#F9F5F5', width: 150, fontWeight: 'bold'}}>New Sales Invoice</button>
        </div>
      </div>
      <div>
        <svg id="chart" ref={svgRef} viewBox="0 0 500 220">
        </svg>
      </div>
    </div>
  );
}

export default Invoices;
