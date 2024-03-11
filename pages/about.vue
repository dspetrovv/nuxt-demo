<template>
  <ClientOnly>
    <div class="about">
      <section class="about-main">
        <h1 class="about-title">О компании</h1>
        <article class="about-description">
          {{ description }}
        </article>
      </section>
      <section class="about-select">
        <h1 class="about-select-title">Режим работы</h1>
        <div class="about-select-time">{{ workTime }}</div>
      </section>
      <section class="about-placement">
        <div class="about-placement-info">
          <h1 class="about-placement-title">Местоположение</h1>
          <article class="about-placement-address">
            {{ placement }}
          </article>
        </div>
        <div class="about-placement-map">
          <img src="~/assets/image/map.png" alt="map">
        </div>
      </section>
    </div>
  </ClientOnly>
</template>

<script setup>
useHead({
  title: 'О компании',
});

useInterceptorFetch('/api/products', { server: false });

let description = ref('');
let workTime = ref('');
let placement = ref('');

useFetch('/api/about').then(({ data }) => {
  const { description: desc, workTime: wt, placement: pl } = data.value;
  description.value = desc;
  workTime.value = wt;
  placement.value = pl;
});
</script>

<style lang="scss" scoped>
.about {
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  section {
    max-width: 560px;
  }
  &-select {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: var(--gray-color-five);
    background-color: var(--gray-color-six);
    padding: 20px;
    width: 100%;
    border-radius: 16px;
    &-title {
      @include font-1;
    }
    &-time {
      @include font-7;
    }
  }
  &-main {
    padding: 20px;
  }
  &-title {
    @include font-1;
    color: var(--base-color-second);
    margin: 0;
    margin-bottom: 8px;
  }
  &-description {
    @include font-7;
    color: var(--base-color-second);
  }
  &-placement {
    display: flex;
    width: 100%;
    &-info {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      gap: 8px;
      padding: 20px;
    }
    &-title {
      @include font-1;
    }
    &-address {
      @include font-7;
      color: var(--green-color);
    }
    &-map {
      img {
        width: 200px;
        height: 132px;
        border-radius: 12px;
      }
    }
  }
}

@media screen and (max-width: 565px) {
  .about {
    margin-top: 0;
    margin-bottom: 48px;
    gap: 8px;
    &-main {
      padding: 16px;
    }
    &-placement {
      flex-direction: column;
      &-info {
        padding: 16px;
      }
      &-map {
        img {
          width: 100%;
          height: 128px;
        }
      }
    }
  }
}
</style>