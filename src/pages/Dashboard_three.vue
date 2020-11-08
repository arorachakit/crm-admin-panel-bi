<template>
  <q-page class="q-pa-sm">
    <div class="q-ma-sm q-pr-sm">
      <q-card class="q-ml-sm">
        <q-card-section class="q-pa-sm">
          <IEcharts
            :option="ganttChartOptions"
            :resizable="true"
            style="height: 500px"
          />
        </q-card-section>
      </q-card>
    </div>

    <div class="row q-col-gutter-sm q-ma-sm q-pr-sm">
      <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <q-card style="height: 300px" class="q-pa-md">
          <q-item>
            <q-item-section avatar>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>Richie Bolton</q-item-label>
              <q-item-label caption>Marketing Lead</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              Email Id
            </q-item-section>
            <q-item-section>
              <span class="q-pl-md">rbolton1@fastcompany.com</span>
            </q-item-section>
          </q-item>
          <q-card-section class="q-pt-none">
            <q-item-section>
              <q-btn color="blue" icon-right="mail" label="Drop a mail" />
            </q-item-section>
          </q-card-section>
          <q-separator />
             <q-item>
            <q-item-section class="q-mr-md">
              Phone Number
            </q-item-section>
            <q-item-section class="q-pl-xl">
              <span class="q-pl-xl q-ml-xl">8989475182</span>
            </q-item-section>
          </q-item>
            <q-separator />
           <q-card-section>
            <q-item-section>
              <q-btn color="green" icon-right="chat_bubble" label="Send Message" />
            </q-item-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <q-card style="height: 300px" class="q-pa-md">
          <q-item>
            <q-item-section avatar>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>Janie McKeggie</q-item-label>
              <q-item-label caption>Developement Lead</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              Email Id
            </q-item-section>
            <q-item-section>
              <span class="q-pl-xl">jmckeggie1@ehow.com</span>
            </q-item-section>
          </q-item>
          <q-card-section class="q-pt-none">
            <q-item-section>
              <q-btn color="blue" icon-right="mail" label="Drop a mail" />
            </q-item-section>
          </q-card-section>
          <q-separator />
             <q-item>
            <q-item-section class="q-mr-md">
              Phone Number
            </q-item-section>
            <q-item-section class="q-pl-xl">
              <span class="q-pl-xl q-ml-xl">8989475182</span>
            </q-item-section>
          </q-item>
            <q-separator />
           <q-card-section>
            <q-item-section>
              <q-btn color="green" icon-right="chat_bubble" label="Send Message" />
            </q-item-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <q-card style="height: 300px">
          <q-card-section class="q-pa-sm" style="height: 100%">
            <q-timeline class="q-pl-md q-py-none q-pr-xl" color="blue">
              <q-timeline-entry heading tag="p" class="q-ma-none">
                Production Timeline
              </q-timeline-entry>
              <q-timeline-entry
                subtitle="IOS App Launched"
                icon="fab fa-apple"
              />
              <q-timeline-entry
                color="red"
                subtitle="Android App Launched"
                icon="o_android"
              />
              <q-timeline-entry
                subtitle="Customized for mobile"
                icon="fas fa-mobile"
              />
            </q-timeline>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import IEcharts from "vue-echarts-v3/src/full.js";
import echarts from "echarts";
export default {
  name: "timelines",
  components: {
    IEcharts
  },
  data() {
    return {
      ganttChartOptions: {}
    };
  },
  created() {
    this.setOptions();
  },
  methods: {
    setOptions() {
      this.ganttChartOptions = {
        tooltip: {
          formatter: function(params) {
            return params.marker + params.name + ": " + params.value[3];
          }
        },
        title: {
          text: "Development Timeline",
          left: "center",
          top: "2%"
        },

        toolbox: {
          feature: {
            saveAsImage: {
              title: "Download"
            }
          }
        },

        grid: { top: "20%", bottom: "10%" },

        xAxis: [
          {
            type: "category",
            axisTick: { show: false },
            position: "top",
            axisLine: { show: false },
            data: [
              "Jan",
              "Feb",
              "March",
              "April",
              "May",
              "June",
              "July",
              "Aug",
              "Sept",
              "Oct",
              "Nov",
              "Dec"
            ]
          }
        ],
        yAxis: {
          type: "category",
          data: ["Brand E", "Brand D", "Brand C", "Brand B", "Brand A"]
        },
        series: [
          {
            type: "custom",
            color: "#4F5168",
            renderItem: function(params, api) {
              var categoryIndex = api.value(0);
              var start = api.coord([api.value(1), categoryIndex]);
              var end = api.coord([api.value(2), categoryIndex]);
              var height = api.size([0, 1])[1] * 0.2;

              var rectShape = echarts.graphic.clipRectByRect(
                {
                  x: start[0],
                  y: start[1] - height / 2,
                  width: end[0] - start[0],
                  height: height
                },
                {
                  x: params.coordSys.x,
                  y: params.coordSys.y,
                  width: params.coordSys.width,
                  height: params.coordSys.height
                }
              );

              return (
                rectShape && {
                  type: "rect",
                  shape: rectShape,
                  style: api.style()
                }
              );
            },
            data: [
              {
                name: "S1",
                value: [0, 1, 2, 1],
                itemStyle: { normal: { color: "#bd6d6c" } }
              },
              {
                name: "S1",
                value: [0, 3, 6, 3],
                itemStyle: { normal: { color: "#bd6d6c" } }
              },
              {
                name: "S1",
                value: [0, 8, 10, 2],
                itemStyle: { normal: { color: "#bd6d6c" } }
              },
              {
                name: "S1",
                value: [0, 11, 12, 1],
                itemStyle: { normal: { color: "#bd6d6c" } }
              },
              {
                name: "S2",
                value: [1, 0, 2, 2],
                itemStyle: { normal: { color: "#e0bc78" } }
              },
              {
                name: "S2",
                value: [1, 3, 4, 1],
                itemStyle: { normal: { color: "#e0bc78" } }
              },
              {
                name: "S2",
                value: [1, 5, 12, 7],
                itemStyle: { normal: { color: "#e0bc78" } }
              },
              { name: "S3", value: [2, 0, 3, 3] },
              { name: "S3", value: [2, 4, 6, 2] },
              { name: "S3", value: [2, 7, 8, 1] },
              { name: "S3", value: [2, 10, 11, 1] },
              {
                name: "S4",
                value: [3, 0, 1, 1],
                itemStyle: { normal: { color: "#72b362" } }
              },
              {
                name: "S4",
                value: [3, 2, 4, 2],
                itemStyle: { normal: { color: "#72b362" } }
              },
              {
                name: "S4",
                value: [3, 5, 6, 1],
                itemStyle: { normal: { color: "#72b362" } }
              },
              {
                name: "S4",
                value: [3, 7, 8, 1],
                itemStyle: { normal: { color: "#72b362" } }
              },

              {
                name: "S4",
                value: [3, 9, 11, 2],
                itemStyle: { normal: { color: "#72b362" } }
              },
              {
                name: "S5",
                value: [4, 1, 5, 4],
                itemStyle: { normal: { color: "#fe5d70" } }
              },
              {
                name: "S5",
                value: [4, 6, 10, 4],
                itemStyle: { normal: { color: "#fe5d70" } }
              },
              {
                name: "S5",
                value: [4, 11, 12, 1],
                itemStyle: { normal: { color: "#fe5d70" } }
              }
            ]
          }
        ]
      };
    }
  }
};
</script>

<style scoped></style>
