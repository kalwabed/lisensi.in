export const licenses: LicenseMeta[] = [
  {
    label: 'MIT',
    name: 'The MIT License',
    id: 'mit',
    summary: 'Lisensi ini cocok untuk proyek perangkat lunak open source yang ingin didistribusikan secara luas dan digunakan oleh banyak orang.',
    permissions: ['commercial', 'modification', 'distribution', 'private'],
    limitations: ['commercial', 'modification', 'distribution', 'private', 'patent'],
    conditions: ['commercial', 'modification', 'distribution', 'private', 'patent'],
  },
  {
    name: 'Apache License, Version 2.0',
    label: 'Apache-2.0',
    id: 'apache',
    summary: 'Lisensi Apache 2 permisif, memberikan hak luas untuk pengguna. Cocok untuk proyek open source yang ingin didistribusikan secara luas dan dikomersialkan.',
    permissions: ['commercial', 'modification', 'distribution', 'private', 'patent'],
    limitations: ['commercial', 'modification', 'distribution', 'private', 'patent'],
    conditions: ['commercial', 'modification', 'distribution', 'private', 'patent'],
  },
]

export interface LicenseMeta {
  label: string
  name: string
  id: string
  summary: string
  permissions: string[]
  limitations: string[]
  conditions: string[]
}
