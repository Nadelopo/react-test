import { Header } from '@/components/Header'
// import DarkIcon from './assets/icons/dark_icon.svg?react'
// import LightIcon from './assets/icons/light_icon.svg?react'
import { useThemeStore } from './stores/themeStore'
// import { Button } from './ui/Button/Button'

export const App = () => {
  const theme = useThemeStore(state => state.theme)
  const toggleTheme = useThemeStore(state => state.toggleTheme)
  return (
    <>
      <Header />
      {/* <Header /> */}
      {/* <Button>
        {theme === 'dark' ? <LightIcon /> : <DarkIcon />}
      </Button> */}
      {theme}
      <button onClick={toggleTheme}>change</button>
      <div>test</div>
    </>
  )
}
