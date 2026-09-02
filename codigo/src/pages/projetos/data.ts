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
    id: "modus",
    title: "MODUS",
    logo: "/projetos/modus/modus-logo.png",
    demo: "/projetos/modus/demonstracao.mp4",
    techStack: ["React", "TypeScript", "Vite", "PHP", "Laravel", "Docker", "Git"],
    links: [
      { label: "GitHub", url: "https://github.com/joaquim-antonio/MODUS" },
      { label: "Live Demo", url: "#" },
    ],
    gallery: [
      "/projetos/modus/tarefas.png",
      "/projetos/modus/home.png",
      "/projetos/modus/budget.png",
      "/projetos/modus/equipe.png",
      "/projetos/modus/email.png",
      "/projetos/modus/indicadores.png",
      "/projetos/modus/logs.png",
      "/projetos/modus/clientes.png",
      "/projetos/modus/projetos.png",
      "/projetos/modus/file.png",
    ],
  },
  {
    id: "cras-digital",
    title: "Cras Digital",
    logo: "/projetos/cras/cras.png",
    demo: "/projetos/cras/demonstracao.mp4",
    techStack: ["Java", "SpringBoot", "Javascript", "TailwindCSS", "HTML/CSS", "Git"],
    links: [
      { label: "GitHub", url: "https://github.com/joaquim-antonio/CRAS-digital" },
      { label: "Live Demo", url: "#" },
    ],
    gallery: [
      "/projetos/cras/unidades.png",
      "/projetos/cras/servicos.png",
      "/projetos/cras/dashboards.png",
      "/projetos/cras/agendamentos.png",
      "/projetos/cras/dados.png",
      "/projetos/cras/editar.png",
      "/projetos/cras/empregos.png",
      "/projetos/cras/solicitacao.png",
      "/projetos/cras/solicitar.png",
      "/projetos/cras/cadastro.png",
      "/projetos/cras/perfil-beneficiario.png",
    ],
  },
  {
    id: "rhsoft",
    title: "RHSoft",
    logo: "/projetos/rhsoft/logo.png",
    demo: "/projetos/rhsoft/demonstracao.mp4",
    techStack: ["Java", "SpringBoot", "Javascript", "TailwindCSS", "HTML/CSS", "Git"],
    links: [
      { label: "GitHub", url: "https://github.com/joaquim-antonio/RHsoft" },
      { label: "Live Demo", url: "#" },
    ],
    gallery: [
      "/projetos/rhsoft/login.png",
      "/projetos/rhsoft/dashboard.png",
      "/projetos/rhsoft/configuracoes.png",
      "/projetos/rhsoft/comunicados.png",
      "/projetos/rhsoft/contrachques.png",
      "/projetos/rhsoft/funcionarios.png",
      "/projetos/rhsoft/gestao.png",
      "/projetos/rhsoft/perfil.png",
      "/projetos/rhsoft/vaga.png",
      "/projetos/rhsoft/vagas.png",
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
        ...LOCALIZED_PROJECTS[lang][p.id],
      })),
    [lang],
  )
}

export function useProjectById(id: string | undefined): Project | undefined {
  const projects = useProjects()
  return projects.find((p) => p.id === id)
}