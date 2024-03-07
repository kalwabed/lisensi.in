<script setup lang="ts">
const props = defineProps<{
  id: string
}>()
const isOpen = defineModel<boolean>('open')

const selectedLicense = computed(() => {
  return licenses.find(lic => lic.id === props.id)
})
</script>

<template>
  <UModal v-model="isOpen" :ui="{ width: 'md:max-w-xl' }">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold leading-6 text-gray-900 dark:text-white">
            {{ selectedLicense?.label }}
          </h3>
          <UButton
            color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
            @click="isOpen = false"
          />
        </div>
      </template>

      <p class="mb-4">
        {{ selectedLicense?.summary }}
      </p>

      <div class="flex flex-col gap-6">
        <div class="space-y-3">
          <b>Izin</b>
          <div v-for="perm of selectedLicense?.permissions" :key="perm.id">
            <div class="flex items-center gap-1">
              <UIcon name="i-tabler-circle-check" class="text-green-500" />
              <span>
                {{ perm.label }}
              </span>
            </div>
            <p>
              {{ perm.desc }}
            </p>
          </div>
        </div>
        <div class="space-y-3">
          <b>Batasan</b>
          <div v-for="limit of selectedLicense?.limitations" :key="limit.id">
            <div class="flex items-center gap-1">
              <UIcon name="i-tabler-circle-x" class="text-red-500" />
              <span>
                {{ limit.label }}
              </span>
            </div>
            <p>
              {{ limit.desc }}
            </p>
          </div>
        </div>
        <div class="space-y-3">
          <b>Ketentuan</b>
          <div v-for="condition of selectedLicense?.conditions" :key="condition.id">
            <div class="flex items-center gap-1">
              <UIcon name="i-tabler-alert-circle" class="text-blue-500" />
              <span>
                {{ condition.label }}
              </span>
            </div>
            <p>
              {{ condition.desc }}
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <UButton color="gray" variant="ghost" @click="isOpen = false">
          Tutup
        </UButton>
      </template>
    </UCard>
  </UModal>
</template>
