import * as taskService from '../services/task.service.js'

export const createTask = async (req, res, next) => {
  try {
    const { title, dueDate, shipId,description } = req.body

    if (!title || !dueDate || !shipId) {
      return res.status(400).json({ success: false, message: 'title, dueDate and shipId are required' })
    }

    const task = await taskService.createTask({
      title,
      dueDate,
      shipId,
      description,
      createdById: req.user.id,
    })

    return res.status(201).json({ success: true, data: task })
  } catch (err) {
    next(err)
  }
}

export const assignTask = async (req, res, next) => {
  try {
    const { userId } = req.body
 
    if (!userId) {
      return res.status(400).json({ success: false, message: 'userId is required' })
    }
 
    const activity = await taskService.assignTask({
      taskId: req.params.id,
      userId,
    })
 
    return res.status(200).json({ success: true, data: activity })
  } catch (err) {
    next(err)
  }
}

export const updateTaskStatus = async (req, res, next) => {
  try {
    const { status, comments } = req.body
    const role = req.user.role
 
    if (!status) {
      return res.status(400).json({ success: false, message: 'status is required' })
    }
 
    const validStatuses = ['pending', 'in_progress', 'completed']
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: `status must be one of: ${validStatuses.join(', ')}` })
    }
 
    // admin must pass userId in body, crew uses their own id from token
    let targetUserId
    if (role === 'admin') {
      if (!req.body.userId) {
        return res.status(400).json({ success: false, message: 'userId is required for admin' })
      }
      targetUserId = req.body.userId
    } else {
      targetUserId = req.user.id
    }
    
    const activity = await taskService.updateTaskStatus({
      taskId: req.params.id,
      userId: targetUserId,
      status,
      comments,
    })
 
    return res.status(200).json({ success: true, data: activity })
  } catch (err) {
    next(err)
  }
}

export const getAssignedTasks = async (req, res, next) => {
  try {
    const tasks = await taskService.getAssignedTasks(req.user.id)
    return res.status(200).json({ success: true, data: tasks })
  } catch (err) {
    next(err)
  }
}