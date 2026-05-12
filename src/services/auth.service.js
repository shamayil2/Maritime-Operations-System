import prisma from '../config/db.js'
import { hashPassword, comparePassword, signToken } from '../utils/auth.utils.js'

// ── Register ──────────────────────────────────────────────
export const registerUser = async ({ name, email, password, role }) => {
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    const err = new Error('Email already in use')
    err.statusCode = 409
    throw err
  }

  const passwordHash = await hashPassword(password)

  const user = await prisma.user.create({
    data: { name, email, passwordHash, role: role ?? 'crew' },
    select: { id: true, name: true, email: true, role: true, createdAt: true },
  })

  const token = signToken({ id: user.id, role: user.role })

  return { user, token }
}

// ── Login ─────────────────────────────────────────────────
export const loginUser = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    const err = new Error('Invalid email or password')
    err.statusCode = 401
    throw err
  }

  const valid = await comparePassword(password, user.passwordHash)
  if (!valid) {
    const err = new Error('Invalid email or password')
    err.statusCode = 401
    throw err
  }

  const token = signToken({ id: user.id, role: user.role })

  const { passwordHash, ...safeUser } = user
  return { user: safeUser, token }
}

// ── Get current user ──────────────────────────────────────
export const getMe = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, name: true, email: true, role: true, createdAt: true },
  })

  if (!user) {
    const err = new Error('User not found')
    err.statusCode = 404
    throw err
  }

  return user
}