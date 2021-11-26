makeTransactionLineChart();

function makeTransactionLineChart() {
    let ctx = document.getElementById("chart").getContext('2d');

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            datasets: [{
                label: "Income",
                backgroundColor: "#ffffff",
                borderColor: "#4B48FD",
                data: [8000, 900, 7000, 6000, 4000, 6500, 7500, 3200, 4500, 4000, 7000, 2000],
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
            tension: 0.4,
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

