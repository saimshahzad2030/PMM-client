"use client";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const AreaChart = ({ data, color, currency }) => {
  // const [data, setData] = useState(data1);
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const parent = svg.node().parentNode;
    const width = parent.offsetWidth;
    const height = parent.offsetHeight;
    const margin = { top: 20, right: 70, bottom: 30, left: 40 };

    svg.selectAll("*").remove();

    const g = svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    const line = d3
      .line()
      .x((d) => x(d.date + 1))
      .y((d) => y(d.value + 1));
    const x = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date))
      .range([0, width - margin.left - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([20, d3.max(data, (d) => d.value)])
      .nice()
      .range([height - margin.top - margin.bottom, 0]);

    const area = d3
      .area()
      .x((d) => x(d.date))
      .y0(y(0))
      .y1((d) => y(d.value));

    const defs = g.append("defs");
    const gradient = defs
      .append("linearGradient")
      .attr("id", "areaGradient")
      .attr("x1", "50%")
      .attr("y1", "50%")
      .attr("x2", "50%")
      .attr("y2", "100%");
    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", color)
      .attr("stroke-width", 2)
      .attr("d", line);
    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", color)
      .attr("stop-opacity", 0.7);

    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "white")
      .attr("stop-opacity", 0);
    // g.selectAll('text.label')
    // .data(data)
    // .enter()
    // .append('text')
    // .attr('x', (d) => x(d.date) + 5)  // Adjust as needed
    // .attr('y', (d) => y(d.value) - 10)  // Adjust as needed
    // .text((d) => `$${d.value.toFixed(2)}`)  // Format value as USD
    // .style('font-size', '12px')
    // .style('fill', '#00AA30')
    // .style('font-family', 'Arial');
    g.append("path")
      .datum(data)
      .attr("fill", "url(#areaGradient)")
      .attr("d", area);

    const yAxisFormatter = (d) => `${currency}${d.toFixed(2)}`;

    const yAxis = d3
      .axisRight(y)
      .ticks(5)
      .tickSize(0)
      .tickFormat(yAxisFormatter);

    // g.append('g')
    //     .attr('transform', `translate(${width - margin.left - margin.right}, 0)`)
    //     .call(yAxis)
    //     .selectAll('text')
    //     .style('font-size', '12px')
    //     .style('font-family', 'Arial')
    //     .style('text-anchor', 'start')
    //     .attr('x', -20);
    const yAxisGroup = g
      .append("g")
      .attr("transform", `translate(${width - margin.left - margin.right}, 0)`)
      .call(yAxis);

    yAxisGroup
      .selectAll("text")
      .style("font-size", "12px")
      .style("font-family", "Arial")
      .style("text-anchor", "start")
      .attr("x", -20);
    yAxisGroup.select(".domain").attr("stroke", "none");
  }, [data]);

  return (
    <>
      <div className="w-full flex flex-col items-center border border-gray-700 py-8">
        <div className="w-full flex flex-row items-center justify-end m-4 pr-8">
          <button className={`button bg-white text-gray-800 mr-4`}>24H</button>
          <button className={`button bg-white text-gray-800 mr-4`}>3D</button>
          <button className={`button bg-white text-gray-800 mr-4`}>1W</button>
          <button className={`button bg-white text-gray-800 mr-4`}>3W</button>
          <button className={`button bg-white text-[#E3BB59] mr-4`}>1M</button>
          <button className={`button bg-white text-gray-800 mr-4`}>1Y</button>
        </div>
        <svg className="w-full h-auto" ref={svgRef}></svg>
      </div>
    </>
  );
};

export default AreaChart;
