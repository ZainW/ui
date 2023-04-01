<script setup lang="ts">
import { cva } from 'cva'
const labelClasses = cva('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70')
</script>

<template>
  <label :class="labelClasses"><slot /></label>
</template>
