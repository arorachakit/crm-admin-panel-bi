<template>
  <q-page>
    <!-- Row One -->
    <div class="row q-col-gutter-sm q-ma-sm q-pr-sm">
      <!-- Card One -->
      <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <q-card
          class="upper-card"
          style="background-color: #94bba8; color: #fff"
        >
          <q-card-section>
            <div class="row q-pt-md">
              <div class="col-8">
                <p class="text-h3">$3,123M</p>
                <p>Total Sales</p>
              </div>
              <div class="offset-1 col-2">
                <q-icon class="q-mt-sm" name="trending_up" size="70px" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <!-- Card Two -->
      <div class="col-lg-2 col-md-6 col-sm-6 col-xs-12">
        <q-card class="upper-card">
          <q-card-section>
            <div class="flex column flex-center q-pt-md">
              <p class="text-h3" style="color: #4F5168">3700</p>
              <p>Total Opportunities</p>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <!-- Card Three Pie -->
      <div class="col-lg-2 col-md-3 col-sm-3 col-xs-12">
        <q-card class="upper-card">
          <q-card-section class="q-pa-sm upper-card">
            <IEcharts :option="smallPieOption" :resizable="true" />
          </q-card-section>
        </q-card>
      </div>
      <!-- Card Four -->
      <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <q-card
          class="upper-card"
          style="background-color: #e39b27; color: #fff"
        >
          <q-card-section>
            <div class="row">
              <div class="col-8">
                <p class="text-h5 q-mb-none">7250</p>
                <p>New Leads</p>
                <p class="text-h5 q-mb-none">5211</p>
                <p>New Orders</p>
              </div>
              <div class="offset-1 col-2">
                <div>
                  <q-icon class="q-mt-md" name="o_show_chart" size="lg" />
                </div>
                <div>
                  <q-icon class="q-mt-md" name="o_shopping_cart" size="lg" />
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <!-- Card Five -->
      <div class="col-lg-2 col-md-3 col-sm-3 col-xs-12">
        <q-card class="upper-card">
          <q-card-section>
            <div class="flex column flex-center q-pt-md">
              <p class="text-h3" style="color: #94bba8">+89%</p>
              <p>Brand Popularity</p>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <!-- Second Row -->
    <div class="row q-col-gutter-sm q-ma-sm q-pr-sm">
      <!-- A Column One-->
      <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
        <!-- A Card One Horizontal Bar -->
        <q-card style="height: 280px">
          <q-card-section class="q-pa-sm" style="height: 100%">
            <IEcharts :option="horizontalBarGraphOption" :resizable="true" />
          </q-card-section>
        </q-card>
        <!-- A Card Two Horizontal -->
        <q-card class="q-mt-sm" style="height: 50px; width: 100%">
          <q-card-section class="q-py-xs">
            <div class="row" style="height: 20px">
              <div class="col-2">
                <p class="text-caption q-my-none">2018</p>
              </div>
              <div class="offset-1 col-8">
                <q-linear-progress
                  class="q-mt-sm"
                  style="color: #e39b27"
                  size="sm"
                  value="0.5"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p class="text-caption q-mb-none">2019</p>
              </div>
              <div class="offset-1 col-8">
                <q-linear-progress
                  class="q-mt-sm"
                  style="color: #8484d2"
                  size="sm"
                  value="0.75"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <!--B Column Two-->
      <div class="col-lg-3 col-md- col-sm-12 col-xs-12">
        <!-- Inner Row One -->
        <div class="row q-col-gutter-sm">
          <!-- B Card Three -->
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <q-card style="background: #6C6D8B; color: #fff; height: 100px">
              <q-card-section class="q-pt-xs">
                <div>
                  <div class="row">
                    <div class="col-9">
                      <p class="text-h2 q-mb-xs">B</p>
                      <p>Most Rated</p>
                    </div>
                    <div class=" col-2">
                      <q-icon class="q-pt-sm" name="o_grade" size="xl" />
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <!-- B Card Four -->
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <q-card style="background: #A3A4B7; color: #fff; height: 100px">
              <q-card-section class="q-pt-xs">
                <div>
                  <div class="row">
                    <div class="col-9">
                      <p class="text-h2 q-mb-xs">C</p>
                      <p>Most Used</p>
                    </div>
                    <div class=" col-2">
                      <q-icon
                        class="q-pt-sm"
                        name="o_sentiment_satisfied"
                        size="xl"
                      />
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <!-- B Card Five Donught Pie  -->
        <div class="q-mt-sm">
          <q-card style="height: 230px">
            <q-card-section class="q-pa-sm" style="height: 100%">
              <IEcharts :option="donutPieOption" :resizable="true" />
            </q-card-section>
          </q-card>
        </div>
      </div>
      <!-- C Column Three -->
      <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
        <!-- Inner Row -->
        <div class="row q-col-gutter-sm">
          <!-- C Card Six -->
          <div class="col-lg-12 col-md-6 col-sm-6 col-xs-6">
            <q-card style="height: 165px">
              <q-card-section class="q-pa-sm" style="height: 100%">
                <IEcharts :option="smoothLine" :resizable="true" />
              </q-card-section>
            </q-card>
          </div>
          <!-- C Card Seven -->
          <div class="col-lg-12 col-md-6 col-sm-6 col-xs-6">
            <q-card style="height: 165px">
              <q-card-section class="q-pa-sm" style="height: 100%">
                <IEcharts :option="twoLines" :resizable="true" />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <!-- Third Row -->
    <div class="row q-col-gutter-sm q-ma-sm q-pr-sm">
      <!-- Column One-->
      <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
        <!--Card One Bar -->
        <q-card style="height: 280px">
          <q-card-section class="q-pa-sm" style="height: 100%">
            <IEcharts :option="barGraphOption" :resizable="true" />
          </q-card-section>
        </q-card>
      </div>
      <!-- Column Two -->
      <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
        <!--Card Two Area -->
        <q-card style="height: 280px">
          <q-card-section class="q-pa-sm" style="height: 100%">
            <IEcharts :option="areaOption" :resizable="true" />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-col-gutter-sm q-ma-sm q-pr-sm">
      <q-card class="q-mt-sm q-ml-sm" style="height: 50px; width: 100%">
        <q-card-section class="q-py-sm">
          <div class="row" style="height: 20px">
            <div class="col-2">
              <p class="text-caption q-my-none">Efficiency</p>
            </div>
            <div class="offset-1 col-9">
              <q-linear-progress
                class="q-mt-sm"
                style="color: #8484d2"
                size="md"
                value="0.85"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import IEcharts from "vue-echarts-v3/src/full.js";
export default {
  components: {
    IEcharts
  },
  data() {
    return {
      smallPieOption: {},
      horizontalBarGraphOption: {},
      donutPieOption: {},
      smoothLine: {},
      twoLines: {},
      barGraphOption: {},
      areaOption: {}
    };
  },
  created: function() {
    this.getInitialData();
  },
  methods: {
    getInitialData() {
      this.smallPieOption = {
        title: {
          text: "Investor's Share",
          left: "center",
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: "item"
        },
        toolbox: {
          feature: {
            saveAsImage: {
              title: 'Download'
            }
          }
        },
        // visualMap: {
        //   show: false,
        //   min: 80,
        //   max: 600,
        //   inRange: {
        //     colorLightness: [0.5, 1]
        // }
        // },
        series: [
          {
            name: "Pie",
            type: "pie",
            startAngle: 145,
            label: {
              fontSize: 10,
              formatter: "{b}",
              fontStyle: "italic"
            },
            labelLine: {
              length: 10,
              lenght2: 2
            },
            itemStyle: {
              shadowBlur: 5
            },
            tooltip: {
              formatter: "{d}",
              textStyle: {
                fontStyle: "oblique",
                fontWeight: "lighter"
              }
            },
            radius: "55%",
            center: ["50%", "60%"],
            roseType: "radius",
            hoverOffset: 15,
            amimationType: "scale",
            animationEasing: "elasticOut",
            data: [
              { value: 335, name: "A", itemStyle: { color: "#6577e3" } },
              { value: 310, name: "B", itemStyle: { color: "#e39b27" } },
              { value: 274, name: "C", itemStyle: { color: "#4F5168" } },
              { value: 235, name: "D", itemStyle: { color: "#94bba8" } }
            ]

            // itemStyle: {
            //     color: '#6577e3',
            //     shadowBlur: 200,
            //     shadowColor: 'rgba(0, 0, 0, 0.5)'
            // },
          }
        ]
      };
      this.horizontalBarGraphOption = {
        title: {
          text: "Quarterly Revenue",
          left: "center"
        },
        tooltip: {
          trigger: "item"
        },
        toolbox: {
          feature: {
            saveAsImage: {
              title: 'Download'
            }
          }
        },
        legend: {
          data: ["Product A", "Product B", "Product C"],
          bottom: 1
        },
        xAxis: {
          type: "value",
          axisLine: { show: false },
          axisLabel: {
            show: true,
            fontWeight: "lighter"
          },
          axisTick: { show: false }
        },
        yAxis: {
          type: "category",
          data: ["Q1", "Q2", "Q3", "Q4"]
        },
        series: [
          {
            name: "Product A",
            stack: "Quarter",
            type: "bar",
            color: "#4F5168",
            data: [12, 15, 20, 18],
            itemStyle: {
              shadowBlur: 2
            }
          },
          {
            name: "Product B",
            stack: "Quarter",
            type: "bar",
            color: "#6C6D8B",
            data: [45, 40, 55, 60],
            itemStyle: {
              shadowBlur: 2
            }
          },
          {
            name: "Product C",
            stack: "Quarter",
            type: "bar",
            color: "#A3A4B7",
            data: [20, 40, 50, 70],
            itemStyle: {
              shadowBlur: 2
            }
          }
        ]
      };
      this.donutPieOption = {
        title: {
          text: "Country Distribution",
          left: "center"
        },
        toolbox: {
          feature: {
            saveAsImage: {
              title: 'Download'
            }
          }
        },
        legend: {
          orient: "vertical",
          left: "left",

          textStyle: {
            fontSize: 10
          },
          itemHeight: 12
        },
        series: [
          {
            name: "Sample",
            type: "pie",
            radius: ["60%", "80%"],
            center: ["50%", "55%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
              formatter: "{b} {d}%"
            },
            top: 10,
            emphasis: {
              label: {
                show: true,
                fontSize: "18",
                fontWeight: "bolder"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1548, name: "India", itemStyle: { color: "#6577e3" } },
              { value: 335, name: "Spain", itemStyle: { color: "#e39b27" } },
              { value: 310, name: "USA", itemStyle: { color: "#4F5168" } },
              { value: 234, name: "UK", itemStyle: { color: "#94bba8" } },
              { value: 135, name: "Others", itemStyle: { color: "#6C6D8B" } }
            ]
          }
        ]
      };
      this.smoothLine = {
        title: {
          text: "Expected Growth",
          left: "center",
          textStyle: {
            fontSize: 14
          }
        },
        grid: {
          bottom: "5%",
          top: "25%"
        },
        xAxis: {
          type: "category",
          show: false
        },
        yAxis: {
          type: "value",
          show: false
        },
        series: [
          {
            data: [10, 80, 60, 200],
            type: "line",
            symbol: "none",
            smooth: true,
            lineStyle: {
              color: "#159588"
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 1,
                y: 1,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "white"
                  },
                  {
                    offset: 1,
                    color: "blue"
                  }
                ]
              }
            }
          }
        ]
      };
      this.twoLines = {
        title: {
          text: "Trajectory",
          left: "center",
          textStyle: {
            fontSize: 14
          }
        },
        legend: {
          bottom: "1%",
          itemWidth: 10
        },
        grid: {
          bottom: "20%",
          top: "20%"
        },
        xAxis: {
          type: "category",
          show: false
        },
        yAxis: {
          type: "value",
          show: false
        },
        series: [
          {
            name: "Expected",
            data: [-52, 1, -10, -60, 48, -76, -29],
            type: "line",
            symbol: "none",
            smooth: true,
            itemStyle: { color: "#8484d2" },
            lineStyle: {
              color: "#8484d2"
            }
          },
          {
            name: "Actual",

            data: [95, -47, -77, 25, -42, 81, -79],
            smooth: true,
            type: "line",
            symbol: "none",
            itemStyle: { color: "#e39b27" },
            lineStyle: {
              color: "#e39b27"
            }
          }
        ]
      };
      this.barGraphOption = {
        title: {
          text: "Income vs Expense",
          left: "center"
        },
        toolbox: {
          feature: {
            saveAsImage: {
              title: 'Download'
            }
          }
        },
        legend: {
          bottom: 1
        },
        grid: {
          bottom: "20%",
          top: "20%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        dataset: {
          source: [
            ["product", "Income", "Expense"],
            ["Jan", 43.3, 85.8],
            ["Feb", 83.1, 73.4],
            ["March", 86.4, 65.2],
            ["April", 90.8, 75.8],
            ["May", 100, 90],
            ["Jun", 135, 105]
          ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {
            type: "bar",
            barWidth: "35%",
            color: "#e39b27"
          },
          {
            type: "bar",
            barWidth: "35%",
            color: "#6577e3"
          },
          {
            name: "Profit",
            data: [44, 84, 87, 91, 100, 135],
            type: "line",
            lineStyle: {
              color: "#6C6D8B"
            }
          }
        ]
      };
      this.areaOption = {
        title: {
          text: "Resource Utilization",
          left: "center"
        },
        tooltip: {
          trigger: "item"
        },
        toolbox: {
          feature: {
            saveAsImage: {
              title: 'Download'
            }
          }
        },
        grid: {
          bottom: "10%",
          top: "20%",
          right: "5%"
        },
        xAxis: {
          type: "category",

          axisLine: {
            show: true
          }
        },
        yAxis: {
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: "Team A",
            type: "line",
            smooth: true,
            data: [0, 20, 15, 15, 50, 35, 80, 35, 40, 0],
            symbol: "none",
            lineStyle: {
              width: 0
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 1,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "#6577e3"
                  },
                  {
                    offset: 1,
                    color: "#8484d2"
                  }
                ]
              }
            }
          },
          {
            name: "Team B",
            type: "line",
            smooth: true,
            data: [0, 70, 5, 30, 20, 50, 10, 50, 25, 0],
            symbol: "none",
            lineStyle: {
              width: 0
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 1,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#6577e3"
                  },
                  {
                    offset: 1,
                    color: "#8484d2"
                  }
                ]
              }
            }
          }
        ]
      };
    }
  }
};
</script>
<style lang="stylus" scoped>
.upper-card{
  height: 150px
}
</style>
