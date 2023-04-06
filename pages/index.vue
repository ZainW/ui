<script setup lang="ts">
import ZButton from '~~/components/ZButton.vue'
type ButtonProps = InstanceType<typeof ZButton>['$props']

const textInput = ref('Yo')
const toggle = ref(false)
const size = ref<ButtonProps['size']>('md')
interface sizeOption {
  key: string
  value: ButtonProps['size']
}
const sizeOptions = ref([{ key: 'Small', value: 'sm' }, { key: 'Medium', value: 'md' }, { key: 'Large', value: 'lg' }])

const variantOptions = ref([
  { key: 'Primary', value: 'primary' },
  { key: 'Destructive', value: 'destructive' },
  { key: 'Outline', value: 'outline' },
  { key: 'Subtle', value: 'subtle' },
  { key: 'Ghost', value: 'ghost' },
  { key: 'Link', value: 'link' },
])
const variant = ref<ButtonProps['variant']>('primary')
</script>

<template>
  <div class="block h-full font-satoshi">
    <div class="grid w-full max-w-sm items-center gap-1.5 ml-10">
      <ZLabel for="input-!">
        Input
      </ZLabel>
      <ZInput id="input-!" v-model="textInput" placeholder="Input" />
      {{ textInput }}
    </div>
    <div class="grid grid-cols-2 mt-10">
      <div class="flex justify-center items-center">
        <ZButton :size="size" :variant="variant">
          Button
        </ZButton>
      </div>
      <div class="flex gap-12">
        <ZRadioGroup v-model="size" label="Button Size Props" :options="sizeOptions" />
        <ZRadioGroup v-model="variant" :options="variantOptions" label="Variant" />
      </div>
    </div>
    <div class="gap-4 grid grid-cols-2 mx-10">
      <div class="flex items-center">
        <ZToggle v-model="toggle" />
        <span class="ml-4 font-medium">not a label: {{ toggle }}</span>
      </div>
      <div class="">
        <SwitchGroup
          as="div"
          class="flex items-center"
        >
          <Switch
            v-model="toggle"
            :class="[toggle ? 'bg-slate-600' : 'bg-gray-300']"
            class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 m-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600"
          >
            <span
              aria-hidden="true"
              class="pointer-events-none inline-block h-5 w-5 rounded-full bg-slate-50 shadow transform ring-0 transition ease-in-out duration-200" :class="[toggle ? 'translate-x-5' : 'translate-x-0']"
            />
          </Switch>
          <SwitchLabel
            as="span"
            class="ml-3"
          >
            <span class="text-base font-medium text-slate-900">Label</span>
          </SwitchLabel>
        </SwitchGroup>
      </div>
    </div>
    <div>
      <span>Phone</span>
      <div class="mockup-phone">
        <div class="camera" />
        <div class="display h-full">
          <div class="artboard bg-white phone-1">
            <div class="chat chat-start pt-[4rem]">
              <div class="chat-bubble bg-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore natus nesciunt expedita aliquam dolor modi, corrupti doloribus quam, itaque, dicta unde eum ducimus nam omnis? Est id illo commodi assumenda!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
