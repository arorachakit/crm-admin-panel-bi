<template>
  <q-layout view="lHh lpR lFf">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>
            <q-icon name="o_admin_panel_settings" size="md" class="q-mr-md"/>
          ADMIN PANEL
        </q-toolbar-title>
        <q-btn flat dense label="LOGOUT" class="q-mr-sm" to="/" @click="logout" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" elevated content-class="bg-grey-1">
      <q-toolbar>
        <q-toolbar-title class="q-ml-lg">Chakit Arora</q-toolbar-title>
      </q-toolbar>
       <hr class="q-mt-none"/>
      <q-scroll-area class="fit">
        <q-list >
          <q-item v-for="(menuItem, index) in menuList" :key="index" class="q-px-lg q-py-md" style="color: black" clickable :active="active" active-class="bg-teal-1 text-grey-8"  :to="menuItem.link" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-icon name="o_admin_panel_settings"/>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      tab: '',
      active: true,
      menuList: [
        {
          icon: 'o_dashboard',
          label: 'Dashboard One',
          separator: false,
          link: '/dashboard-one'
        },
        {
          icon: 'o_dashboard',
          label: 'Dashboard Two',
          separator: false,
          link: '/dashboard-two'
        },
        {
          icon: 'o_dashboard',
          label: 'Sign Ups',
          separator: false,
          link: '/dashboard-two'
        },
        {
          icon: 'o_dashboard',
          label: 'Calendar',
          separator: false,
          link: '/dashboard-two'
        },
        {
          icon: 'o_dashboard',
          label: 'Settings',
          separator: false,
          link: '/dashboard-two'
        },
        {
          icon: 'o_help',
          iconColor: 'primary',
          label: 'Help',
          separator: false,
          link: '/help'
        }
      ],
    }
  },
  methods: {
    logout(){
      this.$q.notify({
      message: 'Successfully Logged Out',
      color: 'info',
      timeout: 1500
      })
    }
  }
}
</script>
