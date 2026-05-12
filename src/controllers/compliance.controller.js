import * as complianceService from '../services/compliance.service.js'


// GET /api/compliance/:shipId — single ship detail
export const getShipCompliance = async (req, res, next) => {
  try {
    const data = await complianceService.getShipCompliance(req.params.shipId)
    return res.status(200).json({ success: true, data })
  } catch (err) {
    next(err)
  }
}