<template>
    <div class="row">
      <div
        class="card col-md-3 text-bg-light m-3"
        style="height: 200px; width: 240px"
        v-for="newest in news"
        :key="newest.id"
      >
        <img
          :src="newest.image?.thumbnail?.contentUrl"
          alt="News"
          style="overflow: hidden;"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-end">
          <p class="card-title text-light text-center">{{ newest.name }}</p>
          <a :href="newest.url" target="_blank" class="link-light mx-2">Read More...</a>
        </div>
      </div>
    </div>
  </template>

<script>
import { useCounterStore } from '../stores/counter';
import { mapState } from 'pinia';
export default {
    name: 'CardNews',
    computed: {
        ...mapState(useCounterStore, ['news'])
    }
}
</script>
