<script setup lang="ts">
defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])
</script>

<template>
  <Switch :model-value="modelValue" class="relative bg-slate-300 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2" :class="[modelValue ? 'bg-slate-600' : 'bg-gray-200']" @update:model-value="value => emits('update:modelValue', value)">
    <span class="sr-only">Use setting</span>
    <span class="pointer-events-none relative  inline-block h-5 w-5 transform rounded-full bg-slate-50 shadow ring-0 transition duration-200 ease-in-out" :class="[modelValue ? 'translate-x-5' : 'translate-x-0']">
      <span class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity" :class="[modelValue ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in']" aria-hidden="true">
        <span class="h-3 w-3 i-heroicons-x-mark-20-solid text-slate-900" />
      </span>
      <span class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity" :class="[modelValue ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out']" aria-hidden="true">
        <span class="h-3 w-3 i-heroicons-check-20-solid text-slate-900" />
      </span>
    </span>
  </Switch>
</template>
