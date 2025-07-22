export enum SettingSection {
  KeyManagement = 'KeyManagement',
  StylingCodeEditor = 'StylingCodeEditor',
  Info = 'Info'
}

export interface SettingItem {
  icon: React.ReactNode
  label: string
  key: SettingSection
}
