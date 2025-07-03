export const localStorageGet = <T>(key: string): T | null => {
  try {
    const data = localStorage.getItem(key)
    if (!data) {
      return null
    }

    const json = JSON.parse(data)
    return json as T
  }
  catch (error) {
    console.error(error)
    return null
  }
}

export const localStorageSet = (key: string, value: unknown): boolean => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  }
  catch (error) {
    console.error(error)
    return false
  }
}
