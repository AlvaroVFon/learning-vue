import { useI18n } from 'vue-i18n'

import UserIcon from '@/components/icons/UserIcon.vue'
import DevicesIcon from '@/components/icons/DevicesIcon.vue'
import KeyIcon from '@/components/icons/KeyIcon.vue'
import ListIcon from '@/components/icons/ListIcon.vue'
import TagsIcon from '@/components/icons/TagsIcon.vue'
import IdcardIcon from '@/components/icons/IdcardIcon.vue'
import PaletteIcon from '@/components/icons/PaletteIcon.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'
import LogoutIcon from '@/components/icons/LogoutIcon.vue'

export function getLinks() {
  const { t } = useI18n()
  return [
    { to: '/users', text: t('Users'), Icon: UserIcon },
    { to: '/clients', text: t('Clients'), Icon: DevicesIcon },
    { to: '#', text: t('API Keys'), Icon: KeyIcon },
    { to: '#', text: t('Applications'), Icon: DevicesIcon },
    { to: '#', text: t('Lists'), Icon: ListIcon },
    { to: '#', text: t('Customers'), Icon: UserIcon },
    { to: '#', text: t('Tags'), Icon: TagsIcon },
    { to: '#', text: t('Employee Tags'), Icon: IdcardIcon },
    { to: '#', text: t('Themes'), Icon: PaletteIcon },
    { to: '#', text: t('Settings'), Icon: SettingsIcon },
    { to: '#', text: t('Logout'), Icon: LogoutIcon },
  ]
}
