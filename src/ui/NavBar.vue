<template>
  <v-toolbar color="blue-grey-darken-3">
    <v-app-bar-title
      ><i class="fa-solid fa-utensils fa-xl"></i> Food & Drinks</v-app-bar-title
    >
    <v-spacer></v-spacer>
    <v-app-bar-title
      >
      <router-link to="/login">Login</router-link>
      <v-badge dot color="success">
        <v-icon>mdi-home-outline</v-icon>
      </v-badge></v-app-bar-title
    >
    <v-app-bar-title
      ><router-link to="/markets">Markets</router-link>
      <v-badge content="+" color="error">
        <v-icon>mdi-store-outline</v-icon>
      </v-badge></v-app-bar-title
    >
    <v-app-bar-title>
      <router-link to="/cart">Cart</router-link>
      <v-badge content="+" color="error">
        <v-icon>mdi-cart-outline</v-icon>
      </v-badge>
    </v-app-bar-title>
  </v-toolbar>
</template>



<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>