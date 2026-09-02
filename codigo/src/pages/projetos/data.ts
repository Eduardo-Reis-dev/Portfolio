import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import pt from "./pt.json"
import en from "./en.json"

export interface Project {
  id: string
  title: string
  logo: string
  demo: string
  description: string
  contributions: string[]
  techStack: string[]
  links: { label: string; url: string }[]
  gallery: string[]
  credit?: string
  meta?: string[]
}

type Lang = "pt" | "en"

type ProjectStatic = Omit<Project, "description" | "contributions" | "credit" | "meta">

const PROJECTS: ProjectStatic[] = [
  {
    id: "giro",
    title: "GIRO",
    logo: "/projetos/giro/logo.png",
    demo: "",
    techStack: ["React", "TypeScript", "TailwindCSS", "Supabase", "PostgreSQL", "Node.js"],
    links: [
      { label: "GitHub", url: "https://github.com/Eduardo-Reis-dev" },
      { label: "Live Demo", url: "https://appgiro.com.br" },
    ],
    gallery: [],
  },
  {
    id: "avila-incorporadora",
    title: "Ávila Incorporadora",
    logo: "/projetos/avila/logo.png",
    demo: "",
    techStack: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    links: [
      { label: "GitHub", url: "https://github.com/Eduardo-Reis-dev" },
      { label: "Live Demo", url: "#" },
    ],
    gallery: [],
  },
  {
    id: "aero-jr",
    title: "UFMG Aerospace / Aero Jr.",
    logo: "/projetos/aero/logo.png",
    demo: "",
    techStack: ["React", "TypeScript", "TailwindCSS", "Node.js"],
    links: [
      { label: "GitHub", url: "https://github.com/Eduardo-Reis-dev" },
      { label: "Live Demo", url: "#" },
    ],
    gallery: [],
  },
  {
    id: "acessibee",
    title: "Acessibee",
    logo: "/projetos/acessibee/logo.png",
    demo: "",
    techStack: ["React", "JavaScript", "TailwindCSS", "Acessibilidade Web (WCAG)"],
    links: [
      { label: "GitHub", url: "https://github.com/Eduardo-Reis-dev" },
      { label: "Live Demo", url: "#" },
    ],
    gallery: [],
  },
]

type LocalizedProject = Pick<Project, "description" | "contributions" | "credit" | "meta">

const LOCALIZED_PROJECTS: Record<Lang, Record<string, LocalizedProject>> = {
  pt: pt.projects,
  en: en.projects,
}

export function useProjects(): Project[] {
  const { i18n } = useTranslation()
  const lang: Lang = i18n.language.startsWith("en") ? "en" : "pt"

  return useMemo(
    () =>
      PROJECTS.map((p) => ({
        ...p,
        ...(LOCALIZED_PROJECTS[lang]?.[p.id] ?? {}),
      })),
    [lang],
  )
}

export function useProjectById(id: string | undefined): Project | undefined {
  const projects = useProjects()
  return projects.find((p) => p.id === id)
}
