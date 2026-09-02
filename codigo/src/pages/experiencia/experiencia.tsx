import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { BackButton } from "@/components/back-button";
import { Timeline } from "./timeline";

const imgClass =
  "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

export function Experiencia() {
  const { t } = useTranslation();

  const data = useMemo(
    () => [
      {
        title: t("pages.experiencia.titulo1"),
        content: (
          <div>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
              {t("pages.experiencia.conteudo1_1")}
            </p>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
              {t("pages.experiencia.conteudo1_2")}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/projetos/avila/Empreendimentos.png"
                alt="Ávila Empreendimentos"
                width={500}
                height={500}
                className={imgClass}
              />
              <img
                src="/projetos/avila/PortalCliente.png"
                alt="Ávila Portal Cliente"
                width={500}
                height={500}
                className={imgClass}
              />
            </div>
          </div>
        ),
      },
      {
        title: t("pages.experiencia.titulo2"),
        content: (
          <div>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
              {t("pages.experiencia.conteudo2_1")}
            </p>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
              {t("pages.experiencia.conteudo2_2")}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/projetos/aero/Noticias.png"
                alt="Aero Notícias"
                width={500}
                height={500}
                className={imgClass}
              />
              <img
                src="/projetos/aero/SobreCurso.png"
                alt="Aero Sobre Curso"
                width={500}
                height={500}
                className={imgClass}
              />
            </div>
          </div>
        ),
      },
      {
        title: t("pages.experiencia.titulo3"),
        content: (
          <div>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
              {t("pages.experiencia.conteudo3_1")}
            </p>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
              {t("pages.experiencia.conteudo3_2")}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/projetos/acessibee/inicioAcessiBee.png"
                alt="Acessibee Início"
                width={500}
                height={500}
                className={imgClass}
              />
              <img
                src="/projetos/acessibee/painelADMAcessibee.png"
                alt="Acessibee Painel ADM"
                width={500}
                height={500}
                className={imgClass}
              />
            </div>
          </div>
        ),
      },
      {
        title: t("pages.experiencia.titulo4"),
        content: (
          <div>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
              {t("pages.experiencia.conteudo4_1")}
            </p>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
              {t("pages.experiencia.conteudo4_2")}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/projetos/giro/DashBoard.png"
                alt="GIRO Dashboard"
                width={500}
                height={500}
                className={imgClass}
              />
              <img
                src="/projetos/giro/Relatorios.png"
                alt="GIRO Relatórios"
                width={500}
                height={500}
                className={imgClass}
              />
            </div>
          </div>
        ),
      },
      {
        title: t("pages.experiencia.titulo5"),
        content: (
          <div>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
              {t("pages.experiencia.conteudo5_1")}
            </p>
          </div>
        ),
      },
    ],
    [t]
  );

  return (
    <div className="min-h-screen w-full relative bg-zinc-950">
      <BackButton />
      <div className="absolute top-0 left-0 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}