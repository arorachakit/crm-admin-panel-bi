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
            <p class="q-ma-xs">Closed Business</p>
            <IEcharts  :option="guageOption" :resizable="true" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
        <q-card style="height: 250px">
          <q-card-section class="q-pa-sm" style="height: 90%">
            <p class="q-ma-xs">Invoice Generate</p>
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
      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div class="q-pa-none">
          <q-table
            class = 'q-pt-xs'
            style="height: 435px"
            title="Recent Tickets"
            :data="data"
            :columns="columns"
            row-key="name"
            :filter="filter"
            virtual-scroll
            :rows-per-page-options="[0]"
            :pagination.sync="pagination"
          >
            <template v-slot:top-right>
              <q-input
                borderless
                dense
                debounce="300"
                v-model="filter"
                placeholder="Search"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
            <template v-slot:body-cell-status="props">
              <q-td key="status" :props="props">
                <q-badge
                  v-if="props.row.status"
                  :color="badgeColor(props.row.status)"
                >
                  {{ props.row.status }}
                </q-badge>
              </q-td>
            </template>
          </q-table>
        </div>
      </div>
      <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
        <q-card style="height: 435px">
          <q-card-section class="q-pa-sm" style="height: 100%">
            <q-scroll-area style="height: 100%; width: 100%">
              <q-timeline class="q-pl-md q-py-none q-pr-xl" color="blue">
                <q-timeline-entry heading tag="h6">
                  Timeline
                </q-timeline-entry>
                <q-timeline-entry subtitle="All Hands Meeting"  icon="fas fa-handshake">
                    At 2:00 PM
                </q-timeline-entry>
                <q-timeline-entry subtitle="Group Meeting" icon="fas fa-users">
                  <q-avatar size="md">
                    <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
                  </q-avatar>
                  <q-avatar size="md">
                    <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                  </q-avatar>
                  <q-avatar size="md">
                    <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
                  </q-avatar>
                  <q-avatar size="md">
                    <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                  </q-avatar>
                </q-timeline-entry>
                <q-timeline-entry
                  subtitle="Build the prodcution release "
                  color="green"
                >
                  <q-linear-progress
                    class="q-mr-lg"
                    color="green"
                    size="sm"
                    value="0.78"
                  />
                </q-timeline-entry>
                <q-timeline-entry
                  subtitle="Meeting with Rohini"
                  body="At 5:00 pm"
                  avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                />
                <q-timeline-entry
                  subtitle="Project Deployed"
                  icon="fas fa-project-diagram"
                />
              </q-timeline>
            </q-scroll-area>
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
      areaOption: {},
      pagination: {
        rowsPerPage: 0
      },
      filter: "",
      columns: [
        {
          name: "status",
          required: true,
          label: "Status",
          align: "left",
          field: "status",
          sortable: true
        },
        {
          name: "subject",
          align: "left",
          label: "Subject",
          field: "subject",
          sortable: true
        },
        {
          name: "department",
          align: "left",
          label: "Department",
          field: "department",
          sortable: true
        },
        {
          name: "date",
          align: "left",
          label: "Date",
          field: "date",
          sortable: true
        }
      ],
      data: [
        {
          status: "Open",
          subject: "Website down for one week",
          department: "Support",
          date: "Today 2:00"
        },
        {
          status: "Progress",
          subject: "Loosing control on server",
          department: "Support",
          date: "Yesterday"
        },
        {
          status: "Closed",
          subject: "Authorizations keys",
          department: "Support",
          date: "27, Aug"
        },
        {
          status: "Progress",
          subject: "Chrome Installation",
          department: "IT",
          date: "Yesterday"
        },
        {
          status: "Open",
          subject: "Loosing control on server",
          department: "Tech",
          date: "Today 9:00"
        },
        {
          status: "Open",
          subject: "Plugin Installation",
          department: "Support",
          date: "13 Sept"
        },
        {
          status: "Closed",
          subject: "Plugin Installation",
          department: "Support",
          date: "11 Sept"
        }
      ]
    };
  },
  created: function() {
    this.getInitialData();
  },
  methods: {
    badgeColor(status) {
      if (status == "Open") {
        return "green";
      }
      if (status == "Progress") {
        return "blue";
      }
      if (status == "Closed") {
        return "red";
      }
    },
    getInitialData() {
      this.guageOption = {
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
              fontSize: 20
            },
            data: [{ value: 93 }]
          }
        ]
      };
      this.areaOption = {
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
