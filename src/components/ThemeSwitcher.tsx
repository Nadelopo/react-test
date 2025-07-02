import type { FC } from 'react'
import DarkIcon from '@/assets/icons/dark_icon.svg?react'
import LightIcon from '@/assets/icons/light_icon.svg?react'
import { useThemeStore } from '@/stores/themeStore'
import { ButtonIcon } from '@/ui/Button'

export const ThemeSwitcher: FC = () => {
  const theme = useThemeStore(state => state.theme)
  const toggleTheme = useThemeStore(state => state.toggleTheme)
  return (
    <ButtonIcon onClick={toggleTheme}>
      {theme === 'dark' ? <LightIcon /> : <DarkIcon />}
    </ButtonIcon>
  )
}
