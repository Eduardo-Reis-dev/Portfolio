export interface Project {
  id: string
  title: string
  logo: string
  image: string
  description: string
  contributions: string[]
  techStack: string[]
  links: { label: string; url: string }[]
  gallery: string[]
  
  credit?: string
  meta?: string[]
}

const ART = (name: string) =>
  `https://pub-45c4a3d9611041d08fe82d52599b72b0.r2.dev/primary-showcase-assets/${name}.jpg`

export const PROJECTS: Project[] = [
  {
    id: "modus",
    title: "MODUS",
    logo: "/projetos/modus/modus-logo.png",
    image: "/projetos/modus/demonstracao.gif",
    description:
      "O Modus é um sistema de gestão de projetos arquitetônicos desenvolvido para escritórios que conduzem múltiplos projetos simultaneamente. Seu objetivo é centralizar e organizar as informações das atividades, respeitando a sequência metodológica do processo de elaboração arquitetônica.",
    contributions: [
      "Desenvolvi um sistema de gerenciamento de projetos colaborando com uma equipe de mais 10 arquitetos para elicitar os requisitos do software, mapeando mais de 20 requisitos funcionais e 10 não funcionais",
      "Viabilizei o acompanhamento visual de tarefas, centralizando a gestão dos dados para 10 arquitetos, ao construir a página principal do sistema em React.js e TypeScript com integração de uma biblioteca de gráfico Gantt.",
      "Padronizei o ambiente de desenvolvimento entre os 7 desenvolvedores do time, eliminando inconsistências entre ambientes locais, estruturando os containers da aplicação com Docker",
    ],
    techStack: ["React", "TypeScript", "Vite", "PHP", "Laravel", "Docker", "Git",],
    links: [
      { label: "GitHub", url: "https://github.com/joaquim-antonio/MODUS" },
      { label: "Live Demo", url: "#" },
    ],
    gallery: [
      "/projetos/modus/tarefas.png",
      "/projetos/modus/budget.png",
      "/projetos/modus/equipe.png",
      "/projetos/modus/email.png",
      "/projetos/modus/indicadores.png",
      "/projetos/modus/logs.png",
      "/projetos/modus/clientes.png",
      "/projetos/modus/projetos.png",
      "/projetos/modus/home.png",
      "/projetos/modus/ile.png",
    ],
    credit: "Para Escritorio X",
    meta: ["FEV 2026 - AGOSTO 2026", "DURAÇÃO DE 7 MESES", "BELO HORIZONTE"],
    
  },
  {
    id: "cras-digital",
    title: "Cras Digital",
    logo: "/projetos/cras/cras.png",
    image: ART("celestial-light-figure"),
    description:
      "An interactive art installation exploring the interplay of light and shadow through digital projection.",
    contributions: [
      "Built the real-time projection mapping system",
      "Implemented sensor-driven interactivity",
      "Optimized performance for large-scale display",
    ],
    techStack: ["Java", "SpringBoot", "Javascript", "TailwindCSS", "HTML/CSS", "Git",],
    links: [
      { label: "GitHub", url: "https://github.com/joaquim-antonio/CRAS-digital" },
      { label: "Live Demo", url: "#" },
    ],
    gallery: [
      "/projetos/cras/agendamentos.png",
      "/projetos/cras/dados.png",
      "/projetos/cras/editar.png",
      "/projetos/cras/solicitacao.png",
      "/projetos/cras/solicitar.png",
      "/projetos/cras/unidades.png",
    ],
    credit: "Para a instituição CRAS",
    meta: ["AGO 2025 - DEZ 2026", "DURAÇÃO DE 5 MESES", "BELO HORIZONTE"],
    
  },
  {
    id: "rhsoft",
    title: "RHSoft",
    logo: "/projetos/rhsoft/logo.png",
    image: ART("neon-portrait-uplight"),
    description:
      "O RHSoft é um sistema de Recursos Humanos desenvolvido com o objetivo de informatizar a gestão de recursos humanos em uma organização, centralizando dados de funcionários, automatizando cálculos da folha de pagamento e organizando a publicação de vagas de emprego.",
    contributions: [
      "Directed the lighting setup and photography",
      "Developed custom post-processing pipelines",
      "Created the exhibition web gallery",
    ],
    techStack: ["Java", "SpringBoot", "Javascript", "TailwindCSS", "HTML/CSS", "Git",],
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
    credit: "BY ATELIER SUD.",
    meta: ["SUN NOV 23", "4-8 PM", "MARRAKECH"],
    
  },
]

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id)
}
