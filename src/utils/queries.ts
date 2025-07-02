export const withInitialData = <T,>(data: T) => {
  const initialData = { data }
  return {
    initialData,
    initialDataUpdatedAt: 0
  }
}
