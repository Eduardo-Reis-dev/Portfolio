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
        sobreMim: {
          titulo: "Sobre Mim",
          saudacao: "Olá, eu sou o",
          bio: "Sou um Engenheiro de Software mineiro, com experiência FullStack e foco no Backend. Trabalho com <strong>Java, SpringBoot</strong> e <strong>Docker</strong> para o servidor da aplicação e <strong>React, Typescript</strong> e outros <strong>Frameworks de UI modernos</strong> para o cliente da aplicação",
          cta: "Acesse minhas <1>Experiências</1> para visualizar minha evolução como profissional, ou então veja minhas habilidades aplicadas nos meus <3>Projetos</3>. Se tiver interesse em falar comigo entre em <5>Contato</5>",
        },
        experiencia: { titulo: "Experiência" },
        projetos: { titulo: "Projetos" },
        contatos: {
          titulo: "Contatos",
          heroTitle: "Me liga hein!",
          heroDesc: "Gostou do portfolio e quer entrar em contato? Acessa algumas das minhas redes ou me mande um email diretamente desta página",
          linkedin: "Linkedin",
          github: "GitHub",
          whatsapp: "Whatsapp",
          email: "Escreva um Email",
        },
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
        sobreMim: {
          titulo: "About Me",
          saudacao: "Hi, im",
          bio: "I'm a Software Engineer from Minas Gerais, with FullStack experience and a focus on Backend. I work with <strong>Java, SpringBoot</strong> and <strong>Docker</strong> for the server side and <strong>React, Typescript</strong> and other <strong>modern UI Frameworks</strong> for the client side",
          cta: "Check out my <1>Experience</1> to see my professional growth, or browse my skills applied in my <3>Projects</3>. If you'd like to get in touch, visit my <5>Contact</5> page",
        },
        experiencia: { titulo: "Experience" },
        projetos: { titulo: "Projects" },
        contatos: {
          titulo: "Contact",
          heroTitle: "Get in touch!",
          heroDesc: "Liked my portfolio and want to reach out? Check out my socials or send me an email directly from this page",
          linkedin: "Linkedin",
          github: "GitHub",
          whatsapp: "Whatsapp",
          email: "Send an Email",
        },
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
