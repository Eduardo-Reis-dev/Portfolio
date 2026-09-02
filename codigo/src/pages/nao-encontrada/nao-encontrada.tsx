import { useTranslation } from "react-i18next"
import { BackButton } from "@/components/back-button"

export function NaoEncontrada() {
  const { t } = useTranslation()

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-4 bg-zinc-950 relative">
      <BackButton />
      <h1 className="text-4xl text-zinc-100">{t("notFound.titulo")}</h1>
      <p className="text-zinc-400">{t("notFound.mensagem")}</p>
    </div>
  )
}
