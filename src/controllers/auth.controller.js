import * as authService from '../services/auth.service.js'

// ── POST /auth/register ───────────────────────────────────
export const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'name, email and password are required' })
    }

    const data = await authService.registerUser({ name, email, password, role })

    return res.status(201).json({ success: true, data })
  } catch (err) {
    next(err)
  }
}

// ── POST /auth/login ──────────────────────────────────────
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'email and password are required' })
    }

    const data = await authService.loginUser({ email, password })

    return res.status(200).json({ success: true, data })
  } catch (err) {
    next(err)
  }
}

// ── GET /auth/me ──────────────────────────────────────────
export const me = async (req, res, next) => {
  try {
    const user = await authService.getMe(req.user.id)
    return res.status(200).json({ success: true, data: user })
  } catch (err) {
    next(err)
  }
}