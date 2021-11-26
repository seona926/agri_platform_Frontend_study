// set the dimensions and margins of the graph
var width = 250
    height = 120
    margin = 7

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// d3.select("#my_dataviz").attr("align","right");


// Create dummy data - 데이터 크기순으로 정렬한 후 첫번째 index 2개만 biggestarc 적용하면 될듯
var data = [
  {name: "미국", import: 40}, 
  {name: "베트남", import: 15}, 
  {name: "중국", import: 30}, 
  {name: "인도네시아", import: 22},
  {name: "말레이시아", import:17} 
]

var sortedData = data.sort(function (a, b) {
  return b.import - a.import;
});

console.log(sortedData);

// set the color scale
var color = d3.scaleOrdinal(['#9848FD','#3DC282','#3CC1EB','#487BFD','#6148FD'])

// Compute the position of each group on the pie:
var pie = d3.pie()
  .sort(null) // Do not sort group by size
  .value(function(d) {console.log(d); return d.value.import; })

var data_ready = pie(d3.entries(sortedData))

// The arc generator
var arc = d3.arc()
  .innerRadius(radius * 0.32)         // This is the size of the donut hole
  .outerRadius(radius * 0.65)

var biggestarc = d3.arc()
.innerRadius(radius * 0.32)         // This is the size of the donut hole
.outerRadius(radius * 0.75)  


// Another arc that won't be drawn. Just for labels positioning
var outerArc = d3.arc()
  .innerRadius(radius * 0.9)
  .outerRadius(radius * 0.9)

// 툴팁
var tooltip = d3.select("body")
.append("div")
.attr('class', 'tooltip');


// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('allSlices')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', function(d){
      if(d.data.key == 0) {
          return biggestarc(d)
      } else {
          return arc(d)
      }
  })
  .attr('fill', function(d){ return(color(d.data.key)) })
  .attr("stroke", function(d){ return(color(d.data.key)) })
  .style("stroke-width", "1px")
  .attr("text-anchor", "end")


  svg
  .selectAll('allSlices')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', function(d){
          return arc(d)
  })
  .attr('fill', function(d){ return(color(d.data.key)) })
  .attr("stroke", function(d){ return(color(d.data.key)) })
  .style("stroke-width", "1px")
  .attr("text-anchor", "end")
  .on("mouseout", function(d) {
    console.log("mouseout")
    d3.select(this)
    .transition().duration(200)
    .attr("d", arc)
    tooltip
    	.style('visibility', 'hidden');
  })
  .on("mousemove", function(d) {
    d3.select(this)
      .transition().duration(100)
      .attr("d", biggestarc)
      tooltip
      .attr('class', 'tooltip-data')
    	.style('visibility', 'visible')
      .style('position', 'absolute')
    	.style('left', d3.event.pageX + 'px')
    	.style('top', d3.event.pageY + 'px')
      .attr("dy", "0em")
      .text("line1")
      
    d3.select(this)
      .append("text")
        .attr("dy", "1em")
        .text("line2")
      // .text(d.data.value.name  + d.data.value.import + '%')
  })

// Add the polylines between chart and labels:
svg
  .selectAll('allPolylines')
  .data(data_ready)
  .enter()
  .append('polyline')
    .attr("stroke", function(d){ 
      if (d.data.key == 0 || d.data.key == 1){ // index가 0이나 1일 경우만 polyline 그려줌
        return(color(d.data.key)) 
      }
    })
    .style("fill", "none")
    .style("opacity", 1)
    .style("stroke-width", 2)
    .attr('points', function(d) {
      var posA = arc.centroid(d) // line insertion in the slice
      var posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
      var posC = outerArc.centroid(d); // Label position = almost the same as posB
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
      posC[0] = radius * 2.25 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
      return [posA, posB, posC]
    })

//---------------------polyline에 circle 넣기---------------------------------

// function midAngle(d) {
//   return d.startAngle + (d.endAngle - d.startAngle) / 2;
// }

// var circlesArc = d3.arc()
//   .innerRadius(radius * 0)
//   .outerRadius(radius * 0)

//   var polyline = svg.select(".lines").selectAll("polyline")
//   .data(pie(data_ready));

//   polyline.enter()
//   .append("polyline")
//   .merge(polyline)
//   .transition().duration(500)
//   .attrTween("points", function(d) {
//     this._current = this._current || d;
//     var interpolate = d3.interpolate(this._current, d);
//     this._current = interpolate(0);
//     return function(t) {
//       var d2 = interpolate(t);
//       var pos = outerArc.centroid(d2);
//       pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
//       return [arc2.centroid(d2), outerArc.centroid(d2), pos];
//     };
//   });

//   polyline.exit()
//     .remove();

//   var circles = svg.selectAll(".circles")
//   .data(pie(data_ready));

//   circles = circles.enter()
//     .append("circle")
//     .attr("class","circles")
//     .attr("r", 7)
//     .attr("fill", (d) => {return color(d.data.key)} )
//     .merge(circles)

//   circles.transition().duration(500)
//     .attrTween("transform", function(d) {
//       this._current = this._current || d;
//       var interpolate = d3.interpolate(this._current, d);
//       this._current = interpolate(0);
//       return function(t) {
//         var d2 = interpolate(t);
//         var pos = outerArc.centroid(d2);
//         pos[0] = radius * .95 * (midAngle(d2) < Math.PI ? 1 : -1);
//         return "translate("+ circlesArc.centroid(d2) +")";
//       };
//     })
//   circles.exit().remove();


//-------------------------------------------------------



// Add the polylines between chart and labels:
svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
    .text( function(d) { 
      console.log(d.data.value.name) ; 
      if (d.data.key == 0 || d.data.key == 1){
        return d.data.value.name
      } 
    })
    .attr('transform', function(d) {
        var pos = outerArc.centroid(d);
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        pos[0] = radius * 1.75 * (midangle < Math.PI ? 1 : -1);
        return 'translate(' + pos + ')';
    })
    .attr("dy", "-0.5em")
    .style('text-anchor', function(d) {
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        return (midangle < Math.PI ? 'start' : 'end')
    })
    .style('fill', function(d) {return(color(d.data.key))})
    .append('circle')


// svg
//   .selectAll('allLabels')
//   .append('circle')
//   .attr('cx', 100)
//   .attr('cy', 100)
//   .attr('r', 50)
//   .attr('stroke', 'black')
//   .attr('fill', '#69a3b2');

svg
.selectAll('allLabels')
.data(data_ready)
.enter()
.append('text')
.text( function(d) { 
  console.log(d.data.key) ;
  if (d.data.key == 0 || d.data.key == 1){
    return d.data.value.import + '%';
  }
})
.attr('transform', function(d) {
    var pos2 = outerArc.centroid(d);
    var midangle2 = d.startAngle + (d.endAngle - d.startAngle) / 2
    pos2[0] = radius * 1.75 * (midangle2 < Math.PI ? 1 : -1);
    return 'translate(' + pos2 + ')';
})
.attr("dy", "1.2em")
.style('text-anchor', function(d) {
    var midangle2 = d.startAngle + (d.endAngle - d.startAngle) / 2
    return (midangle2 < Math.PI ? 'start' : 'end')
})
.style('fill', function(d) {return(color(d.data.key))})


var slices = svg.selectAll('allSlices')

// 툴팁만들기

// d3
//   .selectAll('path')
// 	.data(data_ready)
// 	.on('mouseover', (d) => {
//   	tooltip
//       .attr('class', 'tooltip-data')
//     	.style('visibility', 'visible')
//       .style('position', 'absolute')
//     	.style('left', d3.event.pageX + 'px')
//     	.style('top', d3.event.pageY + 'px')
//       .text(d.data.value.import + '%');
// 	})
//   .on('mouseout', (d) => {
//   	tooltip
//     	.style('visibility', 'hidden');
// 	})




// 클릭시 슬라이스 커지게

// var g = svg.selectAll(".arc")
//       .data(pie(data))
//       .enter().append("g")
//       .attr("class", "arc");

//   g
//   .on("click", function(d) {
//     d3.select(this)
//         .attr("d", (d) => { return biggestarc(d) })
//   })


// svg
//   .on("mouseover", bigger)
//   .on("mouseout", smaller)

// function bigger() {
//   svg
//   .attr('d', function(d){
//     return biggestarc(d)
//   })
// }

// function smaller() {
//   svg
//   .attr('d', function(d){
//     return arc(d)
//   })
// }

// var g = svg.selectAll(".arc")
//     .data(pie(data_ready))
//     .enter().append("g")
//     .attr("class", "arc")
//     .on('mouseover', function() {
//       var current = this;  
//       d3.select(this).attr('d', (d) => {return biggestarc(d)});
//     })
//     .on('mouseout', function() {
//       var current = this;
//       current.attr('d', (d) => {return arc(d)});
//     })


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
