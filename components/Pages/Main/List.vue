<template>
  <div class="products-list">
    <v-card
      v-for="(product) in products"
      :key="product.id"
      class="products-card"
      variant="flat"
    >
      <div class="products-main">
        <div class="products-chips">
          <v-chip>
            <img src="~/assets/icon/eye.svg" alt="eye">
            {{ convertNumberForView(product.views) }}
          </v-chip>
          <v-chip>
            <img src="~/assets/icon/calendar.svg" alt="calendar">
            {{ inflectUnit(product.days, "day") }}
          </v-chip>
        </div>
        <img
          :src="product.img"
          class="products-photo"
          alt="user"
        >
        <div class="products-info">
          <div class="products-price">{{ convertNumberForView(product.price) }} ₽</div>
          <div class="products-name">{{ product.name }}</div>
        </div>
        <div
          :class="{
            'products-action': true,
            'products-action_promoted': product.isPromote
          }">
          <div v-if="product.isPromote">Объявление продвигается</div>
          <template v-else>
            <div class="products-action-views">
              Увеличьте количество просмотров
            </div>
            <div>
              <v-btn class="products-action-button">Продвигать</v-btn>
            </div>
          </template>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

const store = useProductsStore();

const { productsList: products } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.products {
  &-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0 32px 64px;
    align-items: flex-start;
  }
  &-card {
    background-color: transparent;
    border-radius: 20px;
    display: flex !important;
    flex-direction: column;
    width: 415px;
  }
  &-photo {
    height: 322px;
    border-radius: 20px;
    width: 100%;
  }
  &-main {
    position: relative;
  }
  &-chips {
    .v-chip__content {
      @include font-8;
    }
    position: absolute;
    top: 8px;
    left: 8px;
    display: flex;
    gap: 6px;
    width: 100%;
    > span {
      background: rgba(27, 29, 34, 0.6);
      border-radius: 12px;
      color: var(--gray-color-six);
      padding: 2px 8px 0 8px;
      img {
        width: 22px;
        margin-right: 10px;
      }
    }
  }
  &-info {
    padding: 7px 0 8px 6px;
    border-bottom: 1px solid var(--gray-color-five);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &-price {
    @include font-11;
  }
  &-name {
    @include font-12;
  }
  &-action {
    @include font-8;
    padding: 16px 0px 20px 6px;
    display: flex;
    justify-content: space-between;
    &-views {
      align-self: center
    }
    &-button {
      padding: 0 12px;
      border-radius: 8px;
      text-transform: none;
      background: var(--green-color);
      color: var(--background-color);
    }
    &_promoted {
      @include font-5;
      padding-top: 21px;
      justify-content: center;
      color: var(--green-color);
    }
  }
}
@media screen and (max-width: 565px) {
  .products {
    &-list {
      flex-direction: column;
      align-items: center;
      margin: 0 8px;
    }
  }
}
</style>