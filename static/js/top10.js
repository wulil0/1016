"use strict";

$(document).ready(function () {
  $.ajax({
    url: "/get_top10",
    type: "GET",
    success: function (response) {
      // console.log(response);
      var data = JSON.parse(response[0]);
      var data2 = JSON.parse(response[1]);
      var gnmk = Object.keys(data);
      var gnx = Object.keys(data2);
      var mknum = Object.values(data);
      var xnum = Object.values(data2);

      charts("top10_1", gnmk, mknum,"Top Fail功能模块");
      charts("top10_2", gnx, xnum,"Top Fail项");
    },
    error: function () {
      alert("无法获取数据。");
    },
  });

  function charts(id, mk, x,xm) {
    var myChart = echarts.init(document.getElementById(id));

    var option = {
      title: {
        text: xm,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {},
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        boundaryGap: [0, 0.01],
      },
      yAxis: {
        inverse: true,
        type: "category",
        data: mk,
      },
      series: [
        {
          name: "2011",
          type: "bar",
          data: x,
        },
      ],
    };

    option && myChart.setOption(option);
  }
});
