# Portfólio Pessoal

Este é o repositório do meu portfólio pessoal, desenvolvido para apresentar projetos, trajetória profissional e canais de contato com suporte a múltiplos idiomas (PT/EN) e navegação adaptativa por perfil.

Acesse a versão em produção: [portfolio-git-main-eduardoreisdevsoftware-2085s-projects.vercel.app](https://portfolio-git-main-eduardoreisdevsoftware-2085s-projects.vercel.app)

---

## 🚀 Tecnologias Utilizadas

- **React 18**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações e transições)
- **Lucide React** (ícones)
- **i18next / react-i18next** (internacionalização PT-BR / EN)
- **React Router DOM** (roteamento SPA)

---

## 📁 Estrutura de Diretórios

```text
codigo/
├── public/
│   ├── perfil/             # SVGs de seleção de perfil (recrutador, visitante, professor)
│   ├── projetos/           # Ativos visuais e logos dos projetos (GIRO, Ávila, Aero, Acessibee)
│   ├── eu.jpeg             # Foto de perfil
│   └── java.png
├── src/
│   ├── components/         # Componentes compartilhados (botões, carrossel, seletores de perfil)
│   ├── lib/                # Utilitários e helpers CSS
│   ├── pages/
│   │   ├── contatos/       # Página de contatos e redes sociais
│   │   ├── experiencia/    # Linha do tempo interativa e textos localizados
│   │   ├── homepage/       # Bento Grid responsivo com ordenação adaptativa por perfil
│   │   ├── nao-encontrada/ # Rota 404 personalizada
│   │   ├── projetos/       # Carrossel Coverflow e páginas dinâmicas de detalhamento
│   │   ├── selecao/        # Tela inicial de triagem por perfil
│   │   └── sobre/          # Bio, stack tecnológica e links rápidos
│   ├── i18n/               # Configurações de internacionalização (PT/EN)
│   ├── App.tsx             # Definição das rotas principais
│   └── main.tsx            # Ponto de entrada da aplicação
├── package.json
├── tsconfig.json
└── vite.config.ts
