<script setup lang="ts">
interface RadioProps {
  modelValue: Option['value']
  options: Option[]
  label: string
  description?: string
  accessabilityLabel?: string
}
interface Option {
  key: string
  value: any
}
defineProps<RadioProps>()
const emits = defineEmits(['update:modelValue'])
function onInput(e: Event) {
  emits('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <div>
    <label class="font-semibold text-slate-900 dark:text-slate-50">{{ label }}</label>
    <div class="space-y-1">
      <div v-for="option in options" :key="option.value" class="flex items-center">
        <input :id="option.value" type="radio" :checked="option.value === modelValue" :value="option.value" class="h-4 w-4 border-gray-300 text-slate-600 dark:text-slate-50 focus:ring-slate-600 dark:focus:ring-slate-50" @input="onInput">
        <label :for="option.value" class="ml-1 block text-sm font-medium leading-6 text-slate-900 dark:text-slate-50">{{ option.key }}</label>
      </div>
    </div>
  </div>
</template>
