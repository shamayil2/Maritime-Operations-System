import prisma from '../config/db.js'

export const createShip = async ({ name, imoNumber }) => {
  const existing = await prisma.ship.findUnique({ where: { imoNumber } })
  if (existing) {
    const err = new Error('Ship with this IMO number already exists')
    err.statusCode = 409
    throw err
  }

  const ship = await prisma.ship.create({
    data: { name, imoNumber },
  })

  return ship
}