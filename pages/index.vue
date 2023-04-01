<script setup lang="ts">
const size = ref('md')
const sizeOptions = [{ key: 'Small', value: 'sm' }, { key: 'Medium', value: 'md' }, { key: 'Large', value: 'lg' }]

const variant = ref('primary')
const variantOptions = [
  { key: 'Primary', value: 'primary' },
  { key: 'Destructive', value: 'destructive' },
  { key: 'Outline', value: 'outline' },
  { key: 'Subtle', value: 'subtle' },
  { key: 'Ghost', value: 'ghost' },
  { key: 'Link', value: 'link' },
]
</script>

<template>
  <div class="block">
    <div class="grid w-full max-w-sm items-center gap-1.5 ml-10">
      <ZLabel for="input-!">
        Input
      </ZLabel>
      <ZInput id="input-!" placeholder="Input" />
    </div>
    <div class="grid grid-cols-2 mt-10">
      <div>
        <ZButton :size="size" :variant="variant">
          Button
        </ZButton>
      </div>
      <div>
        <ZRadioGroup v-model="size" label="Button Size Props" :options="sizeOptions" />
        <ZRadioGroup v-model="variant" :options="variantOptions" label="Variant" />
      </div>
    </div>
  </div>
</template>
