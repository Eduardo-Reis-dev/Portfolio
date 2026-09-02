export type Perfil = "recrutador" | "visitante" | "professor"

export type SecaoHome = "sobreMim" | "experiencia" | "projetos" | "contatos"

export const ORDEM_POR_PERFIL: Record<Perfil, SecaoHome[]> = {
  recrutador: ["experiencia", "projetos", "contatos", "sobreMim"],
  visitante: ["sobreMim", "experiencia", "projetos", "contatos"],
  professor: ["projetos", "sobreMim", "experiencia", "contatos"],
}

export function isPerfil(value: unknown): value is Perfil {
  return value === "recrutador" || value === "visitante" || value === "professor"
}