import { create } from 'zustand'
import { localStorageGet, localStorageSet } from '@/utils/storage'

type Theme = 'light' | 'dark'

interface ThemeStore {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const syncTheme = (theme: Theme) => {
  document.documentElement.setAttribute('data-theme', theme)
  localStorageSet('theme', theme)
}

const getTheme = (): Theme => {
  const storageTheme = localStorageGet<Theme>('theme')

  if (storageTheme) {
    syncTheme(storageTheme)
    return storageTheme
  }

  let theme: Theme = 'light'
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark'
  }

  syncTheme(theme)
  return theme
}

export const useThemeStore = create<ThemeStore>((set, get) => ({

  theme: getTheme(),
  setTheme: (theme) => {
    set({ theme })
    syncTheme(theme)
  },
  toggleTheme: () => {
    const { theme, setTheme } = get()
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
}))
