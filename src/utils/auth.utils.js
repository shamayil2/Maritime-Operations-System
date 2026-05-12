import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

// ── Password ──────────────────────────────────────────────
export const hashPassword = async (plainText) => {
  return bcrypt.hash(plainText, SALT_ROUNDS)
}

export const comparePassword = async (plainText, hash) => {
  return bcrypt.compare(plainText, hash)
}

// ── JWT ───────────────────────────────────────────────────
export const signToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  })
}

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}