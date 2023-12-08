<script>
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
import { RouterLink } from 'vue-router'

export default {
    name: 'Navbar',
    computed: {
        ...mapState(useCounterStore, ['isLogin'])
    },
    methods: {
        ...mapActions(useCounterStore, ['handleLogout'])
    }
}
</script>

<template>
    <div class="navbar-section">
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid p-3">
                <RouterLink class="navbar-brand mx-4" to="/">Rental-In</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/about">About Us</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/rent">Motorcycle Rent</RouterLink>
                        </li>
                    </ul>
                    <ul class="navbar-nav mx-4" v-if="!isLogin">
                        <li class="nav-item">
                            <RouterLink to="/login" class="nav-link">Login</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/register" class="nav-link">Register</RouterLink>
                        </li>
                    </ul>
                    <ul class="navbar-nav mx-4" v-if="isLogin">
                        <li class="nav-item">
                            <a to="/login" class="nav-link" href="" @click.prevent="handleLogout">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>