import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

export type Lang = "pt" | "en"

const resources = {
  pt: {
    translation: {
      grid: {
        sobreMim: "Sobre mim",
        experiencia: "Experiência",
        projetos: "Projetos",
        contatos: "Contatos",
      },
      pages: {
        sobreMim: { titulo: "Sobre Mim" },
        experiencia: { titulo: "Experiência" },
        projetos: { titulo: "Projetos" },
        contatos: { titulo: "Contatos" },
      },
      notFound: {
        titulo: "404",
        mensagem: "Página não encontrada.",
      },
    },
  },
  en: {
    translation: {
      grid: {
        sobreMim: "About me",
        experiencia: "Experience",
        projetos: "Projects",
        contatos: "Contact",
      },
      pages: {
        sobreMim: { titulo: "About Me" },
        experiencia: { titulo: "Experience" },
        projetos: { titulo: "Projects" },
        contatos: { titulo: "Contact" },
      },
      notFound: {
        titulo: "404",
        mensagem: "Page not found.",
      },
    },
  },
} as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt",
    supportedLngs: ["pt", "en"],
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
  })

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng
})
document.documentElement.lang = i18n.language

export default i18n
