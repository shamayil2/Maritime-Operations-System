import { Router } from 'express'
import { protect, authorize } from '../middlewares/auth.middleware.js'
import { createShip } from '../controllers/ship.controller.js'

const router = Router()

router.post('/', protect, authorize('admin'), createShip)

export default router