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
                <p class="text-h3">$3,123</p>
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
              <p class="text-h3" style="color: green">3700</p>
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
              <p class="text-h3" style="color: violet">+89%</p>
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
        <q-card class="q-mt-md" style="height: 50px; width: 100%">
          <q-card-section class="q-py-xs">
            <div class="row" style="height: 20px">
              <div class="col-2">
                <p class="text-caption q-my-none">2019</p>
              </div>
              <div class="offset-1 col-8">
                <q-linear-progress class="q-mt-sm" color="red" size="sm" value=0.5 />
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p class="text-caption q-mb-none">2020</p>
              </div>
              <div class="offset-1 col-8">
                <q-linear-progress class="q-mt-sm" color="blue" size="sm" value=0.75 />
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
        <div class="q-mt-md">
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
            <q-card style="height: 169px">
              <q-card-section class="q-pa-sm" style="height: 100%">
                <IEcharts :option="smoothLine" :resizable="true" />
              </q-card-section>
            </q-card>
          </div>
          <!-- C Card Seven -->
          <div class="col-lg-12 col-md-6 col-sm-6 col-xs-6">
            <q-card style="height: 169px">
              <q-card-section class="q-pa-sm" style="height: 100%">
                <IEcharts :option="twoLines" :resizable="true" />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
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
      twoLines: {}
    };
  },
  created: function() {
    this.getInitialData();
  },
  methods: {
    getInitialData() {
      this.smallPieOption = {
        title: {
          text: "New Products",
          left: "center",
          textStyle: {
            fontSize: 14
          }
        },
        series: [
          {
            name: "Pie",
            type: "pie",
            label: {
              fontSize: 10
            },
            labelLine: {
              length: 10,
              lenght2: 2
            },
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "A" },
              { value: 400, name: "B" },
              { value: 234, name: "C" }
            ],

            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      this.horizontalBarGraphOption = {
        title: {
          text: "Quarterly Revenue",
          left: "center"
          // textStyle: {

          // }
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          data: ["Product A", "Product B", "Product C"],
          bottom: 1
        },
        xAxis: {
          name: "Revenue",
          type: "value"
        },
        yAxis: {
          name: "Quarters",
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
          text: "Sample",
          left: "center"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["A", "B", "C", "D", "E"],
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
              position: "center"
            },
            top: 10,
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "A" },
              { value: 310, name: "B" },
              { value: 234, name: "C" },
              { value: 135, name: "D" },
              { value: 1548, name: "E" }
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
          text: "2019 Prducts",
          left: "center",
          textStyle: {
            fontSize: 14
          }
        },
        legend: {
          data: ['A', 'B'],
          bottom: 1
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
            name: 'A',
            data: [-52, 1, -10, -60, 48, -76, -29],
            type: "line",
            symbol: "none",
            smooth: true,
            lineStyle: {
              color: "#10B1F6"
            },

          },
          {
            name: 'B',
            data: [95, -47, -77, 25, -42, 81, -79],
            smooth: true,
            type: "line",
            symbol: "none",
            lineStyle: {
              color: "#FD4D4E"
            },

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
