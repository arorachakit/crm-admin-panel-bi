<template>
  <q-layout view="lHh lpR lFf">
    <q-header bordered class="bg-green-8 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>
          <q-icon name="o_admin_panel_settings" size="md" class="q-mr-md" />
          ADMIN PANEL
        </q-toolbar-title>
        <q-btn
          flat
          dense
          label="LOGOUT"
          class="q-mr-sm"
          to="/"
          @click="logout"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="left"
      side="left"
      content-class="bg-grey-1"
    >
      <div style="height: 80%">
        <q-toolbar>
          <q-toolbar-title class="q-ml-lg">Chakit Arora</q-toolbar-title>
        </q-toolbar>
        <hr class="q-mt-none" />
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item
              v-for="(menuItem, index) in menuList"
              :key="index"
              class="q-px-lg q-py-md"
              style="color: black"
              clickable
              :active="active"
              active-class="bg-teal-1 text-grey-8"
              :to="menuItem.link"
              v-ripple
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </div>
    </q-drawer>

    <q-page-container>
      <q-page class="row no-wrap">
        <div class="col">
          <div class="full-height">
            <q-scroll-area class="col q-pr-sm full-height" visible>
              <router-view />
            </q-scroll-area>
          </div>
        </div>
      </q-page>
    </q-page-container>

  <q-footer bordered class="bg-grey text-black">
      <q-toolbar>

      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      tab: "",
      active: true,
      menuList: [
        {
          icon: "o_dashboard",
          label: "Dashboard One",
          separator: false,
          link: "/dashboard-one"
        },
        {
          icon: "o_dashboard",
          label: "Dashboard Two",
          separator: false,
          link: "/dashboard-two"
        },
        {
          icon: "o_dashboard",
          label: "Dashboard Three",
          separator: false,
          link: "/dashboard-three"
        },
        {
          icon: "o_person_add",
          label: "Sign Ups",
          separator: false,
          link: "/sign-ups"
        },
        {
          icon: "o_calendar_today",
          label: "Calendar",
          separator: false,
          link: "/calendar"
        },
        {
          icon: "o_settings",
          label: "Settings",
          separator: false,
          link: "/settings"
        },
        {
          icon: "o_help_outline",
          iconColor: "primary",
          label: "Help",
          separator: false,
          link: "/help"
        }
      ]
    };
  },
  methods: {
    logout() {
      this.$q.notify({
        message: "Successfully Logged Out",
        color: "info",
        timeout: 1500
      });
    }
  }
};
</script>
