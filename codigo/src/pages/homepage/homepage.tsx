import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"
import { DynamicFrameLayout } from "./grid"
import { ORDEM_POR_PERFIL, isPerfil } from "./perfil"

const videosByLang = {
  pt: {
    sobreMim: "/videos/Sobre.mp4",
    experiencia: "/videos/Experiencia.mp4",
    projetos: "/videos/Projetos.mp4",
    contatos: "/videos/Contatos.mp4",
  },
  en: {
    sobreMim: "/videos/About.mp4",
    experiencia: "/videos/Experience.mp4",
    projetos: "/videos/Projects.mp4",
    contatos: "/videos/Contact.mp4",
  },
} as const

type SecaoVideo = "sobreMim" | "experiencia" | "projetos" | "contatos"

const framesPorSecao: Record<
  SecaoVideo,
  { video: keyof typeof videosByLang.pt; to: string; label: string }
> = {
  sobreMim: { video: "sobreMim", to: "/sobre-mim", label: "grid.sobreMim" },
  experiencia: { video: "experiencia", to: "/experiencia", label: "grid.experiencia" },
  projetos: { video: "projetos", to: "/projetos", label: "grid.projetos" },
  contatos: { video: "contatos", to: "/contatos", label: "grid.contatos" },
}

export function Homepage() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const lang = i18n.language.startsWith("en") ? "en" : "pt"
  const videos = videosByLang[lang]

  const perfilRaw = (location.state as { perfil?: unknown } | null)?.perfil
  const perfil = isPerfil(perfilRaw) ? perfilRaw : "visitante"
  const ordem = ORDEM_POR_PERFIL[perfil]

  const demoFrames = ordem.map((secao, index) => {
    const frame = framesPorSecao[secao]
    return {
      id: index + 1,
      video: videos[frame.video],
      to: frame.to,
      label: t(frame.label),
    }
  })

  return (
    <div className="min-h-dvh w-full bg-zinc-950">
      <DynamicFrameLayout
        frames={demoFrames}
        className="w-full md:h-dvh"
        gapSize={4}
      />
    </div>
  )
}