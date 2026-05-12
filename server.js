import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import authRoutes from './src/routes/auth.routes.js'
import taskRoutes from './src/routes/task.routes.js'
import shipRoutes from './src/routes/ship.routes.js'
import drillRoutes from './src/routes/drill.routes.js'
import userRoutes from './src/routes/user.routes.js'
import complianceRoutes from './src/routes/compliance.routes.js'
import errorHandler from './src/middlewares/error.middleware.js'

const app = express()

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://maritime-operations-system-frontend-eta.vercel.app/', // Example: Add another local port here// Example: Add your production frontend URL here
  ],
  credentials: true,
}))

// ── Middlewares ───────────────────────────────────────────
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ── Health check ──────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({ success: true, message: 'Maritime API is running' })
})

// ── Routes ────────────────────────────────────────────────
app.use('/api/auth', authRoutes)
app.use('/api/tasks', taskRoutes)
app.use('/api/ships', shipRoutes)
app.use('/api/drills', drillRoutes)
app.use('/api/compliance', complianceRoutes)
app.use('/api/users', userRoutes)



// ── 404 handler ───────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` })
})

// ── Global error handler (must be last) ──────────────────
app.use(errorHandler)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))