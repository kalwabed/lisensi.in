export const limitation = {
  trademark: {
    id: 'trademark',
    label: 'Merek dagang',
    desc: 'terserah kata saya',
  },
  liability: {
    id: 'liability',
    label: 'Kewajiban',
    desc: 'apakah real',
  },
  warranty: {
    id: 'warranty',
    label: 'Jaminan',
    desc: 'Gak ada kewajiban',
  },
}

export const permission = {
  commercial: {
    id: 'commercial',
    label: 'Komersial',
    desc: 'Boleh dikomersialkan',
  },
  modification: {
    id: 'modification',
    label: 'Modifikasi',
    desc: 'Boleh dikemas ulang',
  },
  distribution: {
    id: 'distribution',
    label: 'Distribusi',
    desc: 'Boleh diantar kemana aja',
  },
  private: {
    id: 'private',
    label: 'Pribadi',
    desc: 'Boleh pribadi, nggak harus umum',
  },
  patent: {
    id: 'patent',
    label: 'Paten',
    desc: 'Boleh dibuat hak paten',
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
    conditions: ['commercial', 'modification', 'distribution', 'private', 'patent'],
  },
  {
    name: 'Apache License, Version 2.0',
    label: 'Apache-2.0',
    id: 'apache',
    summary: 'Lisensi Apache 2 permisif, memberikan hak luas untuk pengguna. Cocok untuk proyek open source yang ingin didistribusikan secara luas dan dikomersialkan.',
    permissions: [permission.commercial, permission.modification, permission.distribution, permission.private, permission.patent],
    limitations: [limitation.liability, limitation.warranty, limitation.trademark],
    conditions: ['commercial', 'modification', 'distribution', 'private', 'patent'],
  },
]

export interface License {
  label: string
  name: string
  id: string
  summary: string
  permissions: LicenseMeta[]
  limitations: LicenseMeta[]
  conditions: string[]
}

export interface LicenseMeta {
  id: string
  label: string
  desc: string
}
