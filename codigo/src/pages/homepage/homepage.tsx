import { useTranslation } from "react-i18next"
import { DynamicFrameLayout } from "./grid"

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

export function Homepage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith("en") ? "en" : "pt"
  const videos = videosByLang[lang]

  const demoFrames = [
    {
      id: 1,
      video: videos.sobreMim,
      to: "/sobre-mim",
      label: t("grid.sobreMim"),
    },
    {
      id: 2,
      video: videos.experiencia,
      to: "/experiencia",
      label: t("grid.experiencia"),
    },
    {
      id: 3,
      video: videos.projetos,
      to: "/projetos",
      label: t("grid.projetos"),
    },
    {
      id: 4,
      video: videos.contatos,
      to: "/contatos",
      label: t("grid.contatos"),
    },
  ]

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