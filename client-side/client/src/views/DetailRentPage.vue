<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
    name: 'DetailRentPage',
    computed: {
        ...mapState(useCounterStore, ['motorcycle'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchDetailMotorcycle', 'handlePayment', 'fetchMotorcycles', 'handleRent'])
    },
    created() {
        this.fetchDetailMotorcycle(this.$route.params.id)
    }
}
</script>

<template>
    <div class="detail-section container mt-5">
        <div class="pt-5">
            <h2 class="pt-4">{{ motorcycle.Merk.name }} {{ motorcycle.type }}</h2>
            <div class="d-flex justify-content-between mt-5">
                <div>
                    <img :src="motorcycle.imageUrl" class="card-img-top" alt="Kawasaki ZX-10" style="height: 320px" />
                </div>
                <div class="card-body row" style="margin-left: 30px;">
                    <div class="col-md-6">
                        <h5 class="card-title">Details Motorcycle.</h5>
                        <div class="card-text mt-3" style="width: 240px">
                            <div class="d-flex justify-content-between">
                                <p>Merk:</p>
                                <p>{{ motorcycle.Merk.name }}</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Motorcycle Type:</p>
                                <p>{{ motorcycle.type }}</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>CC Power:</p>
                                <p>{{ motorcycle.cc }} cc</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Facilities:</p>
                                <p>{{ motorcycle.facility }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="tc-section col-md-6">
                        <h5>Term and Conditions.</h5>
                        <ul>
                            <li>Photocopy or scan of ID card (KTP).</li>
                            <li>Photocopy or scan of valid driver's license (SIM).</li>
                            <li>Active mobile phone number.</li>
                            <li>Selfie photo holding the ID card and driver's license</li>
                            <li>Active mobile phone number of a relative or sibling.</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <div class="mt-4">
                            <button type="button" class="btn btn-outline-success btn-sm"
                                @click="handleRent(this.$route.params.id)" v-if="motorcycle.status === 'booked'">
                                Confirm payment!
                            </button>
                            <button type="button" class="btn btn-outline-primary btn-sm"
                                @click="handlePayment(this.$route.params.id, this.$route.params.price, this.$route.params.trxcode)"
                                v-if="motorcycle.status === 'available'">
                                Booking Now!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>