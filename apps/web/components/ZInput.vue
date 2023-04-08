<script setup lang="ts">
import { cva } from 'class-variance-authority'

defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])
const inputClasses = cva('flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900')
function onInput(e: Event) {
  emits('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <input :value="modelValue" :class="inputClasses()" @input="onInput">
</template>
