<script setup lang="ts">
defineProps<{
  permission: LicenseMeta
}>()
</script>

<template>
  <div class="inline-flex items-center gap-1 text-sm">
    <UIcon name="i-tabler-circle-check" class="text-green-500" />
    <UTooltip :text="permission.desc" :popper="{ arrow: true }">
      <span>{{ permission.label }}</span>
    </UTooltip>
  </div>
</template>
