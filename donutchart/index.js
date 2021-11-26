// set the dimensions and margins of the graph
var width = 450
    height = 450
    margin = 40

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
var data = [{"number": 20},{"number": 10},{"number": 30},{"number": 10},{"number": 5}]
// var data = [{"number": 20},{"number": 10},{"number": 30},{"number": 10},{"number": 5}]

// set the color scale
var color = d3.scaleOrdinal(['#9848FD','#3DC282','#3CC1EB','#487BFD','#6148FD'])



// Compute the position of each group on the pie:
var pie = d3.pie()
  .sort(null) // Do not sort group by size
  .value(function(d) {return d.number; })
var data_ready = pie(d3.entries(data))

// The arc generator
var arc = d3.arc()
  .innerRadius(radius * 0.2)         // This is the size of the donut hole
  .outerRadius(radius * 0.5)
  
var biggestarc = d3.arc()
    .innerRadius(radius * 0.2)         // This is the size of the donut hole
    .outerRadius(radius * 0.6)

var g = svg.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
    .attr("class", "arc");

g.append("path")
    .attr("d", function (d) {
    console.log(d)
    console.log(data_ready)

    if (d.data.number >= 30) {
        return biggestarc(d);
    } else {
        return arc(d)
    }
})
    .style("fill", function (d) {
    return color(d.data.number);
});

// Another arc that won't be drawn. Just for labels positioning
var outerArc = d3.arc()
  .innerRadius(radius * 0.9)
  .outerRadius(radius * 0.9)

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('allSlices')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', arc)
  .attr('fill', function(d){ return(color(d.data.key)) }) // d.data.key 맞는지?
  .attr("stroke", "white")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)



  
// Add the polylines between chart and labels:
svg
  .selectAll('allPolylines')
  .data(data_ready)
  .enter()
  .append('polyline')
    .attr("stroke", function(d){ return(color(d.data.number)) }) // 파이색상과 같은 색상의 라인
    .style("fill", "none")
    .attr("stroke-width", 2)
    .attr('points', function(d) {
      var posA = arc.centroid(d) // line insertion in the slice
      var posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
      var posC = outerArc.centroid(d); // Label position = almost the same as posB
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
      posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
      return [posA, posB, posC]
    })

// Add the polylines between chart and labels:
svg
  .selectAll('allLabels')
  .data(data_ready)
  .enter()
  .append('text')
    .text( function(d) { console.log(d.data.key) ; return d.data.value.number } )
    .attr('transform', function(d) {
        var pos = outerArc.centroid(d);
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
        return 'translate(' + pos + ')';
    })
    .style('text-anchor', function(d) {
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        return (midangle < Math.PI ? 'start' : 'end')
    })
    .style('fill', function(d){ return(color(d.data.number)) })





// var svg = d3.select("body")
// 	.append("svg")
// 	.append("g")

// svg.append("g")
// 	.attr("class", "slices");
// svg.append("g")
// 	.attr("class", "labels");
// svg.append("g")
// 	.attr("class", "lines");

// var width = 960,
//     height = 450,
// 	radius = Math.min(width, height) / 2;

// var pie = d3.layout.pie()
// 	.sort(null)
// 	.value(function(d) {
// 		return d.value;
// 	});


// var arc = d3.svg.arc()
// 	.outerRadius(radius * 0.8)
// 	.innerRadius(radius * 0.4);

// var outerArc = d3.svg.arc()
// 	.innerRadius(radius * 0.9)
// 	.outerRadius(radius * 0.9);


// svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// var key = function (d) { return d.data.label; };

// var color = d3.scale.ordinal()
//     .domain(["Lorem ipsum", "dolor sit", "amet", "in", "lee"])
//     .range(["#9848FD", "#3DC282", "#3CC1EB", "#487BFD", "#6148FD"]);

// function randomData() {
//     var labels = color.domain();
//     return labels.map(function (label) {
//         return { label: label, value: Math.random() }
//     });
// }


// var data = [1, 2, 3, 4, 5];
// change(data);

// d3.select(".randomize")
//     .on("click", function () {
//         change(randomData());
//     });


// function change(data) {

//     /* ------- PIE SLICES -------*/
    

//     var slice = svg.select(".slices").selectAll("path.slice")
//         .data(pie(data), key);

//     slice.enter()
//         .insert("path")
//         .style("fill", function (d) { return color(d.data.label); })
//         .attr("class", "slice");

//     slice
//         .transition().duration(1000)
//         .attrTween("d", function (d) {
//             this._current = this._current || d;
//             var interpolate = d3.interpolate(this._current, d);
//             this._current = interpolate(0);
//             return function (t) {
//                 return arc(interpolate(t));
//             };
//         })

//     slice.exit()
//         .remove();

//     /* ------- TEXT LABELS -------*/

//     var text = svg.select(".labels").selectAll("text")
//         .data(pie(data), key);

//     text.enter()
//         .append("text")
//         .attr("dy", ".35em")
//         .text(function (d) {
//             return d.data.label;
//         });

//     function midAngle(d) {
//         return d.startAngle + (d.endAngle - d.startAngle) / 2;
//     }

//     text.transition().duration(1000)
//         .attrTween("transform", function (d) {
//             this._current = this._current || d;
//             var interpolate = d3.interpolate(this._current, d);
//             this._current = interpolate(0);
//             return function (t) {
//                 var d2 = interpolate(t);
//                 var pos = outerArc.centroid(d2);
//                 pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
//                 return "translate(" + pos + ")";
//             };
//         })
//         .styleTween("text-anchor", function (d) {
//             this._current = this._current || d;
//             var interpolate = d3.interpolate(this._current, d);
//             this._current = interpolate(0);
//             return function (t) {
//                 var d2 = interpolate(t);
//                 return midAngle(d2) < Math.PI ? "start" : "end";
//             };
//         });

//     text.exit()
//         .remove();

//     /* ------- SLICE TO TEXT POLYLINES -------*/

//     var polyline = svg.select(".lines").selectAll("polyline")
//         .data(pie(data), key);

//     polyline.enter()
//         .append("polyline");

//     polyline.transition().duration(1000)
//         .attrTween("points", function (d) {
//             this._current = this._current || d;
//             var interpolate = d3.interpolate(this._current, d);
//             this._current = interpolate(0);
//             return function (t) {
//                 var d2 = interpolate(t);
//                 var pos = outerArc.centroid(d2);
//                 pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
//                 return [arc.centroid(d2), outerArc.centroid(d2), pos];
//             };
//         });

//     polyline.exit()
//         .remove();
// };

/*
arcs.append("svg:text")
    .attr("transform", function (d){
        var c = arc.centroid(d); 
        x = c[0];
        y = c[1]; 
        h = Math.sqrt(x*x + y*y);  
    return "translate(" + (x/h * 100) + ',' + 
        (y/h * 90) + ")";
    })
    .text(function(d){return Math.round((d.data/total)*100)+"%";})
    .attr("text-anchor","middle")
    .attr("fill","color_data.pop()");

arcs.append("svg:text")
    .attr("transform", function(d) {
        var c = arc.centroid(d),
            x = c[0],
            y = c[1],
            // pythagorean theorem for hypotenuse
            h = Math.sqrt(x*x + y*y);
        return "translate(" + (x/h * labelr) +  ',' +
           (y/h * labelr) +  ")"; 
    })
    .attr("dy", ".35em")
    .attr("fill", function(d, i) { return color(i); })
    .attr("text-anchor", function(d) {
        // are we past the center?
        return (d.endAngle + d.startAngle)/2 > Math.PI ?
            "end" : "start";
    })
    .text(function(d, i) { return d.value.toFixed(2); });


*/

///////////////////////////////////////////

// var width = 960,
//     height = 500,
//     radius = Math.min(width, height) / 2;

// var color = d3.scale.ordinal()
//     .range(["orange", "gray", "cyan", "brown"]);

// var biggestarc = d3.svg.arc()
//     .outerRadius(radius - 80)
//     .innerRadius(radius - 10);

// var bigarc = d3.svg.arc()
//     .outerRadius(radius - 30)
//     .innerRadius(radius - 60);

// var smallarc = d3.svg.arc()
//     .outerRadius(radius - 40)
//     .innerRadius(radius - 50);
    
// var biggerarc = d3.svg.arc()
//     .outerRadius(radius - 20)
//     .innerRadius(radius - 70);

// var labelarc = d3.svg.arc()
//     .outerRadius(radius + 70)
//     .innerRadius(radius);

// var pie = d3.layout.pie()
//     .sort(null)
//     .value(function (d) {
//     return d.percent;
// });

// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .append("g")
//     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");



// data = [{
//     "label": "Biggest",
//         "percent": 25
// }, {
//     "label": "Bigger",
//     "percent": 10
// }, {
//     "label": "Big",
//     "percent": 65
// }, {
//     "label": "Small",
//     "percent": 30
// }]

// var g = svg.selectAll(".arc")
//     .data(pie(data))
//     .enter().append("g")
//     .attr("class", "arc");

// g.append("path")
//     .attr("d", function (d) {
//     console.log(d)
//     if (d.data.label == "Biggest") {
//         return biggestarc(d);

//     } else if (d.data.label == "Bigger") {
//         return biggerarc(d);

//     } else if (d.data.label == "Big") {
//         return bigarc(d);

//     } else {
//         console.log("target")
//         return smallarc(d);
//     }
// })
//     .style("fill", function (d) {
//     return color(d.data.label);
// });


