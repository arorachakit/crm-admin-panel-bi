<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-sm q-pr-sm">
      <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <q-card class="upper-card-one">
          <q-card-section>
            <div class="row">
              <div class="col-8">
                <p class="">Ticket</p>
                <p class="text-h4">46</p>
              </div>
              <div class="offset-1 col-2">
                <q-icon
                  name="o_sticky_note_2"
                  size="70px"
                  style="color: #fe9365"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <q-card class="upper-card-two">
          <q-card-section>
            <div class="row">
              <div class="col-8">
                <p class="">Close Rate</p>
                <p class="text-h4">73</p>
              </div>
              <div class="offset-1 col-2">
                <q-icon
                  name="fas fa-percentage"
                  size="70px"
                  style="color: #0ac282"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <q-card class="upper-card-three">
          <q-card-section>
            <div class="row">
              <div class="col-8">
                <p class="">Quick Ratio</p>
                <p class="text-h4">1.76</p>
              </div>
              <div class="offset-1 col-2">
                <q-icon
                  name="fas fa-chart-line"
                  size="70px"
                  style="color: #fe5d70"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <q-card class="upper-card-four">
          <q-card-section>
            <div class="row">
              <div class="col-8">
                <p class="">Current Ratio</p>
                <p class="text-h4">3.88</p>
              </div>
              <div class="offset-1 col-2">
                <q-icon
                  name="fas fa-chart-bar"
                  size="70px"
                  style="color: #01a9ac"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-col-gutter-sm q-ma-sm q-pr-sm">
      <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
        <q-card style="height: 250px">
          <q-card-section class="q-pa-sm" style="height: 100%">
            <IEcharts :option="guageOption" :resizable="true" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
        <q-card style="height: 250px">
          <q-card-section class="q-pa-sm" style="height: 100%">
            <IEcharts :option="areaOption" :resizable="true" />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-col-gutter-sm q-ma-sm q-pr-sm">
      <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
        <q-card style="height: 210px">
          <q-card-section class="q-pa-sm " style="height: 100%">
            <div>
              <p class="q-ma-xs">Tasks Completed</p>
            </div>
            <div class="q-mt-md flex flex-center">
              <q-circular-progress
                show-value
                value="55"
                size="150px"
                thickness="0.22"
                color="blue"
                track-color="grey-3"
              />
            </div>
          </q-card-section>
        </q-card>
        <q-card class="q-mt-md" style="height: 210px">
          <q-card-section class="q-pa-sm " style="height: 100%">
            <div>
              <p class="q-ma-xs">Warnings Closed</p>
            </div>
            <div class="q-mt-md flex flex-center">
              <q-circular-progress
                show-value
                value="90"
                size="150px"
                thickness="0.22"
                color="green"
                track-color="grey-3"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
        <q-card style="height: 435px">
          <q-card-section class="q-pa-sm" style="height: 100%">

          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <q-card style="height: 435px">
          <q-card-section class="q-pa-sm" style="height: 100%">

          </q-card-section>
        </q-card>
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
      guageOption: {},
      areaOption: {}
    };
  },
  created: function() {
    this.getInitialData();
  },
  methods: {
    getInitialData() {
      this.guageOption = {
        title: {
          text: "Closed Business",

          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          formatter: "{c}%"
        },

        series: [
          {
            type: "gauge",
            radius: "80%",
            splitNumber: 5,
            axisLine: {
              lineStyle: {
                color: [
                  [0.3, "#fe9365"],
                  [0.5, "#0ac282"],
                  [0.7, "#fe5d70"],
                  [1, "#01a9ac"]
                ],
                width: 15,
                shadowBlur: 5
              }
            },
            detail: {
              formatter: "{value}%",
              fontSize: 25
            },
            data: [{ value: 93 }]
          }
        ]
      };
      this.areaOption = {
        title: {
          text: "Invoice Generate",
          left: "center"
        },
        tooltip: {
          trigger: "item"
        },
        toolbox: {
          feature: {
            magicType: {
              type: ["line", "bar"],
              title: { line: "Line Grpah", bar: "Bar Graph" }
            },
            saveAsImage: {
              title: "Download"
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
          boundaryGap: false,
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
                    color: "#0ac282"
                  },
                  {
                    offset: 1,
                    color: "#0df3a3"
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
                    color: "#fe5d70"
                  },
                  {
                    offset: 1,
                    color: "#fe909d"
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
.upper-card-one{
  color: white
  height: 100px
  background: linear-gradient(to right, #fe9365, #feb798)
}
.upper-card-two{
  color: white
  height: 100px
  background: linear-gradient(to right, #0ac282, #0df3a3)
}
.upper-card-three{
  color: white
  height: 100px
  background: linear-gradient(to right, #fe5d70, #fe909d)
}
.upper-card-four{
  color: white
  height: 100px
  background: linear-gradient(to right, #01a9ac, #01dbdf)
}
</style>
