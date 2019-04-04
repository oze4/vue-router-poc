<template>
  <div>
    <v-navigation-drawer app temporary v-model="navigation.shown">
      <v-toolbar color="primary">
        <v-toolbar-title class="headline text-uppercase">
          <span>O p t</span>
          <span class="font-weight-light">I O N S</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-tile
          v-for="item in navigation.items"
          :key="item.title"
          @click.stop="handleRoute(item.route)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="primary" mb-5>
      <v-toolbar-side-icon @click.stop="navigation.shown = !navigation.shown"></v-toolbar-side-icon>
      <v-btn @click.stop="handleRoute('/')" icon>
        <v-icon>home</v-icon>
      </v-btn>
      <v-toolbar-title class="headline text-uppercase">
        <span>v u e</span>
        <span class="font-weight-light">js</span>
      </v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigation: {
        width: 300,
        shown: false,
        items: [
          {
            title: "Dashboard",
            icon: "dashboard",
            route: "dashboard"
          },
          {
            title: "Account",
            icon: "dns",
            route: "account"
          },
          {
            title: "Admin",
            icon: "gavel",
            route: "admin"
          },
          {
            title: "About",
            icon: "about",
            route: "about"
          }
        ]
      }
    };
  },
  computed: {
    direction() {
      return this.navigation.shown === false ? "Open" : "Closed";
    }
  },
  methods: {
    handleRoute(r) {
      this.$router.push(r);
    }
  }
};
</script>
