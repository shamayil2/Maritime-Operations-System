import { Router } from 'express'
import { register, login, me } from '../controllers/auth.controller.js'
import { protect } from '../middlewares/auth.middleware.js'

const router = Router()

// Public routes
router.post('/register', register)
router.post('/login', login)

// Protected route — any logged in user
router.get('/me', protect, me)

export default router