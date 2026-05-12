import * as shipService from '../services/ship.service.js'

export const createShip = async (req, res, next) => {
  try {
    const { name, imoNumber } = req.body

    if (!name || !imoNumber) {
      return res.status(400).json({ success: false, message: 'name and imoNumber are required' })
    }

    const ship = await shipService.createShip({ name, imoNumber })

    return res.status(201).json({ success: true, data: ship })
  } catch (err) {
    next(err)
  }
}