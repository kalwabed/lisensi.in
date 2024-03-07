export const limitation = {
  trademark: {
    id: 'trademark',
    label: 'Merek Dagang',
    desc: 'Merek dagang terdaftar dilindungi oleh hukum.',
  },
  liability: {
    id: 'liability',
    label: 'Tanggung Jawab',
    desc: 'Pencipta tidak bertanggung jawab atas kerusakan.',
  },
  warranty: {
    id: 'warranty',
    label: 'Garansi',
    desc: 'Lisensi tidak menjamin software bebas dari cacat atau bug.',
  },
  patent: {
    id: 'patent',
    label: 'Hak Paten',
    desc: 'Lisensi tidak memberikan hak paten.',
  },
}

export const permission = {
  commercial: {
    id: 'commercial',
    label: 'Komersial',
    desc: 'Izin untuk menggunakan software untuk tujuan komersial.',
  },
  modification: {
    id: 'modification',
    label: 'Modifikasi',
    desc: 'Izin untuk mengubah dan membuat versi turunan software.',
  },
  distribution: {
    id: 'distribution',
    label: 'Distribusi',
    desc: 'Izin untuk menyebarkan software kepada orang lain.',
  },
  private: {
    id: 'private',
    label: 'Pribadi',
    desc: 'Izin untuk menggunakan untuk keperluan pribadi.',
  },
  patent: {
    id: 'patent',
    label: 'Paten',
    desc: 'Izin untuk menggunakan paten yang terkait dengan software.',
  },
}

export const condition = {
  copyright: {
    id: 'copyright',
    label: 'Pemberitahuan Lisensi',
    desc: 'Sertakan pemberitahuan hak cipta dan lisensi dalam software.',
  },
  state: {
    id: 'state',
    label: 'Status',
    desc: 'Beri tahu perubahan status software (alpha, beta, stabil).',
  },
  source: {
    id: 'source',
    label: 'Membuka Sumber',
    desc: 'Ungkapkan kode sumber software.',
  },
  license: {
    id: 'license',
    label: 'Lisensi yang Sama',
    desc: 'Distribusikan software dengan lisensi yang sama.',
  },
  copyrightSource: {
    id: 'copyrightSource',
    label: 'Pemberitahuan Lisensi untuk Sumber',
    desc: 'Sertakan pemberitahuan hak cipta dan lisensi dalam kode sumber.',
  },
  networkUse: {
    id: 'networkUse',
    label: 'Penggunaan Jaringan adalah Distribusi',
    desc: 'Penggunaan software di jaringan dianggap sebagai distribusi.',
  },
  licenseLibrary: {
    id: 'licenseLibrary',
    label: 'Lisensi yang Sama (Library)',
    desc: 'Pustaka tertaut harus memiliki lisensi yang kompatibel.',
  },
  licenseFile: {
    id: 'licenseFile',
    label: 'Lisensi yang Sama (File)',
    desc: 'File yang dimodifikasi harus memiliki lisensi yang sama.',
  },
}

export const licenses: License[] = [
  {
    label: 'MIT',
    name: 'The MIT License',
    id: 'mit',
    summary: 'Lisensi ini cocok untuk proyek perangkat lunak open source yang ingin didistribusikan secara luas dan digunakan oleh banyak orang.',
    permissions: [permission.commercial, permission.modification, permission.distribution, permission.private],
    limitations: [limitation.liability, limitation.warranty],
    conditions: [condition.copyright],
  },
  {
    name: 'Apache License, Version 2.0',
    label: 'Apache-2.0',
    id: 'apache',
    summary: 'Lisensi Apache 2 permisif, memberikan hak luas untuk pengguna. Cocok untuk proyek open source yang ingin didistribusikan secara luas dan dikomersialkan.',
    permissions: [permission.commercial, permission.modification, permission.distribution, permission.private, permission.patent],
    limitations: [limitation.liability, limitation.warranty, limitation.trademark],
    conditions: [condition.copyright],
  },
]

export interface License {
  label: string
  name: string
  id: string
  summary: string
  permissions: LicenseMeta[]
  limitations: LicenseMeta[]
  conditions: LicenseMeta[]
}

export interface LicenseMeta {
  id: string
  label: string
  desc: string
}
