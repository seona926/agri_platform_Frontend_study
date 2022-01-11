var canvas3 = document.getElementById("myChart2");
new Chart(canvas3, {
  type: "line",
  data: {
    labels: [
      "2021.09.01",
      "2021.09.05",
      "2021.09.10",
      "2021.09.15",
      "2021.09.20",
      "2021.09.25",
    ],
    datasets: [
      {
        label: "A",
        yAxesGroup: "A",
        data: [10, 96, 30, 60, 20, 60],
        fill: false,
        borderColor: [
          // 라인컬러
          "#DD425A",
        ],
        pointStyle: "line", // legend 스타일
      },
      {
        label: "B",
        yAxesGroup: "B",
        data: [30, 20, 60, 40, 80, 90],
        fill: false,
        borderColor: ["#4B48FD"],
        pointStyle: "line",
      },
    ],
  },
  options: {
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
      },
    },
    yAxes: [
      {
        name: "A",
        type: "linear",
        position: "left",
        scalePositionLeft: true,
      },
      {
        name: "B",
        type: "linear",
        position: "right",
        scalePositionLeft: false,
        min: 0,
        max: 1,
      },
    ],
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            beginAtZero: true,
            drawBorder: false,
            borderDash: [3, 5],
            color: "#EAEAEA",
            lineWidth: 3,
          },
        },
      ],
    },
  },
});

var canvas4 = document.getElementById("myPieChart2");
new Chart(canvas4, {
  type: "doughnut",
  data: {
    labels: ["Basic", "Advance", "Premium"],
    datasets: [
      {
        label: "A",
        data: [30, 40, 30],
        backgroundColor: ["#9848FD", "#3DC282", "#3CC1EB"],
      },
    ],
  },
});
