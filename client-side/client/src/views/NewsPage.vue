<script>
import CardNews from '../components/CardNews.vue';
export default {
    name: 'News',
    components: { CardNews }
}
</script>

<template>
    <div class="news-section container">
        <div class="text-center pt-5">
            <h2 class="">News Update</h2>
            <p class="fs-5">
              Get the information you need about technology and automotive!
            </p>
        </div>
        <div class="row d-flex justify-content-center m-4">
            <CardNews />
        </div>
    </div>
</template>