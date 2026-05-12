import { Router } from 'express'
import { protect, authorize } from '../middlewares/auth.middleware.js'
import {  getShipCompliance } from '../controllers/compliance.controller.js'

const router = Router()


router.get('/:shipId', protect, authorize('admin'), getShipCompliance)

export default router