type AnyRecord = Record<string, unknown>

function isRecord(value: unknown): value is AnyRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

export function deepMerge(...objects: AnyRecord[]): AnyRecord {
  const result: AnyRecord = {}

  for (const obj of objects) {
    for (const key of Object.keys(obj)) {
      const value = obj[key]
      if (isRecord(value) && isRecord(result[key])) {
        result[key] = deepMerge(result[key], value)
      } else {
        result[key] = value
      }
    }
  }

  return result
}
