<template>
  <div class="products-select">
    <v-select
      v-model="selectedProducts"
      :items="productsSelector"
      item-value="title"
      :menu-props="{
        closeOnClick: true,
        closeOnContentClick: true,
      }"
    >
      <template #item="data">
        <v-list-subheader v-if="data.props.header" class="products-select-subheader">
          {{ data.props.header }}
        </v-list-subheader>
        <div v-else-if="data.props.divider"></div>
        <div v-else class="products-select-element" @click="store.changeProduct(data.item.raw)">
          {{ data.item.value }}
          <span class="products-select-element_count">
            {{ data.item.raw.count }}
          </span>
          <span
            v-if="selectedProducts.title === data.item.value"
            class="products_selected"
          >
            <img src="~/assets/icon/right.svg" alt="selected">
          </span>
        </div>
      </template>
    </v-select>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

const store = useProductsStore();

const {
  selectedProducts,
  productsSelector,
} = storeToRefs(store);
</script>

<style lang="scss">
.products {
  &-select {
    padding: 24px 16px 30px;
    .v-input__details {
      display: none;
    }
    .v-field__outline {
      &::after,
      &::before {
        display: none;
      }
    }
    .v-select__selection-text {
      @include font-3;
      color: var(--base-color-second);
    }
    > div {
      position: relative;
      border-radius: 12px;
      width: 438px;
      background-color: var(--gray-color);
      border: 1px solid var(--gray-color-second);
      margin: auto;
    }
    &-subheader {
      @include font-8;
      padding: 24px 12px 8px !important;
      color: var(--gray-color-third) !important;
    }
    &-element {
      @include font-4;
      cursor: pointer;
      color: var(--base-color-second);
      display: flex;
      padding: 10px 18px;
      gap: 8px;
      position: relative;
      &_count {
        color: var(--gray-color-third);
      }
      &:hover {
        background-color: var(--gray-color);
      }
    }
  }
  &_selected {
    position: absolute;
    right: 0;
  }
}
.v-overlay__content {
  min-width: 304px;
  border-radius: 12px;
}
.v-list {
  background-color: var(--gray-color-six);
  border-radius: 12px;
  padding: 12px 8px;
}
@media screen and (max-width: 565px) {
  .products {
    &-select {
      padding: 16px 8px;
      > div {
        max-width: 415px;
      }
    }
  }
}
</style>