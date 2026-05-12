import { Router } from 'express'
import { protect, authorize } from '../middlewares/auth.middleware.js'
import prisma from '../config/db.js'

const router = Router()

router.get('/crew', protect, authorize('admin'), async (req, res, next) => {
  try {
    const crew = await prisma.user.findMany({
      where: { role: 'crew' },
      select: { id: true, name: true, email: true }
    })
    res.json({ success: true, data: crew })
  } catch (err) { next(err) }
})

export default router