export function firstEnv(...names) {
  for (const name of names) {
    const value = process.env[name]
    if (typeof value === 'string' && value.trim()) return value.trim()
  }
  return ''
}

export function requireEnv(label, ...names) {
  const value = firstEnv(...names)
  if (!value) {
    const error = new Error(`${label} is missing. Add one of: ${names.join(', ')}`)
    error.statusCode = 500
    throw error
  }
  return value
}
