// 当页面加载完成后执行的代码
"use strict";

var dropdown = document.getElementById("dropdown");
dropdown.selectedIndex = 0;

var options = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6",
  "Option 7",
  "Option 8",
  "Option 9",
  "Option 10",
];

// 循环生成选项并添加到下拉框中
for (var i = 0; i < options.length; i++) {
  var option = document.createElement("option");
  option.text = options[i];
  dropdown.add(option);
}

function sendData(data) {
  var data = data;
  console.log(data);
  $.ajax({
    url: "/getS",
    type: "POST",
    data: JSON.stringify(data),
    success: function (response) {
      var data = JSON.parse(response[0]);
      var data2 = JSON.parse(response[1]);
      var gnmk = Object.keys(data);
      var gnx = Object.keys(data2);
      var mknum = Object.values(data);
      var xnum = Object.values(data2);

      charts("top10_1", gnmk, mknum, "Top Fail功能模块");
      charts("top10_2", gnx, xnum, "Top Fail功能项");
    },
    error: function () {
      alert("无法获取数据。");
    },
  });
}

function charts(id, mk, x, xm) {
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

function getS() {
  var sIndex = dropdown.selectedIndex;
  var sValue = dropdown.options[sIndex].value;
  sendData(sIndex);
}
document.addEventListener("DOMContentLoaded", function () {
  myFunction();
});
function myFunction() {
  sendData(0);
}
