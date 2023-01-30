<template>
  <v-container>
    <v-row class="pa-4" no-gutters>
      <v-col col="12">
        <v-card
          class="mx-auto"
          max-width="500"
          v-for="market in markets"
          :key="market.id"
        >
          <v-card-text>
            <p class="text-h4 text--primary">{{ market.name }}</p>
            <div class="text--primary">
              <img :src="market.logo" />
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn variant="text" color="teal-accent-4" @click="reveal = true">
              Learn More
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%"
            >
              <v-card-text class="pb-0">
                <p class="text-h6 text--primary">Rate: {{ market.rate }}</p>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn
                  variant="text"
                  color="teal-accent-4"
                  @click="reveal = false"
                >
                  Close
                </v-btn>
                <v-btn
                  variant="text"
                  color="teal-accent-4"
                  @click="checkMenu(market.id)"
                >
                  Check Menu</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import marketData from "../assets/db.json";

export default {
  data: () => ({
    reveal: false,
    markets: marketData.markets,
  }),

  methods: {
    checkMenu(id) {
      this.$router.push(`/markets/${id}`);
      console.log(this.$router.push);
    },
  },
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

.mx-auto {
  margin: 20px auto;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
}
</style>
