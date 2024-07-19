//pie-chart
var chart = document.querySelector("#pie-chart");
var options = {
  series: [20, 80],
  chart: {
    width: 280,
    height: 280,
    type: "pie",
  },

  dataLabels: {
    enabled: false,
  },

  plotOptions: {
    pie: {
      vertical: true,
    },
  },
  labels: ["Budget Left", "Budget Delivered"],
  colors: ["#e1d0f7", "#6b12d9"],
  legend: {
    position: "bottom",
  },
  // Plugins: {
  //   labels: {
  //     position: "outside",
  //   },
  //   dataLabels: {
  //     formatter: (value) => {
  //       console.log(value);
  //       if (value >= 3) {
  //         return value;
  //       }
  //     },
  //   },
  // },
};
var chart = new ApexCharts(document.querySelector("#pie-chart"), options);
chart.render();

// //single line1
// var chart = document.querySelector("#chartline1");
// var options = {
//   chart: {
//     type: "bar",
//     height: 50,
//     toolbar: {
//       show: false,
//     },
//   },
//   plotOptions: {
//     bar: {
//       horizontal: true,
//       dataLabels: {
//         position: "true",
//       },
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   series: [
//     {
//       data: [100],
//     },
//   ],
//   xaxis: {
//     categories: ["Single Bar"],
//     labels: {
//       show: false,
//     },
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//   },
//   yaxis: {
//     show: false,
//   },
//   grid: {
//     show: false,
//   },
//   colors: ["#4ea135"],
// };
// var chart1 = new ApexCharts(document.querySelector("#chartline1"), options);
// chart1.render();

// //single line2
// var chart = document.querySelector("#chartline2");
// var options = {
//   chart: {
//     type: "bar",
//     height: 50,
//     toolbar: {
//       show: false,
//     },
//   },
//   plotOptions: {
//     bar: {
//       horizontal: true,
//       dataLabels: {
//         position: "top",
//       },
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   series: [
//     {
//       data: [100],
//     },
//   ],
//   xaxis: {
//     categories: ["Single Bar"],
//     labels: {
//       show: false,
//     },
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//   },
//   yaxis: {
//     show: false,
//   },
//   grid: {
//     show: false,
//   },
//   colors: ["#4ea135"],
// };
// var chart1 = new ApexCharts(document.querySelector("#chartline2"), options);
// chart1.render();

// //single line3
// var chart = document.querySelector("#chartline3");
// var options = {
//   chart: {
//     type: "bar",
//     height: 50,
//     toolbar: {
//       show: false,
//     },
//   },
//   plotOptions: {
//     bar: {
//       horizontal: true,
//       dataLabels: {
//         position: "top",
//       },
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   series: [
//     {
//       data: [100],
//     },
//   ],
//   xaxis: {
//     categories: ["Single Bar"],
//     labels: {
//       show: false,
//     },
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//   },
//   yaxis: {
//     show: false,
//   },
//   grid: {
//     show: false,
//   },
//   colors: ["#4ea135"],
// };
// var chart1 = new ApexCharts(document.querySelector("#chartline3"), options);
// chart1.render();

// //single line4
// var chart = document.querySelector("#chartline4");
// var options = {
//   chart: {
//     type: "bar",
//     height: 50,
//     toolbar: {
//       show: false,
//     },
//   },
//   plotOptions: {
//     bar: {
//       horizontal: true,
//       dataLabels: {
//         position: "top",
//       },
//     },
//   },
//   dataLabels: {
//     enabled: false,
//     offsetX: -6,
//     style: {
//       fontSize: "12px",
//       colors: ["#fff"],
//     },
//   },
//   series: [
//     {
//       data: [100],
//     },
//   ],
//   xaxis: {
//     categories: ["Single Bar"],
//     labels: {
//       show: false,
//     },
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//   },
//   yaxis: {
//     show: false,
//   },
//   grid: {
//     show: false,
//   },
//   colors: ["#4ea135"],
// };
// var chart1 = new ApexCharts(document.querySelector("#chartline4"), options);
// chart1.render();

// //single line5
// var chart = document.querySelector("#chartline5");
// var options = {
//   chart: {
//     type: "bar",
//     height: 50,
//     toolbar: {
//       show: false,
//     },
//   },
//   plotOptions: {
//     bar: {
//       horizontal: true,
//       dataLabels: {
//         position: "top",
//       },
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   series: [
//     {
//       data: [100],
//     },
//   ],
//   xaxis: {
//     categories: ["Single Bar"],
//     labels: {
//       show: false,
//     },
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//   },
//   yaxis: {
//     show: false,
//   },
//   grid: {
//     show: false,
//   },
//   colors: ["#f23030"],
// };
// var chart1 = new ApexCharts(document.querySelector("#chartline5"), options);
// chart1.render();

// //single line6
// var chart = document.querySelector("#chartline6");
// var options = {
//   chart: {
//     type: "bar",
//     height: 50,
//     toolbar: {
//       show: false,
//     },
//   },
//   plotOptions: {
//     bar: {
//       horizontal: true,
//       dataLabels: {
//         position: "top",
//       },
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   series: [
//     {
//       data: [100],
//     },
//   ],
//   xaxis: {
//     categories: ["Single Bar"],
//     labels: {
//       show: false,
//     },
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//   },
//   yaxis: {
//     show: false,
//   },
//   grid: {
//     show: false,
//   },
//   colors: ["#4ea135"],
// };
// var chart1 = new ApexCharts(document.querySelector("#chartline6"), options);
// chart1.render();

// //single line7
// var chart = document.querySelector("#chartline7");
// var options = {
//   chart: {
//     type: "bar",
//     height: 50,
//     toolbar: {
//       show: false,
//     },
//   },
//   plotOptions: {
//     bar: {
//       horizontal: true,
//       dataLabels: {
//         position: "top",
//       },
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   series: [
//     {
//       data: [100],
//     },
//   ],
//   xaxis: {
//     categories: ["Single Bar"],
//     labels: {
//       show: false,
//     },
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//   },
//   yaxis: {
//     show: false,
//   },
//   grid: {
//     show: false,
//   },
//   colors: ["#4ea135"],
// };
// var chart1 = new ApexCharts(document.querySelector("#chartline7"), options);
// chart1.render();

//bar-chart
var chart = document.querySelector("#chart");
var options = {
  series: [
    {
      name: "impressions",
      type: "column",
      data: [
        54, 64, 73, 73, 70, 72, 75, 60, 78, 88, 68, 80, 80, 82, 75, 80, 60, 64,
        63, 56, 78, 79, 65, 43, 63, 65, 45, 67, 75, 76, 90, 75, 64, 65, 76, 54,
        87, 98, 99, 99, 95, 45, 35, 40, 42, 42, 38, 35, 35, 38,
      ],
    },
    {
      name: "CTR",
      type: "line",
      data: [
        58, 68, 63, 59, 80, 82, 85, 70, 88, 98, 78, 90, 88, 92, 85, 90, 70, 74,
        83, 66, 88, 99, 75, 53, 73, 65, 45, 67, 75, 76, 90, 75, 64, 65, 76, 54,
        87, 98, 99, 99, 95, 45, 35, 40, 42, 42, 38, 35, 35, 38,
      ],
    },
  ],
  chart: {
    height: 900,
    type: "line",
  },
  stroke: {
    width: [0, 4],
  },
  dataLabels: {
    enabled: false,
  },
  labels: [
    "4 Aug",
    "6 Aug",
    "8 Aug",
    "10 Aug",
    "12 Aug",
    "14 Aug",
    "16 Aug",
    "18 Aug",
    "20 Aug",
    "22 Aug",
    "24 Aug",
    "26 Aug",
    "28 Aug",
    "30 Aug",
    "1 sep",
    "3 sep",
    "5 sep",
    "7 sep",
    "9 sep",
    "11 sep",
    "13 sep",
    "15 sep",
    "17 sep",
    "19 sep",
    "4 Aug",
    "6 Aug",
    "8 Aug",
    "10 Aug",
    "12 Aug",
    "14 Aug",
    "16 Aug",
    "18 Aug",
    "20 Aug",
    "22 Aug",
    "24 Aug",
    "26 Aug",
    "28 Aug",
    "30 Aug",
    "1 sep",
    "3 sep",
    "5 sep",
    "7 sep",
    "9 sep",
    "11 sep",
    "13 sep",
    "15 sep",
    "17 sep",
    "19 sep",
  ],
  legend: {
    display: false,
    position: "top",
    align: "start",
    horizontalAlign: "left",
  },
  yaxis: [
    {},
    {
      opposite: true,
    },
  ],
  markers: {
    size: 4,
    colors: ["#FFF"],
    strokeColors: "#3469bb",
    strokeWidth: 1,
    hover: {
      size: 2,
    },
  },
  colors: ["#d5e5f7", "#3469bb"],
  stroke: {
    width: [0, 2],
  },
  // yaxis: {
  //   labels: {
  //     show: true,
  //   },
  //   axisBorder: {
  //     show: true,
  //   },
  //   axisTicks: {
  //     show: true,
  //   },
  // },
  responsive: [
    {
      breakpoint: 380,
      options: {
        chart: {
          height: 500,
        },
      },
    },
  ],
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();