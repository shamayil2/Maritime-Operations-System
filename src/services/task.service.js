import prisma from '../config/db.js'

export const createTask = async ({ title, dueDate, shipId, description, createdById }) => {
  const ship = await prisma.ship.findUnique({ where: { id: shipId } })
  if (!ship) {
    const err = new Error('Ship not found')
    err.statusCode = 404
    throw err
  }

  const task = await prisma.task.create({
    data: { title, dueDate: new Date(dueDate), shipId,description, createdById },
    include: {
      ship: { select: { id: true, name: true } },
      createdBy: { select: { id: true, name: true } },
    },
  })

  return task
}

export const assignTask = async ({ taskId, userId }) => {
  const task = await prisma.task.findUnique({ where: { id: taskId } })
  if (!task) {
    const err = new Error('Task not found')
    err.statusCode = 404
    throw err
  }
 
  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) {
    const err = new Error('User not found')
    err.statusCode = 404
    throw err
  }
 
  if (user.role !== 'crew') {
    const err = new Error('Tasks can only be assigned to crew members')
    err.statusCode = 400
    throw err
  }
 
  // upsert prevents error if same crew is assigned again
  const activity = await prisma.taskActivity.upsert({
    where: { taskId_userId: { taskId, userId } },
    update: {},
    create: { taskId, userId, status: 'pending' },
  })
 
  return activity
}

// admin passes userId in body, crew uses their own id from token
export const updateTaskStatus = async ({ taskId, userId, status, comments }) => {
  const activity = await prisma.taskActivity.findUnique({
    where: { taskId_userId: { taskId, userId } },
  })

  if (!activity) {
    const err = new Error('No activity found for this user on this task')
    err.statusCode = 404
    throw err
  }
 
  return await prisma.taskActivity.update({
    where: { taskId_userId: { taskId, userId } },
    data: {
      ...(status && { status }),
      ...(comments !== undefined && { comments }),
    },
  })
}

export const getAssignedTasks = async (userId) => {
  const tasks = await prisma.taskActivity.findMany({
    where: { userId },
    include: {
      task: {
        include: {
          ship: { select: { id: true, name: true } },
        },
      },
    },
  })
 
  return tasks
}