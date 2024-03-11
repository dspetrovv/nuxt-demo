<template>
  <footer class="footer">
    <nav>
      <div class="footer-company">
        © {{ info.title }} {{ new Date().getFullYear() }}
      </div>
      <div>
        О компании
      </div>
      <div>
        Продавцам
      </div>
      <div>
        Покупателям
      </div>
      <div>
        Разместить объявление
      </div>
      <div class="footer-language">
        <img src="~/assets/icon/flag-rus.svg" alt="flag">
        Русский
      </div>
    </nav>
  </footer>
</template>

<script setup>
import { storeToRefs } from 'pinia';

const globalStore = useGlobalStore();

const { info } = storeToRefs(globalStore);

</script>

<style lang="scss" scoped>
.footer {
  nav {
    @include font-3;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 1440px;
  }
  padding: 24px 32px 40px;
  border: 1px solid var(--gray-color-second);
  background-color: var(--gray-color-six);
  color: var(--gray-color-third);
  &-company {
    color: var(--base-color-second);
  }
  &-language {
    display: flex;
    align-items: center;
    gap: 5px;
    img {
      position: relative;
      width: 24px;
      height: 24px;
    }
  }
}
@media screen and (max-width: 565px) {
  .footer {
    flex-direction: column;
    padding: 24px 16px 40px;
  }
}
</style>