export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  ms: number = 500
): ((...args: Parameters<T>) => void) => {
  let timeout = 0
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = window.setTimeout(() => func(...args), ms)
  }
}
