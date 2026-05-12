import { Router } from 'express'
import { protect, authorize } from '../middlewares/auth.middleware.js'
import { createShip } from '../controllers/ship.controller.js'
import prisma from '../config/db.js'

const router = Router()

router.post('/', protect, authorize('admin'), createShip)

router.get('/', protect, authorize('admin'), async (req, res, next) => {
  try {
    const ships = await prisma.ship.findMany({
      orderBy: { createdAt: 'desc' }
    })
    res.json({ success: true, data: ships })
  } catch (err) { next(err) }
})

export default router