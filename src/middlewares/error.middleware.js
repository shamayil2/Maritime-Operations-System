// ── Global error handler ──────────────────────────────────
// Must be registered LAST in server.js: app.use(errorHandler)
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'

  if (process.env.NODE_ENV !== 'production') {
    console.error(`[ERROR] ${statusCode} — ${message}`)
  }

  return res.status(statusCode).json({
    success: false,
    message,
  })
}

export default errorHandler