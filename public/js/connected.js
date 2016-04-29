//set margins
	var margin = {top: 20, right: 80, bottom: 30, left: 50},
	    width = 800 - margin.left - margin.right,
	    height = 400 - margin.top - margin.bottom;

//attach svg to page
// Define the div for the tooltip
	var tool = d3.select(".container").append("div")
    	.attr("class", "tooltip")
    	.style("opacity", 0);

	var svg1 = d3.select(".connected").append("svg")
			    .attr("width", width + margin.left + margin.right)
			    .attr("height", height + margin.top + margin.bottom)
			  .append("g")
			    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//parsing data
	var parseDate = d3.time.format("%Y").parse;

//setting ranges
	var x = d3.time.scale().range([0, width]);
	var y = d3.scale.linear().range([height, 0]);


	var color = d3.scale.ordinal()
  .range(["508991"]);

//axes defined
	var xAxis = d3.svg.axis()
	    .scale(x)
	    .orient("bottom");

	var yAxis = d3.svg.axis()
	    .scale(y)
	    .orient("left");

//lines defined
	var line = d3.svg.line()
	    .interpolate("linear")
	    .x(function(d) { return x(d.year); })
	    .y(function(d) { return y(d.revenue); });

//pull in data from file
	d3.tsv("js/devices.txt", function(error, data) {
	  if (error) throw error;

	  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "year"; }));

	  data.forEach(function(d) {
	    d.year = parseDate(d.year);
	  });

	  var ages = color.domain().map(function(name) {
	    return {
	      name: name,
	      values: data.map(function(d) {
	        return {year: d.year, revenue: +d[name]};
	      })
	    };
	  });

	  x.domain(d3.extent(data, function(d) { return d.year; }));

	  y.domain([
	    d3.min(ages, function(c) { return d3.min(c.values, function(v) { return v.revenue; }); }),
	    d3.max(ages, function(c) { return d3.max(c.values, function(v) { return v.revenue; }); })
	  ]);

//adding x axis
	  svg1.append("g")
	      .attr("class", "x axis")
	      .attr("transform", "translate(0," + height + ")")
	      .call(xAxis);

//adding y axis
	  svg1.append("g")
	      .attr("class", "y axis")
	      .call(yAxis)
	    .append("text")
	      .attr("transform", "rotate(-90)")
	      .attr("y", 6)
	      .attr("dy", ".71em")
	      .style("text-anchor", "end")
	      .text("Market Revenue (in billions)");

	  var age = svg1.selectAll(".age")
	      .data(ages)
	    .enter().append("g")
	      .attr("class", "age");

//adding line
	  age.append("path")
	      .attr("class", "line")
	      .attr("d", function(d) { return line(d.values); })
	      .style("stroke", "#508991");

//adding dot points and tooltip
		age.selectAll(".age")
    .data(function (d) { return d.values; })
		.enter().append("circle")
			.attr("class", "dot")
	    .attr("r", 5)
	    .attr("cx", function(d) { return x(d.year); })
	    .attr("cy", function(d) { return y(d.revenue); })
			.style("fill", "#508991")
			.on("mouseover", function(d) {
	        tool.transition()
	            .duration(200)
	            .style("opacity", .9);
	        tool.html("$" + d.revenue + " billion")
						.style("left", d3.select(this).attr("cx") + "px")
						.style("top", d3.select(this).attr("cy") + "px");
	        })
	    .on("mouseout", function(d) {
	        tool.transition()
	            .duration(500)
	            .style("opacity", 0);
	    });
	});
