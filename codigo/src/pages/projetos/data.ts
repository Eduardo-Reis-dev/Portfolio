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

export const PROJECTS: Project[] = [
  {
    id: "modus",
    title: "MODUS",
    logo: "/projetos/modus/modus-logo.png",
    demo: "/projetos/modus/demonstracao.mp4",
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
    credit: "GERENCIAMENTO DE PROJETOS",
    meta: ["FEV 2026 - AGOSTO 2026", "DURAÇÃO DE 7 MESES", "BELO HORIZONTE"],
    
  },
  {
    id: "cras-digital",
    title: "Cras Digital",
    logo: "/projetos/cras/cras.png",
    demo: "/projetos/cras/demonstracao.mp4",
    description:
      "Um software voltado à digitalização e automação dos processos operacionais realizados nas unidades do Centro de Referência de Assistência Social (CRAS). O sistema foi projetado para substituir procedimentos manuais, antes executados por meio de formulários físicos e registros em papel, por fluxos digitais seguros, padronizados e acessíveis.",
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
    credit: "AUTOMTIZAÇÃO DE PROCESSOS DO CRAS",
    meta: ["AGO 2025 - DEZ 2025", "DURAÇÃO DE 5 MESES", "BELO HORIZONTE"],
    
  },
  {
    id: "rhsoft",
    title: "RHSoft",
    logo: "/projetos/rhsoft/logo.png",
    demo: "/projetos/rhsoft/demonstracao.mp4",
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
    credit: "AUTOMATIZAÇÃO DE PROCESSOS DE RH",
    meta: ["AGO 2025 - DEZ 2025", "DURAÇÃO DE 5 MESES", "BELO HORIZONTE"],
    
  },
]

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id)
}
