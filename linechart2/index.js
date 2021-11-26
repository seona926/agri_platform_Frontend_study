makeChart();

function makeChart() {

    
    let ctx = document.getElementById("chart").getContext('2d');

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
                data: [12000, 29000, 15000],
                pointBorderColor: "#000",
                pointBackgroundColor: "rgba(255,255,255,0)",
                pointBorderWidth: 0,
                pointHoverRadius: 8,
                // pointHoverBackgroundColor: gradientStroke,
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 4,
                pointRadius: 1,
                borderWidth: 3,
                pointHitRadius: 16,
                fill: false,
                tension: 0,
                pointBorderColor: "#4B48FD",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 8,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
            }]
        },

        // Configuration options go here
        options: {
            maintainAspectRatio: false,
            responsive: false,
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
                        display: true,
                        padding: 2,
                        min: 2000
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
                        display: true,
                        padding: 40,
                        stepSize: (c) => ((Math.max(...c.chart.data.datasets[0].data) - Math.min(...c.chart.data.datasets[0].data)) / 2),
                        beginAtZero:true
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

