import Logo from './assets/vite.svg?react'
import { useThemeStore } from './stores/themeStore'

export const App = () => {
  const theme = useThemeStore(state => state.theme)
  const toggleTheme = useThemeStore(state => state.toggleTheme)
  return (
    <>
      {theme}
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem hic esse repellat error quos iusto explicabo quam voluptatem sint deleniti.
      <button onClick={toggleTheme}>change</button>
      <Logo />
      <div>test</div>
    </>
  )
}
