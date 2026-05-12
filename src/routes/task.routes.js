import { Router } from 'express'
import { protect, authorize } from '../middlewares/auth.middleware.js'
import { createTask,assignTask,updateTaskStatus,getAssignedTasks   } from '../controllers/task.controller.js'

const router = Router()


// POST  /api/tasks 
router.post('/', protect, authorize('admin'), createTask)

// POST  /api/tasks/:id/assign    
router.post('/:id/assign', protect, authorize('admin'), assignTask)

// PATCH /api/tasks/:id/status 
router.patch('/:id/status', protect, authorize('admin', 'crew'), updateTaskStatus)

// GET   /api/tasks/my-tasks  
router.get('/my-tasks', protect, authorize('crew'), getAssignedTasks)



export default router