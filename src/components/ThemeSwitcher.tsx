import type { FC } from 'react'
import DarkIcon from '@/assets/icons/dark_icon.svg?react'
import LightIcon from '@/assets/icons/light_icon.svg?react'
import { ButtonIcon } from '@/components/ui/ButtonIcon'
import { useThemeStore } from '@/stores/themeStore'

export const ThemeSwitcher: FC = () => {
  const theme = useThemeStore(state => state.theme)
  const toggleTheme = useThemeStore(state => state.toggleTheme)
  return (
    <ButtonIcon onClick={toggleTheme}>
      {theme === 'dark' ? <LightIcon /> : <DarkIcon />}
    </ButtonIcon>
  )
}
