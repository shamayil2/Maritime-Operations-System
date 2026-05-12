import prisma from '../config/db.js'

export const getShipCompliance = async (shipId) => {
  const ship = await prisma.ship.findUnique({ where: { id: shipId } })
  if (!ship) {
    const err = new Error('Ship not found')
    err.statusCode = 404
    throw err
  }

  const now = new Date()

  // ── Tasks ─────────────────────────────────────────────
  const allTaskActivities = await prisma.taskActivity.findMany({
    where: { task: { shipId } },
    include: { task: { select: { dueDate: true } } },
  })

  const totalTasks = allTaskActivities.length
  const completedTasks = allTaskActivities.filter(a => a.status === 'completed').length
  const pendingTasks = allTaskActivities.filter(a => a.status === 'pending').length
  const inProgressTasks = allTaskActivities.filter(a => a.status === 'in_progress').length
  const overdueTasks = allTaskActivities.filter(
    a => a.task.dueDate < now && a.status !== 'completed'
  ).length

  const maintenanceCompliance = totalTasks === 0
    ? 100
    : Math.round((completedTasks / totalTasks) * 100)

  // ── Drills ────────────────────────────────────────────
  const allDrillActivities = await prisma.drillActivity.findMany({
    where: { drill: { shipId } },
    include: { drill: { select: { scheduledDate: true } } },
  })

  const totalDrillActivity = allDrillActivities.length
  const completedDrillActivity = allDrillActivities.filter(a => a.completed).length
  const attendedDrillActivity = allDrillActivities.filter(a => a.attended).length
  const missedDrills = allDrillActivities.filter(
    a => a.drill.scheduledDate < now && !a.completed
  ).length

  // pending drills = upcoming drills with no activity yet
  const upcomingDrills = await prisma.drill.findMany({
    where: {
      shipId,
      scheduledDate: { gte: now },
    },
  })
  const pendingDrills = upcomingDrills.length

  const drillCompliance = totalDrillActivity === 0
    ? 100
    : Math.round((completedDrillActivity / totalDrillActivity) * 100)

  return {
    ship: { id: ship.id, name: ship.name },
    maintenance: {
      totalTasks,
      completedTasks,
      pendingTasks,
      inProgressTasks,
      overdueTasks,
      compliancePercentage: maintenanceCompliance,
    },
    drills: {
      totalDrillActivity,
      completedDrillActivity,
      attendedDrillActivity,
      missedDrills,
      pendingDrills,
      compliancePercentage: drillCompliance,
    },
  }
}

