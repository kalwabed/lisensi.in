<script setup lang="ts">
defineProps<{
  permission: string
}>()

const permissionText = {
  commercial: 'Komersial',
  modification: 'Modifikasi',
  distribution: 'Distribusi',
  private: 'Pribadi',
  patent: 'Hak paten',
}
</script>

<template>
  <div class="inline-flex items-center gap-1 text-sm">
    <UIcon name="i-tabler-circle-check" class="text-green-500" />
    <span>{{ permissionText[permission] }}</span>
  </div>
</template>
