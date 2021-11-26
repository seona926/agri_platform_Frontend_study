const labels = [
    '2018',
    '2019',
    '2020'
  ];
  const data = {
    labels: labels,
    datasets: [
    {
        label: 'Datasest 1',
        backgroundColor: '#4B48FD',
        borderColor: '#4B48FD',
        data: [25000, 20000, 30000],
    },

    
    ]
  };

var ctx = document.getElementById('myChart').getContext('2d');

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        responsive: false,
        legend: {
            display: false
         },
        tooltips: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {
                    display: true,
                    fontSize: 10,
                    fontColor: '#909090',
                },
                barPercentage: 0.9,
                maxBarThickness: 60,
                minBarLength: 6,
                grid: {
                    drawBorder: true,
                    color: '#ffffff',
                    borderWidth: 2,
                    borderColor: '#383838',
                }
            }],
            yAxes: [{
                ticks: {
                    display: true,
                    beginAtZero: true,
                    fontSize: 10,
                    fontColor: '#909090',
                },
                gridLines: {
                    display: false
                }
            }]
        },
    },
});



const labels2 = [
    '2018',
    '2019',
    '2020'
  ];
  const data2 = {
    labels: labels2,
    datasets: [
    {
        label: 'Datasest 1',
        backgroundColor: '#4B48FD',
        borderColor: '#4B48FD',
        data: [25000, 20000, 30000],
        
    }],
    pointBorderColor: "#000",
    pointBackgroundColor: "rgba(255,255,255,0)",
    fill: false,
    tension: 0,
  };

var ctx = document.getElementById('myChart2').getContext('2d');

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data2,
    options: {
        responsive: false,
        legend: {
            display: false
         },
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
            xAxes: [{
                ticks: {
                    display: true,
                    
                },
                gridLines: {
                    display: false,
                    drawBorder: true,
                    lineWidth: 2, // zero line width
                    color: '#000' // zero line color
                },
                grid: {
                    drawBorder: true,
                    borderWidth: 3,
                    borderColor: '#000',
                },
                barPercentage: 0.3
            }],
            yAxes: [{
                ticks: {
                    display: true,
                    // beginAtZero: true,
                    fontSize: 10,
                    fontColor: '#909090',
                    stepSize: 5000,
                    min: -3000 // minimum value on yAxes
                },
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
                grid: {
                    drawBorder: false,
                    color: '#ffffff',
                }
            }],
            
        }
        
    }
    
});