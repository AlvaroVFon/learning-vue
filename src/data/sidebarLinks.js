import UserIcon from '@/components/icons/UserIcon.vue'
import DevicesIcon from '@/components/icons/DevicesIcon.vue'
import KeyIcon from '@/components/icons/KeyIcon.vue'
import ListIcon from '@/components/icons/ListIcon.vue'
import TagsIcon from '@/components/icons/TagsIcon.vue'
import IdcardIcon from '@/components/icons/IdcardIcon.vue'
import PaletteIcon from '@/components/icons/PaletteIcon.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'
import LogoutIcon from '@/components/icons/LogoutIcon.vue'
import { useLogin } from '@/composables/useLogin'

const { logout } = useLogin()

export function getLinks() {
  return [
    { to: '/users', text: 'Users', Icon: UserIcon },
    { to: '/clients', text: 'Clients', Icon: DevicesIcon },
    { to: '#', text: 'API Keys', Icon: KeyIcon },
    { to: '#', text: 'Applications', Icon: DevicesIcon },
    { to: '#', text: 'Lists', Icon: ListIcon },
    { to: '#', text: 'Customers', Icon: UserIcon },
    { to: '#', text: 'Tags', Icon: TagsIcon },
    { to: '#', text: 'Employee Tags', Icon: IdcardIcon },
    { to: '#', text: 'Themes', Icon: PaletteIcon },
    { to: '#', text: 'Settings', Icon: SettingsIcon },
    { to: '#', text: 'Logout', Icon: LogoutIcon, onClick: logout },
  ]
}
