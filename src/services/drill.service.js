import prisma from '../config/db.js'

export const createDrill = async ({ title, drillType, scheduledDate, shipId, createdById }) => {
  const ship = await prisma.ship.findUnique({ where: { id: shipId } })
  if (!ship) {
    const err = new Error('Ship not found')
    err.statusCode = 404
    throw err
  }

  const drill = await prisma.drill.create({
    data: { title, drillType, scheduledDate: new Date(scheduledDate), shipId, createdById },
    include: {
      ship: { select: { id: true, name: true } },
      createdBy: { select: { id: true, name: true } },
    },
  })

  return drill
}

export const getUpcomingDrills = async () => {
  const drills = await prisma.drill.findMany({
    where: {
      scheduledDate: { gte: new Date() },
    },
    include: {
      ship: { select: { id: true, name: true } },
    },
    orderBy: { scheduledDate: 'asc' },
  })
 
  return drills
}

export const markAttendance = async ({ drillId, userId }) => {
  const drill = await prisma.drill.findUnique({ where: { id: drillId } })
  if (!drill) {
    const err = new Error('Drill not found')
    err.statusCode = 404
    throw err
  }
 
  const activity = await prisma.drillActivity.upsert({
    where: { drillId_userId: { drillId, userId } },
    update: { attended: true },
    create: { drillId, userId, attended: true, completed: false },
  })
 
  return activity
}

export const submitDrillCompletion = async ({ drillId, userId }) => {
  const activity = await prisma.drillActivity.findUnique({
    where: { drillId_userId: { drillId, userId } },
  })
 
  if (!activity) {
    const err = new Error('You have not marked attendance for this drill')
    err.statusCode = 400
    throw err
  }
 
  if (!activity.attended) {
    const err = new Error('You must mark attendance before submitting completion')
    err.statusCode = 400
    throw err
  }
 
  const updated = await prisma.drillActivity.update({
    where: { drillId_userId: { drillId, userId } },
    data: { completed: true },
  })
 
  return updated
}