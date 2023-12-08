<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
import NewsPage from './NewsPage.vue'
export default {
    name: "HomepageView",
    components: {
        NewsPage,
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchNews'])
    },
    created() {
        this.fetchNews()
    }
}
</script>

<template>
    <div class="header-section">
        <div class="header-img">
            <img src="../assets/2-5.png"
                alt="yamaha" />
        </div>
        <div class="title-header">
            <h1>Rental-In</h1>
            <h4>
                Rent your motor vehicle with us, and comfort and safety will always accompany you.
            </h4>
        </div>
    </div>
    <div class="company-section bg-dark">
        <div class="company-profile text-center p-5 text-light">
            <h4 class="pb-2">About Us</h4>
            <h3 class="pb-2">Rental-In</h3>
            <p>
                Rental-In is a transportation service company based in Medan that specializes in providing rental services for racing motorcycles. We recognize the growth and development of the internet in Indonesia, which has had a significant impact on various aspects of life, including communication, knowledge, and business potential that utilize online platforms for operations.
            </p>
            <a href="" @click="this.$router.push('/about')">
                <button type="button" class="btn btn-outline-info btn-sm">
                    See Details...
                </button>
            </a>
        </div>
    </div>
    <div class="offer-section container">
        <div class="text-center pt-4">
            <h2>Our Offers</h2>
            <p class="fs-5">
                Get offers that will make you even happier and more joyful while riding.
            </p>
        </div>
        <div class="row my-5 justify-content-center gap-5">
            <div class="card col-md-3 text-bg-dark" style="height: 380px; width: 280px">
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <img src="../assets/promo.png" alt="Promo" />
                    <h4 class="card-title text-light">Promo</h4>
                    <p class="card-text text-light">
                        Whether for business or leisure purposes that can make you prosperous, you can save with Rental-In.
                    </p>
                </div>
            </div>
            <div class="card col-md-3 text-bg-dark" style="height: 380px; width: 280px">
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <img src="../assets/partner.png" alt="Partner" style="height: 160px; margin-bottom: 20px;" />
                    <h4 class="card-title text-light">Partner</h4>
                    <p class="card-text text-light">
                        We verify the data of our partners and users to ensure the smooth and safe delivery of our services without causing any harm to us.
                    </p>
                </div>
            </div>
            <div class="card col-md-3 text-bg-dark" style="height: 380px; width: 280px">
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <img src="../assets/diskon.png" alt="Discount" />
                    <h4 class="card-title text-light">Discount</h4>
                    <p class="card-text text-light">
                        Enjoy special benefits and discounts for our loyal customers and Rental-In members. You can save more and, of course, become wealthier.
                    </p>
                </div>
            </div>
            <div class="card col-md-3 text-bg-dark" style="height: 380px; width: 280px">
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <img src="../assets/referal.png" alt="Referral" class="mb-5" />
                    <h4 class="card-title text-light">Referral</h4>
                    <p class="card-text text-light">
                        Invite and encourage your friends to join Rental-In and receive cash rewards and exciting promotions for you and your family.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <NewsPage />
</template>

<style>
.navbar-section {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
    transition: 0.2s linear;
}

.header-section {
    display: flex;
    position: relative;
}

.header-img,
img {
    height: 100vh;
    width: 100%;
    background-size: cover;
}

.title-header {
    position: absolute;
    margin-top: 320px;
    margin-left: 64px;
    color: #ccc;
}
</style>