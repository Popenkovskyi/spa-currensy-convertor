import { defineStore } from "pinia";
import { ref } from "vue";

export const useCurrencySwitchStore = defineStore("currencySwitch", () => {
  const currency = ref("rub");

  function changeCurrency(value) {
    currency.value = value
  }

  return { currency, changeCurrency }
})
