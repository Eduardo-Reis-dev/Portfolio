import { BackButton } from "@/components/back-button"
import { Timeline } from "./timeline";

export function Experiencia() {
  const data = [
    {
      title: "07/2026\n\"Governeance Hub\"",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            SISTEMA AINDA EM CONSTRUÇÃO...
          </p>
        </div>
      )
    },
    {
      title: "04/2026\n\"Iniciação Científica\"",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Revisei pesquisas relacionadas ao projeto escritas em Inglês Técnico (B2) sobre jogos educativos e princípios de IHC
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Realizei entrevistas quantitativas com 10 pessoas idosas para entender sobre os Princípios de IHC que engajam este
            grupo amostral em jogos educativos
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Submeti o projeto ao 34º Seminário de Iniciação Científica, Tecnológica e de Inovação da PUC Minas          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "02/2026\n\"MODUS\"",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Desenvolvi um sistema de gerenciamento de projetos colaborando com uma equipe de mais 10 arquitetos para elicitar
            os requisitos do software, mapeando mais de 20 requisitos funcionais e 10 não funcionais
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Viabilizei o acompanhamento visual de tarefas, centralizando a gestão dos dados para 10 arquitetos, ao construir a
            página principal do sistema em React.js e TypeScript com integração de uma biblioteca de gráfico Gantt.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Padronizei o ambiente de desenvolvimento entre os 7 desenvolvedores do time, eliminando inconsistências entre
            ambientes locais, estruturando os containers da aplicação com Docker
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Padronizei o ambiente de desenvolvimento entre os 7 desenvolvedores do time, eliminando inconsistências entre
            ambientes locais, estruturando os containers da aplicação com Docker
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/projetos/modus/tarefas.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/projetos/modus/home.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/projetos/modus/clientes.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/projetos/modus/equipe.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "02/2026\n\"Monitoria\"",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Apoiei mais de 60 alunos ao longo do semestre com atendimento individual e em grupo, reforçando conteúdo de sala de
            aula
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Conduzi 12 aulões de revisão e oficinas práticas abordando Java, Spring Boot, Princípios POO e SOLID com a adesão
            média de 10 alunos por sessão, reforçando os tópicos de maior dificuldade
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="Apoiei mais de 60 alunos ao longo do semestre com atendimento individual e em grupo, reforçando conteúdo de sala de aula"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "02/2026\naté Atualmente\n\"RHSoft\"",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Desenvolvi um sistema de gerenciamento de projetos colaborando com uma equipe de mais 10 arquitetos para elicitar
            os requisitos do software, mapeando mais de 20 requisitos funcionais e 10 não funcionais
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Viabilizei o acompanhamento visual de tarefas, centralizando a gestão dos dados para 10 arquitetos, ao construir a
            página principal do sistema em React.js e TypeScript com integração de uma biblioteca de gráfico Gantt.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Padronizei o ambiente de desenvolvimento entre os 7 desenvolvedores do time, eliminando inconsistências entre
            ambientes locais, estruturando os containers da aplicação com Docker
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Padronizei o ambiente de desenvolvimento entre os 7 desenvolvedores do time, eliminando inconsistências entre
            ambientes locais, estruturando os containers da aplicação com Docker
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/projetos/rhsoft/login.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/projetos/rhsoft/contrachques.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/projetos/rhsoft/gestao.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/projetos/rhsoft/funcionarios.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "02/2026\n\"Cras Digital\"",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Desenvolvi um sistema para automação de demandas do CRAS, mapeando os principais processos da instituição e
            identificando gargalos para traduzi-los em requisitos de software.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Implementei o Backend da aplicação com a stack robusta de Java e Spring Boot com MySQL para persistência de
            dados dos beneficiários e JUnit para testes automatizados
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Colaborei com o desenvolvimento do Frontend do sistema usando de Vanilla Javascript com Modules e Tailwind para
            garantir uma boa usabilidade do sistema
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/projetos/cras/unidades.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/projetos/cras/servicos.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/projetos/cras/dashboards.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/projetos/cras/empregos.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "02/2025\n\"Inicio da Graduação\"",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              Startup template Aceternity
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full relative bg-zinc-950">
      <BackButton />
      <div className="absolute top-0 left-0 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}