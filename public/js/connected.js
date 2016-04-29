// //set margins
// 	var margin = {top: 20, right: 80, bottom: 30, left: 50},
// 	    width = 960 - margin.left - margin.right,
// 	    height = 500 - margin.top - margin.bottom;
//
// //attach svg to page
// // Define the div for the tooltip
// 	var tool = d3.select(".connected").append("div")
//     	.attr("class", "tooltip")
//     	.style("opacity", 0);
//
// 	var svg1 = d3.select(".connected").append("svg")
// 			    .attr("width", width + margin.left + margin.right)
// 			    .attr("height", height + margin.top + margin.bottom)
// 			  .append("g")
// 			    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
// //parsing data
// 	var parseDate = d3.time.format("%Y").parse;
//
// //setting ranges
// 	var x = d3.time.scale().range([0, width]);
// 	var y = d3.scale.linear().range([height, 0]);


	// var color = d3.scale.ordinal()
  // .domain(["All","18-29","30-49","50-64","65+"])
  // .range(["#b0d5c3", "#6F020E", "#de6344", "#ff8a6d", "#FFB191"]);

// //axes defined
// 	var xAxis = d3.svg.axis()
// 	    .scale(x)
// 	    .orient("bottom");
//
// 	var yAxis = d3.svg.axis()
// 	    .scale(y)
// 	    .orient("left");
//
// //lines defined
// 	var line = d3.svg.line()
// 	    .interpolate("linear")
// 	    .x(function(d) { return x(d.year); })
// 	    .y(function(d) { return y(d.devices); });
//
// //pull in data from file
// 	d3.tsv("js/devices.txt", function(error, data) {
// 	  if (error) throw error;

	  // color.domain(d3.keys(data[0]).filter(function(key) { return key !== "year"; }));

	  // data.forEach(function(d) {
	  //   d.year = parseDate(d.year);
	  // });
		//
	  // var ages = color.domain().map(function(name) {
	  //   return {
	  //     name: name,
	  //     values: data.map(function(d) {
	  //       return {year: d.year, devices: +d[name]};
	  //     })
	  //   };
	  // });

	  // x.domain(d3.extent(data, function(d) { return d.year; }));
		// y.domain(d3.extent(data, function(d) { return d.devices; }));

	  // y.domain([
	  //   d3.min(ages, function(c) { return d3.min(c.values, function(v) { return v.devices; }); }),
	  //   d3.max(ages, function(c) { return d3.max(c.values, function(v) { return v.devices; }); })
	  // ]);

// //adding x axis
// 	  svg1.append("g")
// 	      .attr("class", "x axis")
// 	      .attr("transform", "translate(0," + height + ")")
// 	      .call(xAxis);
//
// //adding y axis
// 	  svg1.append("g")
// 	      .attr("class", "y axis")
// 	      .call(yAxis)
// 	    .append("text")
// 	      .attr("transform", "rotate(-90)")
// 	      .attr("y", 6)
// 	      .attr("dy", ".71em")
// 	      .style("text-anchor", "end")
// 	      .text("Number of Devices (In Billions)");

	  // var age = svg.selectAll(".age")
	  //     .data(ages)
	  //   .enter().append("g")
	  //     .attr("class", "age");

//adding line
	  // age.append("path")
	  //     .attr("class", "line")
	  //     .attr("d", function(d) { return line(d.values); })
	  //     .style("stroke", function(d) { return color(d.name); });

// 		svg1.append("path")
// 				.attr("class", "line")
// 				.attr("d", line);
// });
//
// function type(d) {
//   d.date = parseDate.parse(d.date);
//   d.close = +d.devices;
//   return d;
// }

// //adding dot points and tooltip
// 		age.selectAll(".age")
//     .data(function (d) { return d.values; })
// 		.enter().append("circle")
// 			.attr("class", "dot")
// 	    .attr("r", 5)
// 	    .attr("cx", function(d) { return x(d.year); })
// 	    .attr("cy", function(d) { return y(d.devices); })
// 			.style("stroke", "#50514F")
// 			.style("fill-opacity", "0")
// 			.style("stroke-width", "2px")
// 			.on("mouseover", function(d) {
// 	        tool.transition()
// 	            .duration(200)
// 	            .style("opacity", .9);
// 	        tool.html(d.devices + "%")
// 						.style("left", d3.select(this).attr("cx") + "px")
// 						.style("top", d3.select(this).attr("cy") + "px");
// 	        })
// 	    .on("mouseout", function(d) {
// 	        tool.transition()
// 	            .duration(500)
// 	            .style("opacity", 0);
// 	    });
//
// 	  age.append("text")
// 	      .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
// 	      .attr("transform", function(d) { return "translate(" + x(d.value.year) + "," + y(d.value.devices) + ")"; })
// 	      .attr("x", 10)
// 	      .attr("dy", ".35em")
// 	      .text(function(d) { return d.name; })
// 				.style("color", function(d) { return color(d.name); });
// 	});


var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

//parsing Data
var parseDate = d3.time.format("%Y").parse;

var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); });

var svg1 = d3.select(".connected").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("js/devices.txt", type, function(error, data) {
  if (error) throw error;

	data.forEach(function(d) {
	    d.year = parseDate(d.date);
	  });

  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain(d3.extent(data, function(d) { return d.close; }));

  svg1.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + 350 + ")")
      .call(xAxis);

  svg1.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Price ($)");

  svg1.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);
});

function type(d) {
  d.close = +d.close;
  return d;
}
