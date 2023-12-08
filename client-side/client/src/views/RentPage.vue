<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
import Card from '../components/Card.vue';

export default {
    name: "RentPage",
    components: { Card },
    methods: {
        ...mapActions(useCounterStore, ['fetchMotorcycles'])
    },
    created() {
        this.fetchMotorcycles()
    }
}
</script>

<template>
    <div class="container motor-section" style="margin-top: 84px">
        <div class="text-center pt-5">
            <h2 class="">List of Motorcycle</h2>
            <p class="fs-5 pb-3">
              Our best motorcycles are the choice that can make you reach your destination quickly without exception.
            </p>
        </div>
        <div class="mt-5">
            <div class="row">
                <Card />
            </div>
        </div>
    </div>
</template>