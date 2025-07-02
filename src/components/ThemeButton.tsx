import type { FC } from 'react'
import DarkIcon from '@/assets/icons/dark_icon.svg?react'
import LightIcon from '@/assets/icons/light_icon.svg?react'
import { useThemeStore } from '@/stores/themeStore'
import { Button } from '@/ui/Button'

export const ThemeButton: FC = () => {
  const theme = useThemeStore(state => state.theme)
  const toggleTheme = useThemeStore(state => state.toggleTheme)
  return (

    <Button onClick={toggleTheme}>
      {theme === 'dark' ? <LightIcon /> : <DarkIcon />}
    </Button>
  )
}
