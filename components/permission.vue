<script setup lang="ts">
defineProps<{
  permission: LicenseMeta
}>()
</script>

<template>
  <div class="inline-flex items-center gap-1 text-sm">
    <UIcon name="i-tabler-circle-check" class="text-green-500" />
    <span>{{ permission.label }}</span>
  </div>
</template>
