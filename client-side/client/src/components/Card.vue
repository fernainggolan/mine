<script>
import { mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Card",
  data() {
    return {
      trxcode: `TRX${new Date().getTime()}`,
    };
  },
  computed: {
    ...mapState(useCounterStore, ["motorcycles"]),
  },
  methods: {
    formatter(val) {
      return new Intl.NumberFormat("en-ID", {
        style: "currency",
        currency: "IDR",
      }).format(val);
    },
  },
};
</script>

<template>
    <div>
  <div class="col-md-6" v-for="motor in motorcycles" :key="motor.id">
    <div class="card card-content mb-3" style="max-width: 540px">
      <div class="row g-0">
        <div class="col-md-6">
          <img
            :src="motor.imageUrl"
            class="img-fluid rounded-start mt-4"
            alt="ZX-10"
            style="width: 200px; margin-left: 27px"
          />
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">{{ motor.Merk.name }} {{ motor.type }}</h5>
            <div class="card-text">
              <p style="margin: 0px">CC Power: {{ motor.cc }}</p>
              <p style="margin: 0px">
                Price: {{ formatter(motor.price) }} /day
              </p>
              <p>Facilities: {{ motor.facility }}</p>
            </div>
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm"
              disabled
              v-if="motor.status === 'booked'"
            >
              Booked!
            </button>
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click.prevent="
                this.$router.push(
                  `/rent/detail/${motor.id}/${motor.price}/${this.trxcode}`
                )
              "
              v-if="motor.status === 'available'"
            >
              Booking Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style>
.card-content {
  transition: 0.25s linear;
}

.card-content:hover {
  box-shadow: -2px 0px 30px -17px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -2px 0px 30px -17px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 0px 30px -17px rgba(0, 0, 0, 0.75);
  transform: scale(1.03);
  transition: 0.25s linear;
}
</style>
