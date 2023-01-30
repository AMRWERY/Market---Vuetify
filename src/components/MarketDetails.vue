<template>
  <v-card
    v-for="item in market.items"
    :key="item.id"
    class="mx-auto"
    max-width="500"
    variant="outlined"
  >
    <v-card-item>
      <div>
        <div class="text-overline mb-1">${{ item.price }}</div>
        <div class="text-h6 mb-1">{{ item.title }}</div>
        <div class="text-caption">
          <v-img
            :src="item.image"
            height="125"
            cover
            class="bg-grey-lighten-2"
          ></v-img>
        </div>
      </div>
    </v-card-item>

    <v-card-actions class="btn">
      <v-btn variant="outlined">Add to Cart</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import marketData from "../assets/db.json";

export default {
  data() {
    return {
      market: marketData.markets,
    };
  },

  created() {
    const marketId = this.$route.params.marketId;
    console.log(this.$route.params.marketId);
    this.market = marketData.markets.find((market) => market.id == marketId);
  },
};
</script>

<style scoped>
.mx-auto {
  margin: 20px auto;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
}

.btn {
  margin: auto 10rem;
}
</style>
