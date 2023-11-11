import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./CashFlow.css";

function CashFlow() {
  const [data] = useState([
    { name: "August", in: 40, out: 20 },
    { name: "September", in: 60, out: 30 },
    { name: "October", in: 80, out: 60 },
    { name: "November", in: 60, out: 50 },
    { name: "December", in: 60, out: 40 },
    { name: "January", in: 80, out: 30 },
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

  svg.selectAll('rect.in')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', d => xScale(d.name))
    .attr('y', d => height - d.in)
    .attr('width', xScale.bandwidth())
    .attr('height', d => d.in)
    .attr('fill', '#00C267')
    .attr('rx', 3)
    .attr('ry', 3)
    .attr('class', 'in')

    svg.selectAll('rect.out')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', d => xScale(d.name))
    .attr('y', d => height - d.out)
    .attr('width', xScale.bandwidth())
    .attr('height', d => d.out)
    .attr('fill', '#1E8A06')
    .attr('rx', 3)
    .attr('ry', 3)
    .attr('class', 'out')

  svg.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .text(d => d.name)
    .attr('x', d => xScale(d.name) + xScale.bandwidth() / 2)
    .attr('y', height)
    .attr('dy', '1.9em')
    .attr('text-anchor', 'middle')
    .style('font-size', '12px')
    .style('font-weight', 'bold')
    .attr('fill', '#E7E5E5')

  }, [data]);
  return (
    <div className="cashFlow">
      <div className="header">
        <h3>Total cash flow</h3>
        <div className="colorBox">
            <div id="in"></div>
            <label style={{ marginRight: 20, fontSize: 15}}>In</label>
            <div id="out"></div>
            <label style={{ fontSize: 15}}>Out</label>
        </div>

      </div>
      <div>
        <svg id="chart" ref={svgRef} viewBox="0 0 500 220">
        </svg>
      </div>
    </div>
  );
}

export default CashFlow;
