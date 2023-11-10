import React, {useState, useEffect, useRef} from "react";
import * as d3 from 'd3';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Account.css";

function Account() {
  const icon = <KeyboardArrowDownIcon style={{ width: 10 }} />;
  const initialData = [
    {
      name: "09",
      value: 50,
    },
    {
      name: "10",
      value: 60,
    },
    {
      name: "11",
      value: 85,
    },
    {
      name: "12",
      value: 75,
    },
    {
      name: "13",
      value: 45,
    },
    {
      name: "14",
      value: 55,
    },
    {
      name: "15",
      value: 70,
    },
    {
      name: "16",
      value: 58,
    },
    {
      name: "17",
      value: 35,
    },
    {
      name: "18",
      value: 50,
    },
  ];

  const width = 500;
  const height = 130;
  const padding = 20;
  const maxValue = 100; // Maximum data value

  const [chartdata, setChartdata] = useState(initialData);

  const svgRef = useRef();

  //  2] Setup random data generator and SVG canvas -//
  const newData = () =>
    chartdata.map(function (d) {
      d.value = Math.floor(Math.random() * (maxValue + 1));
      return d;
    });

  useEffect(() => {
    //  3] Setup functions for Scales ------------------//

    //xscales
    const xScale = d3
      .scalePoint()
      .domain(chartdata.map((d) => d.name))
      .range([0 + padding, width - padding]);

    //Yscales
    const yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(chartdata, function (d) {
          return d.value;
        }),
      ])
      .range([height - padding, 0 + padding]);


    //  4] Setup functions to draw Lines ---------------//

    const line = d3
      .line()
      .x((d) => xScale(d.name))
      .y((d) => yScale(d.value))
      .curve(d3.curveNatural);


    //  5] Draw line        ---------------------------//
    d3.select(svgRef.current)
      .select("path")
      .attr("d", (value) => line(chartdata))
      .attr("fill", "none")
      .attr("stroke", "green");

    //  6] Setup functions to draw X and Y Axes --------//
    const xAxis = d3.axisBottom(xScale);

    //  7] Draw x and y Axes   -------------------------//
    d3.select("#xaxis").remove();
    d3.select(svgRef.current)
      .append("g")
      .attr("transform", `translate(0,${height - padding})`)
      .attr("id", "xaxis")
      .attr("color", "lightGray")
      .style('font-size', '10px')
      .call(xAxis);

  }, [chartdata]);
  
  return (
    <div className="account">
      <div className="header">
        <h3>Checking account</h3>
        <div className="buttons">
          <button onClick={() => setChartdata(newData())}>
            {<div className="buttons__inner">
              <div>Manage</div>
              <div>{icon}</div>
            </div>
              }</button>
          <button onClick={() => setChartdata(newData())}>
          {<div className="buttons__inner">
              <div>January</div>
              <div>{icon}</div>
            </div>
              }</button>
        </div>
      </div>
      <div>
      <svg id="chart" ref={svgRef} viewBox="0 0 500 150">
        <path d="" fill="none" stroke="bright teal" strokeWidth="2" />
      </svg>
    </div>
    </div>
  );
}

export default Account;
