import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { ProfileSelector } from "@/components/ui/profile-selector"
import type { Perfil } from "../homepage/perfil"

const ICONES: Record<Perfil, string> = {
  recrutador: "/perfil/recrutador.svg",
  visitante: "/perfil/visitante.svg",
  professor: "/perfil/professor.svg",
}

export function SelecaoPerfil() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const perfis = (Object.keys(ICONES) as Perfil[]).map((perfil) => ({
    id: perfil,
    label: t(`perfil.${perfil}`),
    icon: ICONES[perfil],
  }))

  const handleSelect = (id: string) => {
    navigate("/inicio", { state: { perfil: id } })
  }

  return (
    <div className="min-h-dvh w-full flex flex-col items-center justify-center gap-10 bg-zinc-950 px-4">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-50 md:text-5xl">
          {t("pages.selecao.titulo")}
        </h1>
        <p className="text-zinc-400">{t("pages.selecao.descricao")}</p>
      </div>
      <ProfileSelector profiles={perfis} onProfileSelect={handleSelect} />
    </div>
  )
}