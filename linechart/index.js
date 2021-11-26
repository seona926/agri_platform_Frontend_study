makeChart();

function makeChart() {
    let ctx = document.getElementById("chart").getContext('2d');

    // var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    // gradientStroke.addColorStop(0, "#4B48FD");
    // gradientStroke.addColorStop(1, "#4B48FD");

    // var gradientBkgrd = ctx.createLinearGradient(0, 100, 0, 400);
    // gradientBkgrd.addColorStop(0, "#4B48FD");
    // gradientBkgrd.addColorStop(1, "#4B48FD");

    // let draw = Chart.controllers.line.prototype.draw;
    // Chart.controllers.line = Chart.controllers.line.extend({
    //     draw: function() {
    //         draw.apply(this, arguments);
    //         let ctx = this.chart.chart.ctx;
    //         let _stroke = ctx.stroke;
    //         ctx.stroke = function() {
    //             ctx.save();
    //             //ctx.shadowColor = 'rgba(244,94,132,0.8)';
    //             ctx.shadowBlur = 8;
    //             ctx.shadowOffsetX = 0;
    //             ctx.shadowOffsetY = 6;
    //             _stroke.apply(this, arguments)
    //             ctx.restore();
    //         }
    //     }
    // });

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["2018", "2019", "2020"],
            datasets: [{
                label: "Income",
                backgroundColor: "#ffffff",
                borderColor: "#4B48FD",
                data: [8000, 14000, 10000],
                pointBorderColor: "#000",
                pointBackgroundColor: "rgba(255,255,255,0)",
                pointBorderWidth: 0,
                pointHoverRadius: 8,
                // pointHoverBackgroundColor: gradientStroke,
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 4,
                pointRadius: 1,
                borderWidth: 5,
                pointHitRadius: 16,
                fill: false,
            }]
        },

        // Configuration options go here
        options: {
            tooltips: {
                backgroundColor:'#fff',
                displayColors: true,
                titleFontColor: '#000',
                bodyFontColor: '#000'
            }, 
            plugins: {
                legend: {
                    display: false
                },
            }, 
            scales: {
                x: {
                    ticks: {
                        display: true
                    },
                    gridLines: {
                        display: false,
                        drawBorder: true,
                    },
                    grid: {
                        drawBorder: true,
                        color: '#ffffff',
                        borderWidth: 2,
                        borderColor: '#383838',
                    }
                    
                },
                y: {
                    ticks: {
                        // Include a dollar sign in the ticks
                        // callback: function(value, index, values) {
                        //     return (value / 1000) + 'K';
                        // },
                        display: true,
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    grid: {
                        drawBorder: false,
                        color: '#ffffff',
                    }
                },
            }
            
        }
    });
}

