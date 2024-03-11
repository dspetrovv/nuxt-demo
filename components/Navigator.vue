<template>
  <div class="header-city">
    <img src="~/assets/icon/mark.svg" alt="mark">
    <span>{{ city }}</span>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

let city = ref();

onMounted(() => {
  city.value = localStorage.getItem('city');

  if (!city.value) {
    navigator.geolocation.getCurrentPosition((pos) => {
      let { coords: { latitude, longitude } } = pos;

      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .then(data => {
          const { address: { city: userCity } } = data;
          city.value = userCity;
          localStorage.setItem('city', userCity);
        });
    })
  }
});
</script>

<style lang="scss" scoped>

</style>