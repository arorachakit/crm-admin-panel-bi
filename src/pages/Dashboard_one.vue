<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-sm q-pr-sm">
      <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <q-card class="bg-green upper-card">
          <q-card-section>
            <div class="row q-pt-lg">
              <div class="col-8">
                <p class="text-h3">$3,123</p>
                <p>Total Sales</p>
              </div>
              <div class="offset-1 col-2">
                <q-icon class="q-mt-sm" name="trending_up" size="70px"/>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-6 col-xs-12">
        <q-card class="upper-card">
          <q-card-section>
            <div class="flex column flex-center q-pt-lg">
                <p class="text-h3" style="color: green">3700</p>
                <p>Total Opportunities</p>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-6 col-xs-12">
        <q-card  class="upper-card">
          <q-card-section class="q-pa-sm upper-card">
            <IEcharts :option="optionOne" :resizable="true"/>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <q-card class="bg-yellow-7 upper-card">
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
                  <q-icon class="q-mt-md" name="o_show_chart" size="lg"/>
                  <q-icon class="q-mt-md" name="o_shopping_cart" size="lg"/>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-6 col-xs-12">
        <q-card class="upper-card">
          <q-card-section>
            <div class="flex column flex-center q-pt-lg">
                <p class="text-h3" style="color: violet">+89%</p>
                <p>Brand Popularity</p>
            </div>
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
  data(){
    return {
      optionOne: {}
    }
  },
  created: function(){
    this.getInitialData()
  },
  methods: {
    getInitialData(){
        this.optionOne = {
          title: {
            text: 'New Products',
            left: 'center',
            textStyle: {
              fontWeight: 'lighter',
              fontSize: 14
            }
         },
         series: [
          {
            name: 'HOLA',
            type: 'pie',
            label: {
              fontSize: 10
            },
            labelLine:{
              length: 10,
              lenght2: 2
            },
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: 'A'},
                {value: 400, name: 'B'},
                {value: 234, name: 'C'},
            ],

            emphasis: {
              itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .upper-card{
    height: 150px
  }
</style>
