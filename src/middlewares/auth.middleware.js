import { verifyToken } from '../utils/auth.utils.js'

// ── Protect: verify JWT ───────────────────────────────────
export const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'No token provided' })
    }

    const token = authHeader.split(' ')[1]
    const decoded = verifyToken(token)

    // Attach decoded payload to req so controllers/services can use it
    req.user = { id: decoded.id, role: decoded.role }

    next()
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' })
  }
}

// ── RBAC: allow specific roles only ──────────────────────
// Usage: authorize('admin') or authorize('admin', 'crew')
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ success: false, message: 'Not authenticated' })
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Access denied. Required role: ${roles.join(' or ')}`,
      })
    }

    next()
  }
}