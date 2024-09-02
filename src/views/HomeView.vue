<template>
  <div class="home">
    <div class="currency-card">
      <h2>Основная валюта {{ currency.toUpperCase() }}</h2>
      <span v-for="{ price, type } in mainCurrency" :key="type">
        1 {{ type.slice(0, 3).toUpperCase() }}
        = {{ price }}
        {{ type.slice(-3).toUpperCase() }}
      </span>
    </div>
    <!-- {{ mainCurrency }} -->
  </div>
</template>


<script setup>
import { ref, computed, watch } from "vue";
import { useCurrencySwitchStore } from "@/stores/currencySwitch";
import currencyRange from "@/mock/currensy.json";

const currency = computed(() => useCurrencySwitchStore().currency);

const mainCurrencies = {
  "rub": ["rub-usd", "rub-eur"],
  "usd": ["usd-rub", "usd-eur"],
  "eur": ["eur-usd", "eur-rub"],
}

const mainCurrency = ref([]);
function fillMainCurrency() {
  mainCurrency.value = [];

  for (let key in currencyRange) {
    if (mainCurrencies[currency.value].includes(key)) mainCurrency.value.push(
      {
        price: currencyRange[key],
        type: key,
      }
    );
  }
}; fillMainCurrency();

watch(
  currency,
  () => fillMainCurrency()
)
</script>

<style>
.currency-card {
  display: flex;
  flex-direction: column;

  max-width: 500px;
  padding: 24px;
  border-radius: 24px;
  background-color: var(--vt-c-white-soft);
  color: var(--vt-c-black-soft);
}

.home {
  padding: 40px;
}

@media (min-width: 1024px) {
  .home {
    display: flex;
    flex-direction: column;
  }
}
</style>