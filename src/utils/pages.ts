export const getPageCount = (totalCount: number, limit: number) => {
  return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages: number) => {
  const result = []
  for (let index = 0; index < totalPages; index++) {
    result.push(index + 1)
  }
  return result
}
