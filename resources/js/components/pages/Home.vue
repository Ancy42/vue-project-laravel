<script setup>
    import { useMainStore } from '../../store'
    const store = useMainStore()
</script>

<template>
    <h1>Home Page</h1>

    <h2>Count: {{ store.count }}</h2>
    <button @click="store.increment">Increase</button>
</template>