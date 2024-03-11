<template>
  <div class="status-info">
    <span v-if="status.isVerifyed">
      <img
        src="~/assets/icon/premium.svg"
        class="status-info_verifyed"
        alt="verifyed-icon"
      >
      Документы проверены
    </span>
    <span v-if="status.isVerifyed" class="status-divider">
      ·
    </span>
    <span v-if="status.rating !== null">
      <img
        src="~/assets/icon/star.svg"
        alt="star-icon"
      >
      {{ status.rating }}
    </span>
    <span v-if="status.rating !== null" class="status-divider">
      ·
    </span>
    <span>
      {{
        status.reviews
          ? inflectUnit(convertNumberForView(status.reviews), 'review')
          : 'Нет отзывов'
      }}
    </span>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  status: {
    type: Object,
    default: { rating: null, reviews: 0 },
    // { isVerifyed: Boolean, rating: Number | null, reviews: Number }
  },
});

const { status } = toRefs(props);
</script>

<style lang="scss" scoped>
.status {
  &-info {
    @include font-5;
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
    > span {
      display: inline-block;
    }
    img {
      width: 15px;
      height: 18px;
      vertical-align: text-top;
    }
    &_verifyed {
      margin-right: 4px;
    }
  }
  &-icon {
    width: 16px;
    height: 16px;
  }
  &-title {
    @include font-4;
    color: var(--base-color-second);
  }
  &-divider {
    font-size: 28px;
    font-weight: bold;
  }
}
</style>