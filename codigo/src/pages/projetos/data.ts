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
    logo: "/projetos/giro/perfilGiro.png",
    demo: "/projetos/giro/DashBoard.png",
    techStack: ["React", "TypeScript", "TailwindCSS", "Supabase", "PostgreSQL", "Node.js"],
    links: [
      { label: "GitHub", url: "https://github.com/Eduardo-Reis-dev" },
      { label: "Live Demo", url: "https://appgiro.com.br" },
    ],
    gallery: [
      "/projetos/giro/DashBoard.png",
      "/projetos/giro/Cartao.png",
      "/projetos/giro/Extrato.png",
      "/projetos/giro/Metas.png",
      "/projetos/giro/Relatorios.png",
      "/projetos/giro/ConsultorGIRO.png",
      "/projetos/giro/perfilGiro.png",
    ],
  },
  {
    id: "avila-incorporadora",
    title: "Ávila Incorporadora",
    logo: "/projetos/avila/InicioAvila.png",
    demo: "/projetos/avila/Empreendimentos.png",
    techStack: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    links: [
      { label: "GitHub", url: "https://github.com/Eduardo-Reis-dev" },
      { label: "Live Demo", url: "#" },
    ],
    gallery: [
      "/projetos/avila/InicioAvila.png",
      "/projetos/avila/Empreendimentos.png",
      "/projetos/avila/PortalCliente.png",
      "/projetos/avila/PortalADMAvila.png",
      "/projetos/avila/portalREAL.png",
      "/projetos/avila/login.png",
    ],
  },
  {
    id: "aero-jr",
    title: "UFMG Aerospace / Aero Jr.",
    logo: "/projetos/aero/inicioAero.png",
    demo: "/projetos/aero/Noticias.png",
    techStack: ["React", "TypeScript", "TailwindCSS", "Node.js"],
    links: [
      { label: "GitHub", url: "https://github.com/Eduardo-Reis-dev" },
      { label: "Live Demo", url: "#" },
    ],
    gallery: [
      "/projetos/aero/inicioAero.png",
      "/projetos/aero/Noticias.png",
      "/projetos/aero/SobreCurso.png",
      "/projetos/aero/Iniciativas.png",
    ],
  },
  {
    id: "acessibee",
    title: "Acessibee",
    logo: "/projetos/acessibee/inicioAcessiBee.png",
    demo: "/projetos/acessibee/Restaurante.png",
    techStack: ["React", "JavaScript", "TailwindCSS", "Acessibilidade Web (WCAG)"],
    links: [
      { label: "GitHub", url: "https://github.com/Eduardo-Reis-dev" },
      { label: "Live Demo", url: "#" },
    ],
    gallery: [
      "/projetos/acessibee/inicioAcessiBee.png",
      "/projetos/acessibee/painelADMAcessibee.png",
      "/projetos/acessibee/Restaurante.png",
      "/projetos/acessibee/telaAvaliacao.png",
      "/projetos/acessibee/tipoPerfil.png",
    ],
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