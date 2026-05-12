import * as drillService from '../services/drill.service.js'

export const createDrill = async (req, res, next) => {
  try {
    const { title, drillType, scheduledDate, shipId } = req.body

    if (!title || !drillType || !scheduledDate || !shipId) {
      return res.status(400).json({ success: false, message: 'title, drillType, scheduledDate and shipId are required' })
    }

    const drill = await drillService.createDrill({
      title,
      drillType,
      scheduledDate,
      shipId,
      createdById: req.user.id,
    })

    return res.status(201).json({ success: true, data: drill })
  } catch (err) {
    next(err)
  }
}

export const getUpcomingDrills = async (req, res, next) => {
  try {
    const drills = await drillService.getUpcomingDrills()
    return res.status(200).json({ success: true, data: drills })
  } catch (err) {
    next(err)
  }
}

export const markAttendance = async (req, res, next) => {
  try {
    const activity = await drillService.markAttendance({
      drillId: req.params.id,
      userId: req.user.id,
    })
 
    return res.status(200).json({ success: true, data: activity })
  } catch (err) {
    next(err)
  }
}

export const submitDrillCompletion = async (req, res, next) => {
  try {
    const activity = await drillService.submitDrillCompletion({
      drillId: req.params.id,
      userId: req.user.id,
    })
 
    return res.status(200).json({ success: true, data: activity })
  } catch (err) {
    next(err)
  }
}