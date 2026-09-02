import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { deepMerge } from "./merge"

import homepagePT from "@/pages/homepage/pt.json"
import naoEncontradaPT from "@/pages/nao-encontrada/pt.json"
import selecaoPT from "@/pages/selecao/pt.json"
import sobrePT from "@/pages/sobre/pt.json"
import experienciaPT from "@/pages/experiencia/pt.json"
import projetosPT from "@/pages/projetos/pt.json"
import contatosPT from "@/pages/contatos/pt.json"

import homepageEN from "@/pages/homepage/en.json"
import naoEncontradaEN from "@/pages/nao-encontrada/en.json"
import selecaoEN from "@/pages/selecao/en.json"
import sobreEN from "@/pages/sobre/en.json"
import experienciaEN from "@/pages/experiencia/en.json"
import projetosEN from "@/pages/projetos/en.json"
import contatosEN from "@/pages/contatos/en.json"

export type Lang = "pt" | "en"

const resources = {
  pt: {
    translation: deepMerge(
      homepagePT,
      naoEncontradaPT,
      selecaoPT,
      sobrePT,
      experienciaPT,
      projetosPT,
      contatosPT,
    ),
  },
  en: {
    translation: deepMerge(
      homepageEN,
      naoEncontradaEN,
      selecaoEN,
      sobreEN,
      experienciaEN,
      projetosEN,
      contatosEN,
    ),
  },
}

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
