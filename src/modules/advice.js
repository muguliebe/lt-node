export const allAround = (req, res, next) => {
  console.log(`\n[start] ${req.method} ${req.url}`)
  let startDate = new Date()

  next()

  let elapsed = new Date()-startDate
  console.log(`[end  ] ${req.method} ${req.url} ${elapsed}m`)
}
