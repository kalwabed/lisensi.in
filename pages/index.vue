<script setup lang="ts">
useHead({
  title: 'Lisensi.in yaaa',
})

const licenseText = ref('')
const selectedLicense = ref(licenses[0])
const name = ref('')
const fileHref = ref()
const isOpen = ref(false)
const year = ref(new Date().getFullYear().toString())

const { copy, copied } = useClipboard()

function download() {
  const blob = new Blob([licenseText.value], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  fileHref.value.href = url
  fileHref.value.click()

  URL.revokeObjectURL(url)
}

watch([selectedLicense, name, year], () => {
  switch (selectedLicense.value.id) {
    case 'mit':
      licenseText.value = toMit(year.value, name.value)
      break
    case 'apache-2':
      licenseText.value = toApache2(year.value, name.value)
      break
    case 'gpl-3':
      licenseText.value = toGpl3()
      break

    default:
      licenseText.value = toGpl3()
      break
  }
}, { immediate: true })
</script>

<template>
  <div class="flex flex-col w-full gap-4 mt-8">
    <a ref="fileHref" class="hidden" href="#" download="LICENSE" />
    <div class="flex justify-between">
      <h1 class="text-4xl font-bold">
        {{ selectedLicense.name }}
      </h1>
      <div class="flex items-center gap-2">
        <UTooltip text="Salin">
          <UButton
            color="gray" variant="soft" :disabled="copied"
            :icon="copied ? 'i-tabler-clipboard-check' : 'i-tabler-clipboard-copy'" @click="copy(licenseText)"
          />
        </UTooltip>
        <UTooltip text="Unduh">
          <UButton icon="i-tabler-file-download" variant="soft" color="gray" @click="download()" />
        </UTooltip>
      </div>
    </div>

    <div class="flex w-full gap-8">
      <aside class="flex flex-col w-1/4 gap-4">
        <UFormGroup label="Lisensi">
          <USelectMenu v-model="selectedLicense" :options="licenses" placeholder="Pilih lisensi" />
        </UFormGroup>
        <UFormGroup v-if="selectedLicense.withInput" label="Nama pemegang">
          <UInput v-model="name" placeholder="cth. Supratman Oye" />
        </UFormGroup>
        <UFormGroup v-if="selectedLicense.withInput" label="Tahun">
          <UInput v-model="year" />
        </UFormGroup>
        <small>
          <UIcon name="i-tabler-info-circle" />
          {{ selectedLicense.summary }}
        </small>
        <div class="flex flex-col gap-2">
          <Permission v-for="permission of selectedLicense.permissions" :key="permission.id" :permission="permission" />
        </div>
        <UButton block variant="outline" @click="isOpen = !isOpen">
          Detail {{ selectedLicense.label }}
        </UButton>
      </aside>

      <div class="p-4 rounded license-wrapper w-full bg-gray-900 text-white overflow-auto">
        <pre class="text-wrap">
          {{ licenseText }}
        </pre>
      </div>
    </div>
    <ModalLicenseDetail :id="selectedLicense.id" v-model:open="isOpen" />
  </div>
</template>

<style scoped>
.license-wrapper {
  height: 90vh;
}
</style>
