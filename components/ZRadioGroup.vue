<script setup lang="ts">
interface RadioProps {
  modelValue: string
  options: Option[]
  label: string
}
interface Option {
  key: string
  value: string
}
defineProps<RadioProps>()
const emits = defineEmits(['update:modelValue'])
</script>

<template>
  <RadioGroup :model-value="modelValue" @update:model-value="emits('update:modelValue', $event)">
    <RadioGroupLabel>{{ label }}</RadioGroupLabel>
    <!-- Use the `active` state to conditionally style the active option. -->
    <!-- Use the `checked` state to conditionally style the checked option. -->
    <RadioGroupOption
      v-for="option in options"
      :key="option.value"
      v-slot="{ checked }"
      :value="option.value"
      as="template"
    >
      <li>
        <span v-show="checked" class="i-heroicons-check-20-solid" />
        {{ option.key }}
      </li>
    </RadioGroupOption>
  </RadioGroup>
</template>
