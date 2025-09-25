const createBarChart = (data) => {
    const barHeight = 16;
    const barGap = 8;
    const svg = d3.select(".responsive-svg-container")
        .append("svg")
        .attr("viewBox", "0 0 1200 400")
        .style("border", "1px solid black");
    svg
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", d => `bar bar-${d.count}`)
        .attr("x", 0)
        .attr("y", (d, i) => i * (barHeight + barGap))
        .attr("width", d => d.count)
        .attr("height", barHeight);
};