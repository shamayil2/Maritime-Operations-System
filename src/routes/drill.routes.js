import { Router } from 'express'
import { protect, authorize } from '../middlewares/auth.middleware.js'
import { createDrill,getUpcomingDrills, markAttendance, submitDrillCompletion } from '../controllers/drill.controller.js'

const router = Router()

router.post('/', protect, authorize('admin'), createDrill)

// GET /api/drills/upcoming 
router.get('/upcoming', protect, authorize('crew'), getUpcomingDrills)

// PATCH/api/drills/:id/attend
router.patch('/:id/attend', protect, authorize('crew'), markAttendance)

// PATCH/api/drills/:id/complete
router.patch('/:id/complete', protect, authorize('crew'), submitDrillCompletion)



export default router