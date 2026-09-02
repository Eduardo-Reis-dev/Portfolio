import { useTranslation } from "react-i18next"
import { useLocation, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowUpRight, Briefcase, FolderGit2, Mail, User } from "lucide-react"
import { ORDEM_POR_PERFIL, isPerfil, type SecaoHome } from "./perfil"

interface SecaoConfig {
  to: string
  labelKey: string
  desc: { pt: string; en: string }
  bgImage: string
  icon: React.ElementType
}

const SECOES_CONFIG: Record<SecaoHome, SecaoConfig> = {
  experiencia: {
    to: "/experiencia",
    labelKey: "grid.experiencia",
    desc: {
      pt: "GIRO, Ávila Incorporadora, Aero Jr. e liderança de produtos",
      en: "GIRO, Ávila Incorporadora, Aero Jr. and technical leadership",
    },
    bgImage: "/projetos/giro/DashBoard.png",
    icon: Briefcase,
  },
  projetos: {
    to: "/projetos",
    labelKey: "grid.projetos",
    desc: {
      pt: "Aplicações web, automações e produtos escaláveis",
      en: "Web applications, automations and production systems",
    },
    bgImage: "/projetos/avila/Empreendimentos.png",
    icon: FolderGit2,
  },
  sobreMim: {
    to: "/sobre-mim",
    labelKey: "grid.sobreMim",
    desc: {
      pt: "Trajetória, visão estratégica e stack full-stack",
      en: "Background, product vision and full-stack engineering",
    },
    bgImage: "/eu.jpeg",
    icon: User,
  },
  contatos: {
    to: "/contatos",
    labelKey: "grid.contatos",
    desc: {
      pt: "LinkedIn, GitHub, canais diretos e parcerias",
      en: "LinkedIn, GitHub, direct channels and collaborations",
    },
    bgImage: "/projetos/acessibee/inicioAcessiBee.png",
    icon: Mail,
  },
}

export function Homepage() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const lang = i18n.language.startsWith("en") ? "en" : "pt"

  const perfilRaw = (location.state as { perfil?: unknown } | null)?.perfil
  const perfil = isPerfil(perfilRaw) ? perfilRaw : "visitante"
  const ordem = ORDEM_POR_PERFIL[perfil]

  return (
    <div className="min-h-dvh w-full bg-zinc-950 text-zinc-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-6xl h-full min-h-[85vh] grid grid-cols-1 md:grid-cols-2 gap-4">
        {ordem.map((secao, index) => {
          const config = SECOES_CONFIG[secao]
          const Icon = config.icon
          const isPrimeiro = index === 0

          return (
            <motion.div
              key={secao}
              whileHover={{ scale: 1.012 }}
              transition={{ duration: 0.2 }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-zinc-900/40 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 ${
                isPrimeiro
                  ? "border-zinc-500/80 shadow-[0_0_35px_rgba(255,255,255,0.06)] ring-1 ring-zinc-500/30"
                  : "border-zinc-800/80 hover:border-zinc-600"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-35"
                style={{ backgroundImage: `url(${config.bgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/40" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="rounded-2xl border border-zinc-700/60 bg-zinc-900/90 p-3 text-zinc-100 backdrop-blur-md">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 font-mono text-xs uppercase tracking-wider text-zinc-400 transition-colors group-hover:border-zinc-600 group-hover:text-zinc-200">
                  <span>{lang === "pt" ? "Acessar" : "Open"}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>

              <div className="relative z-10 mt-12 md:mt-0 flex flex-col gap-2">
                <h2 className="font-geist text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                  {t(config.labelKey)}
                </h2>
                <p className="max-w-md text-sm text-zinc-400">
                  {config.desc[lang]}
                </p>
              </div>

              <Link
                to={config.to}
                className="absolute inset-0 z-20 cursor-pointer"
                aria-label={t(config.labelKey)}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}