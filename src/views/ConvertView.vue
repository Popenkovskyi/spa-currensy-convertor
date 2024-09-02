<template>
  <div class="convert">

    <div class="currency-select">
      <select @change="(event) => changeCurrencyType(event.target.value)" name="currency" id="firstCurrency">
        <option v-for="item in firstCurrencyOptions" :value="item" :key="item">{{ item.toUpperCase() }}</option>
      </select>
      <CustomInput :value="firstCurrency" :placeholder="firstType"
        @change-currency="(value) => updateCurrency(value)" />
    </div>

    <div class="currency-select">
      <select @change="(event) => changeCurrencyType(event.target.value, 'second')" name="currency" id="secondCurrency">
        <option v-for="item in secondCurrencyOptions" :value="item" :key="item">{{ item.toUpperCase() }}</option>
      </select>
      <CustomInput :value="secondCurrency" :placeholder="secondType"
        @change-currency="(value) => updateCurrency(value, 'second')" />
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import currencyRange from "@/mock/currensy.json";
import CustomInput from "@/components/CustomInput.vue";

const CURRENCY_OPTIONS = ["rub", "usd", "eur"];

const firstCurrency = ref(null);
const secondCurrency = ref(null);
const currencyType = ref("usd-rub");

const firstType = ref("rub");
const secondType = ref("usd");

const firstCurrencyOptions = computed(() => CURRENCY_OPTIONS.filter(el => el !== secondType.value));
const secondCurrencyOptions = computed(() => CURRENCY_OPTIONS.filter(el => el !== firstType.value));

const CURRENCY_DIFFERENCE = ref(currencyRange[currencyType.value]);

function changeCurrencyType(value, selectType) {
  if (selectType === "second") {
    secondType.value = value;
  } else {
    firstType.value = value;
  }

  CURRENCY_DIFFERENCE.value = currencyRange[`${firstType.value}-${secondType.value}`];
  currencyType.value = currencyRange[`${firstType.value}-${secondType.value}`];

  updateCurrency(firstCurrency.value);
}

function updateCurrency(value, inputType) {
  if (inputType === "second") {
    firstCurrency.value = (value / CURRENCY_DIFFERENCE.value).toFixed(2);
    secondCurrency.value = value;

    return
  }

  firstCurrency.value = value;
  secondCurrency.value = (value * CURRENCY_DIFFERENCE.value).toFixed(2);
}
</script>

<style scoped>
.convert {
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 40px;
}

select {
  border-radius: 16px 0 0 16px;
  border: none;
  padding: 4px 8px;
}

.currency-select {
  display: flex;
  gap: 4px;
}

/* @media (min-width: 1024px) {
  .convert {
    min-height: 100vh;
    display: flex;
    align-items: center;
    gap: 24px;
  }
} */
</style>
