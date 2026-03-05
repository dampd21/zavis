// Swiper 초기화
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".banner-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // ECharts 차트
  const chartDom = document.getElementById("traceHistoryChart");
  const myChart = echarts.init(chartDom);
  const option = {
    title: { text: "샘플 순위 차트" },
    xAxis: { type: "category", data: ["1일", "2일", "3일", "4일", "5일"] },
    yAxis: { type: "value" },
    series: [{ data: [10, 20, 15, 25, 30], type: "line" }],
  };
  myChart.setOption(option);

  // 사이드바 토글 (간단 구현)
  document.querySelector(".close-btn")?.addEventListener("click", () => {
    document.querySelector(".sidebar").style.display = "none";
  });
});
