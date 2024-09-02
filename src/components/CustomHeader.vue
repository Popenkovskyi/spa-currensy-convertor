<template>
    <header>
        <nav>
            <RouterLink to="/">Главная</RouterLink>
            <RouterLink to="/convert">Конвертация</RouterLink>
        </nav>

        <select @change="(event) => changeCurrency(event.target.value)" :value="currency" name="currensy"
            id="currencySwitch">
            <option value="rub">RUB</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
        </select>
    </header>
</template>


<script setup>
import { RouterLink } from "vue-router";
import { useCurrencySwitchStore } from "@/stores/currencySwitch";

const { currency, changeCurrency } = useCurrencySwitchStore();

</script>

<style>
header {
    display: flex;
    gap: 24px;
    padding: 24px 32px;

    background-color: var(--vt-c-white);
}

nav {
    display: flex;
    gap: 12px;
}
</style>