<template>
  <v-app dark>
    <AlertShow/>
    <v-navigation-drawer

        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        app
    >
      <v-list>
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>


  </v-app>
</template>

<script>
import AlertShow from "@/components/AlertShow"

export default {
  name: 'DefaultLayout',

  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-laptop',
          title: '가상머신',
          to: '/vms',
        },
        {
          icon: 'mdi-pirate',
          title: '관리',
          to: '/admin',
        },
      ],
      miniVariant: false,
      head_title: "",
    }
  },

  computed: {
    title() {
      this.change_title();
      return this.head_title;
    },

  },

  methods:{
    change_title(){
      this.head_title = this.$route.name;
      switch(this.head_title){
        case 'vms':
          this.head_title="가상머신";
          break;
        case 'admin':
          this.head_title="관리";
          break;
        default:
          this.head_title="";
          break;
      }
    },

  },

  components:{
    AlertShow,
  },

}
</script>
