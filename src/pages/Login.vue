<template>
  <div class="fullscreen bg-grey-4">
    <div class="flex flex-center" style="height: 100%; width: 100%">
      <q-card style="width: 80%; height: 60%" :style="$q.platform.is.mobile? 'width: 85%; height: 65%': 'width: 50%; height: 60%'">
        <q-card-section
          :horizontal="!$q.platform.is.mobile"
          style="height: 100%"
          class="q-pa-none"
        >
          <q-img
            basic
            src="https://www.hendersoncountypublicschoolsnc.org/whh/files/2020/03/CC.jpg"
          />
          <q-card-section class="col-5">
            <div class="" style="width: 100%" :class="!$q.platform.is.mobile? 'q-mt-xl q-pt-xl': 'q-mt-sm'">
              <h6 text-h6 class="q-pl-xs q-pb-sm q-my-xs">Login to Admin Panel</h6>
              <q-form
                class="q-gutter-none"
              >
                <q-input
                  filled

                  v-model="username"
                  label="Your name *"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
                <q-input
                  filled

                  type="password"
                  label="Password *"
                  v-model="password"
                  lazy-rules
                  :rules="[
                    val => val !== null && val !== '' || 'Please type something',
                  ]"
                />
                <div>
                  <q-btn class="full-width" label="Login" type="submit" flat color="cyan"/>
                  <div class="row q-mt-lg">
                    <div class="col-5">
                      <q-btn class="full-width" icon="eva-google" color="grey-5" type="submit"/>
                    </div>
                    <div class="offset-2 col-5">
                      <q-btn class="full-width" icon="eva-facebook" color="blue" type="submit"/>
                    </div>
                  </div>
                </div>
              </q-form>

            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return {
      username: 'chakit',
      password: 'admin'
    }
  }
};
</script>
<style lang="stylus" scoped></style>
