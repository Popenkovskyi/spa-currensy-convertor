<template>
    <input :value="value" type="number" @input="({ target }) => emit('changeCurrency', target.value)" :placeholder>
</template>

<script setup>
const { value } = defineProps(["value", "placeholder"]);

const emit = defineEmits(["changeCurrency"]);
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield;
}

input {
    border: none;
    border-radius: 0 16px 16px 0;
    padding: 4px 8px;
}
</style>