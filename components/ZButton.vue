<script setup lang="ts">
import { type VariantProps, cva } from 'class-variance-authority'

// defineProps<{
//   variant?: String as  PropType<ButtonProps['variant']>
//   size?:  String as  PropType<ButtonProps['size']>
// }>()
defineProps({
  variant: {
    type: String as PropType<'primary' | 'destructive' | 'outline' | 'subtle' | 'ghost' | 'link' | null>,
    required: true,
  },
  size: {
    type: String as PropType<ButtonProps['size']>,
    required: true,
  },
})
const buttonVariants = cva(
  'inline-flex items-center justify-center  rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800',
  {
    variants: {
      variant: {
        primary:
          'bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
        outline:
          'bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100',
        subtle:
          'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
        ghost:
          'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
        link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
      },
      size: {
        sm: 'h-9 px-2 rounded-md',
        md: 'h-10 py-2 px-4',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)
type ButtonProps = Required<VariantProps<typeof buttonVariants>>
</script>

<template>
  <button :class="buttonVariants({ size, variant })">
    <slot />
  </button>
</template>
