<script setup lang="ts">
useHead({
  title: "Lisensi.in yaaa"
})

const licenses = [
  {
    label: 'MIT',
    value: 'mit'
  },
  {
    label: 'Apache',
    value: 'apache'
  }
]

const licenseText = ref('')
const license = ref('mit')
const name = ref('')
const fileHref = ref()
const year = ref(new Date().getFullYear().toString())

const { copy, copied } = useClipboard()

const download = () => {
  const blob = new Blob([licenseText.value], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  fileHref.value.href = url
  fileHref.value.download = "LICENSE"
  fileHref.value.click()

  URL.revokeObjectURL(url)
};

watch([license, name, year], () => {
  if (license.value === 'mit') {
    licenseText.value = toMit(year.value, name.value)
  } else {
    licenseText.value = 'haklooo'
  }
}, { immediate: true })
</script>

<template>
  <div class="flex flex-col w-full gap-4 mt-8">
    <a ref="fileHref" class="hidden" href="#"></a>
    <div class="self-end flex items-center gap-2">
      <UTooltip text="Salin">
        <UButton color="gray" variant="soft" @click="copy(licenseText)" :disabled="copied"
          :icon="copied ? 'i-tabler-clipboard-check' : 'i-tabler-clipboard-copy'" />
      </UTooltip>
      <UTooltip text="Unduh">
        <UButton icon="i-tabler-file-download" variant="soft" color="gray" @click="download()" />
      </UTooltip>
    </div>
    <div class="flex w-full gap-8">
      <div class="flex flex-col w-1/4 gap-4">
        <UFormGroup label="Lisensi">
          <USelectMenu v-model="license" :options="licenses" placeholder="Pilih lisensi" value-attribute="value" />
        </UFormGroup>
        <UFormGroup label="Nama pemegang">
          <UInput v-model="name" placeholder="cth. Supratman Oye" />
        </UFormGroup>
        <UFormGroup label="Tahun">
          <UInput v-model="year" />
        </UFormGroup>
      </div>

      <div class="p-4 rounded w-full bg-gray-900 text-white">
        <pre class="text-wrap">
        {{ licenseText }}
      </pre>
      </div>
    </div>
  </div>
</template>
