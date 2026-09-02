# Portfólio Pessoal

Este é o repositório do meu portfólio pessoal, desenvolvido para apresentar **projetos, trajetória profissional, habilidades e canais de contato**, com suporte a múltiplos idiomas (PT-BR / EN) e navegação adaptativa de acordo com o perfil de quem está acessando.

O projeto foi desenvolvido com foco em apresentar minhas experiências e projetos de forma interativa, responsiva e organizada, permitindo diferentes formas de navegação conforme o perfil selecionado pelo visitante.

## 🌐 Acesso Online

Acesse a versão em produção:

**https://portfolio-git-main-eduardoreisdevsoftware-2085s-projects.vercel.app**

---

## 🚀 Tecnologias Utilizadas

* **React 18**
* **Vite**
* **TypeScript**
* **Tailwind CSS**
* **Framer Motion** — animações e transições
* **Lucide React** — biblioteca de ícones
* **i18next / react-i18next** — internacionalização PT-BR / EN
* **React Router DOM** — roteamento da aplicação

---

## ✨ Funcionalidades

*  Suporte aos idiomas **Português (PT-BR)** e **Inglês (EN)**
*  Seleção de perfil de navegação
*  Apresentação de projetos desenvolvidos
*  Página de detalhes dos projetos
*  Linha do tempo de experiências
*  Página "Sobre Mim"
*  Interface responsiva para diferentes dispositivos
*  Interface desenvolvida com Tailwind CSS
*  Animações e transições utilizando Framer Motion
*  Página de contatos e canais de comunicação
*  Página 404 personalizada
*  Carrossel interativo de projetos
*  Bento Grid na página inicial
*  Ordenação adaptativa do conteúdo de acordo com o perfil selecionado

---

## 📁 Estrutura de Diretórios

```text
codigo/
├── public/
│   ├── perfil/
│   │   └── # SVGs utilizados na seleção de perfil
│   ├── projetos/
│   │   └── # Ativos visuais e logos dos projetos
│   │      ├── GIRO/
│   │      ├── Avila/
│   │      ├── Aero/
│   │      └── Acessibee/
│   ├── eu.jpeg
│   └── java.png
│
├── src/
│   ├── components/
│   │   └── # Componentes compartilhados
│   │
│   ├── lib/
│   │   └── # Utilitários e helpers
│   │
│   ├── pages/
│   │   ├── contatos/
│   │   │   └── # Página de contatos e redes sociais
│   │   │
│   │   ├── experiencia/
│   │   │   └── # Linha do tempo interativa e textos localizados
│   │   │
│   │   ├── homepage/
│   │   │   └── # Bento Grid responsivo e ordenação por perfil
│   │   │
│   │   ├── nao-encontrada/
│   │   │   └── # Página 404 personalizada
│   │   │
│   │   ├── projetos/
│   │   │   └── # Carrossel Coverflow e detalhes dos projetos
│   │   │
│   │   ├── selecao/
│   │   │   └── # Tela inicial de seleção de perfil
│   │   │
│   │   └── sobre/
│   │       └── # Biografia, tecnologias e links rápidos
│   │
│   ├── i18n/
│   │   └── # Configurações de internacionalização
│   │
│   ├── App.tsx
│   │   └── # Definição das rotas principais
│   │
│   └── main.tsx
│       └── # Ponto de entrada da aplicação
│
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ⚙️ Instalação e Execução Local

Siga os passos abaixo para executar o projeto localmente.

### 1. Clone o repositório

```bash
git clone https://github.com/Eduardo-Reis-dev/Portfolio.git
```

### 2. Acesse a pasta do código-fonte

```bash
cd Portfolio/codigo
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto em ambiente de desenvolvimento

```bash
npm run dev
```

### 5. Acesse a aplicação

Após executar o comando, o Vite disponibilizará um endereço local, geralmente:

```text
http://localhost:5173
```

---

## 📜 Scripts Disponíveis

| Comando           | Descrição                                                 |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Inicializa o servidor de desenvolvimento                  |
| `npm run build`   | Compila o projeto e gera a versão otimizada para produção |
| `npm run preview` | Executa localmente o build de produção                    |
| `npm run lint`    | Realiza a verificação estática do código com ESLint       |

---

## 🖼️ Wireframes

Para auxiliar no planejamento e desenvolvimento da aplicação, foram desenvolvidos wireframes de média fidelidade para estruturar as principais interfaces do portfólio.

### Homepage

![Wireframe Homepage](./codigo/wireframes/home.png)

### Projetos

![Wireframe Projetos](./codigo/wireframes/projetos.png)

### Contatos

![Wireframe Contatos](./codigo/wireframes/contatos.png)

### Experiência

![Wireframe Experiência](./codigo/wireframes/experiencia.png)

### Sobre Mim

![Wireframe Sobre Mim](./codigo/wireframes/sobre-mim.png)

---

## 🎯 Objetivo do Projeto

O objetivo do projeto é desenvolver um portfólio pessoal que vá além de uma apresentação tradicional, utilizando uma experiência de navegação interativa para apresentar meus projetos, conhecimentos e trajetória.

A seleção de perfil permite adaptar a experiência do visitante, priorizando diferentes informações conforme seu objetivo de acesso ao portfólio.

---

## 🌎 Internacionalização

O portfólio possui suporte a dois idiomas:

* 🇧🇷 **Português (PT-BR)**
* 🇺🇸 **Inglês (EN)**

A internacionalização foi implementada utilizando:

* `i18next`
* `react-i18next`

---

## 👤 Navegação por Perfil

A página inicial possui uma etapa de seleção de perfil que permite adaptar a apresentação do conteúdo.

Entre os perfis considerados estão:

* **Recrutador**
* **Visitante**
* **Professor**

A partir do perfil selecionado, determinados conteúdos podem receber maior destaque na página inicial.

---

## 💼 Projetos

O portfólio possui uma área dedicada à apresentação dos projetos desenvolvidos, utilizando um carrossel interativo e páginas individuais para detalhamento.

Entre os projetos apresentados estão:

* **GIRO**
* **Ávila**
* **Aero**
* **Acessibee**

Cada projeto possui seus próprios elementos visuais e informações para facilitar a compreensão das soluções desenvolvidas.

---

## 📱 Responsividade

A aplicação foi desenvolvida considerando diferentes tamanhos de tela, buscando proporcionar uma experiência consistente em:

* 💻 Desktops
* 💻 Notebooks
* 📱 Smartphones
* 📲 Tablets

A interface utiliza **Tailwind CSS** para auxiliar na construção de layouts responsivos e adaptáveis.

---

## 🧩 Organização do Código

O projeto utiliza uma estrutura baseada em componentes e páginas independentes, facilitando a manutenção e evolução da aplicação.

Os componentes reutilizáveis ficam concentrados em `src/components`, enquanto as diferentes páginas e funcionalidades são organizadas dentro de `src/pages`.

A configuração de internacionalização é mantida separadamente em `src/i18n`.

---

## 🚀 Deploy

A versão de produção do projeto foi disponibilizada utilizando a plataforma **Vercel**.

**Link da aplicação:**

https://portfolio-git-main-eduardoreisdevsoftware-2085s-projects.vercel.app

---

## 👨‍💻 Autor

**Eduardo Reis**

Estudante de Engenharia de Software e desenvolvedor interessado em tecnologia, desenvolvimento web e criação de soluções digitais.

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e para apresentação do meu portfólio pessoal.
