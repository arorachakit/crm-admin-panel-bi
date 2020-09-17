<template>
  <div class="fullscreen bg-grey-4">
    <div class="flex flex-center" style="height: 100%; width: 100%">
      <q-card
        class="shadow-10"
        :style="
          $q.platform.is.mobile
            ? 'width: 85%; height: 65%'
            : 'width: 50%; height: 60%'
        "
      >
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
            <div
              class=""
              style="width: 100%"
              :class="!$q.platform.is.mobile ? 'q-mt-xl q-pt-xl' : 'q-mt-sm'"
            >
              <h6 text-h6 class="q-pb-sm q-my-xs">Login to Admin Panel</h6>
              <q-form ref="loginForm" class="q-gutter-none">
                <q-input
                  dense
                  clearable
                  v-model="username"
                  label="Your name *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Please type something'
                  ]"
                />
                <q-input
                  dense
                  label="Password *"
                  v-model="password"
                  lazy-rules
                  :type="isPwd ? 'password' : 'text'"
                  :rules="[
                    val =>
                      (val !== null && val !== '') || 'Please type something'
                  ]"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
                <div>
                  <q-btn
                    class="full-width"
                    label="Login"
                    @click="submit"
                    color="green"
                  />
                  <div class="row q-mt-lg">
                    <div class="col-5">
                      <q-btn
                        class="full-width"
                        flat
                        icon="eva-google"
                        color="grey-5"
                        @click="submit"
                      />
                    </div>
                    <div class="offset-2 col-5">
                      <q-btn
                        class="full-width"
                        flat
                        icon="eva-facebook"
                        color="blue"
                        @click="submit"
                      />
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
  data() {
    return {
      username: "chakit",
      password: "admin",
      isPwd: true
    };
  },
  methods: {
    submit() {
      if (!this.$refs.loginForm.hasError) {
        this.$router.push("/dashboard-one");
        this.$q.notify({
          message: "Successfully Logged In",
          color: "positive",
          timeout: 1500
        });
      }
    }
  }
};
</script>
<style lang="stylus" scoped></style>
